import Image from "next/image";
import Link from "next/link";
import { servicePath } from "@/data/pages";

export function ServiceCard({ title, description, icon, slug, index }: { title: string; description: string; icon: string; slug: string; index: number }) {
  return (
    <article className="ac-service-card">
      <div className="ac-card-top">
        <span className="ac-card-number">{String(index + 1).padStart(2, "0")}</span>
        <div className="ac-service-icon">
          <div className="ac-service-icon-frame">
            <Image src={icon} alt="" width={114} height={72} unoptimized />
          </div>
        </div>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href={servicePath(slug)}>Read service details <span aria-hidden="true">-&gt;</span></Link>
    </article>
  );
}
