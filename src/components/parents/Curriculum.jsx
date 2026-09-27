import { curriculum } from "../../data/siteData";
export default function Curriculum() {
  return (
    <section className="section light-gray">
      <div className="section-heading">
        <p className="eyebrow dark">PROGRESSIVE CURRICULUM</p>
        <h2>KG to Grade 9+ — <span>learning that grows with the student.</span></h2>
      </div>
      <div className="curriculum-list">
        {curriculum.map(([grade, stage, tools]) => (
          <article key={grade}>
            <span>{grade}</span><h3>{stage}</h3><p>{tools}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
