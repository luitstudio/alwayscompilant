export function InsightCard({ category, title, summary, points, featured = false }: { category: string; title: string; summary: string; points: readonly string[]; featured?: boolean }) {
  return <article className={`ac-insight-card${featured ? " ac-insight-featured" : ""}`}><div className="ac-insight-meta"><span>{category}</span><span>GUIDE</span></div><h2>{title}</h2><p>{summary}</p><ul>{points.map((point) => <li key={point}>{point}</li>)}</ul></article>;
}
