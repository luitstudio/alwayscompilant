"""Deliver an Always Compliant contact inquiry directly to the recipient MX."""

from __future__ import annotations

import json
import os
import re
import smtplib
import ssl
import subprocess
import sys
from email.message import EmailMessage
from email.utils import formataddr


def clean_header(value: object, limit: int) -> str:
    return str(value or "").replace("\r", " ").replace("\n", " ").strip()[:limit]


def resolve_mx(domain: str) -> str:
    """Resolve the lowest-preference MX without requiring a Python package."""
    override = os.environ.get("CONTACT_DIRECT_MX", "").strip()
    if override:
        return override

    commands = (
        (["nslookup", "-type=mx", domain], r"(?:preference\s*=\s*(\d+).*?)?mail exchanger\s*=\s*([^\s]+)"),
        (["dig", "+short", "MX", domain], r"^(\d+)\s+([^\s]+)"),
    )
    records: list[tuple[int, str]] = []

    for command, pattern in commands:
        try:
            result = subprocess.run(
                command,
                capture_output=True,
                check=False,
                text=True,
                timeout=8,
            )
        except (FileNotFoundError, subprocess.SubprocessError):
            continue

        for match in re.finditer(pattern, result.stdout, flags=re.IGNORECASE | re.MULTILINE):
            preference = int(match.group(1) or 0)
            records.append((preference, match.group(2).rstrip(".")))
        if records:
            break

    if records:
        return min(records)[1]

    # Current public MX for alwayscompliant.in; CONTACT_DIRECT_MX can override it.
    if domain.lower() == "alwayscompliant.in":
        return "smtp.secureserver.net"
    return domain


def main() -> None:
    payload = json.load(sys.stdin)
    name = clean_header(payload.get("name"), 100)
    business = clean_header(payload.get("business"), 150) or "Not provided"
    sender_email = clean_header(payload.get("email"), 254)
    phone = clean_header(payload.get("phone"), 30)
    service = clean_header(payload.get("service"), 120)
    message_text = str(payload.get("message") or "").strip()[:4000]

    if not all((name, sender_email, phone, service, message_text)):
        raise RuntimeError("Incomplete contact inquiry")

    to_email = os.environ.get("CONTACT_TO_EMAIL", "info@alwayscompliant.in").strip()
    from_email = os.environ.get("CONTACT_FROM_EMAIL", "website@alwayscompliant.in").strip()
    recipient_domain = to_email.rsplit("@", 1)[-1]
    mx_host = resolve_mx(recipient_domain)

    email = EmailMessage()
    email["Subject"] = f"Website compliance inquiry - {service}"
    email["From"] = formataddr(("Always Compliant Website", from_email))
    email["To"] = to_email
    email["Reply-To"] = formataddr((name, sender_email))
    email.set_content(
        "\n".join(
            (
                "New inquiry from the Always Compliant website",
                "",
                f"Full name: {name}",
                f"Business name: {business}",
                f"Email: {sender_email}",
                f"Phone: {phone}",
                f"Service: {service}",
                "",
                "Requirement:",
                message_text,
            )
        )
    )

    if os.environ.get("CONTACT_MAIL_DRY_RUN") == "1":
        print(json.dumps({"ok": True, "to": to_email, "mx": mx_host}))
        return

    port = int(os.environ.get("CONTACT_DIRECT_PORT", "25"))
    helo_host = os.environ.get("CONTACT_HELO_HOST", "alwayscompliant.in").strip()
    context = ssl.create_default_context()

    with smtplib.SMTP(mx_host, port, local_hostname=helo_host, timeout=15) as smtp:
        smtp.ehlo()
        if smtp.has_extn("starttls"):
            smtp.starttls(context=context)
            smtp.ehlo()
        # Empty envelope sender prevents delivery failures from bouncing to a visitor.
        smtp.send_message(email, from_addr="", to_addrs=[to_email])

    print(json.dumps({"ok": True, "to": to_email}))


if __name__ == "__main__":
    try:
        main()
    except Exception as error:
        print(str(error), file=sys.stderr)
        raise SystemExit(1)
