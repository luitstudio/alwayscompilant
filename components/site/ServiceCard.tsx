import Link from "next/link";

export function ServiceCard({ title, description, icon, index }: { title: string; description: string; icon: string; index: number }) {
  return <article className="ac-service-card"><div className="ac-card-top"><span className="ac-card-number">{String(index + 1).padStart(2, "0")}</span><div className="ac-service-icon"><img src={icon} alt="" /></div></div><h2>{title}</h2><p>{description}</p><Link href="/contact">Discuss this service <span aria-hidden="true">↗</span></Link></article>;
}
