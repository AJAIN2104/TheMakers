import SchoolModels from "../components/schools/SchoolModels";
import SchoolExperience from "../components/schools/SchoolExperience";

export default function Schools() {
  return (
    <main>
      <section className="inner-hero schools-hero">
        <div><p className="eyebrow">FOR SCHOOLS</p><h1>Build an <em>innovation ecosystem.</em></h1><p>Curriculum, labs, clubs, makerspaces, teacher development and turnkey robotics programmes.</p></div>
      </section>
      <section className="section"><div className="section-heading center"><p className="eyebrow dark">THE MAKERS FOR SCHOOLS</p><h2>From technology learning to <span>real-world innovation.</span></h2></div><p className="lead centered">We help schools progressively develop students into creators, designers, engineers, programmers, innovators and problem-solvers through meaningful hands-on experiences.</p></section>
      <SchoolModels/>
      <SchoolExperience/>
      <section className="section dark-section"><div className="section-heading center"><p className="eyebrow">PHYSICAL AI</p><h2>Perception → Data → AI/ML → Decision → <span>Physical Action.</span></h2></div></section>
    </main>
  );
}
