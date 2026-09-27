import { schools } from "../../data/siteData";

export default function SchoolExperience() {
  return (
    <section className="school-experience">
      <div className="section-heading">
        <p className="eyebrow dark">OUR SCHOOL EXPERIENCE</p>
        <h2>Trusted across <span>leading school ecosystems.</span></h2>
        <p className="lead">Examples from the school ecosystem represented in our programme and experience materials.</p>
      </div>
      <div className="school-grid">
        {schools.map((school, i) => (
          <article className="school-card" key={school.name}>
            <small>{String(i+1).padStart(2, "0")}</small>
            <div><h3>{school.name}</h3><p>{school.location}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
