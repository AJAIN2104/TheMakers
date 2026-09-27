import { Link } from "react-router-dom";
import ParentPrograms from "../components/parents/ParentPrograms";
import Curriculum from "../components/parents/Curriculum";
import InstagramSection from "../components/parents/InstagramSection";

export default function Parents() {
  return (
    <main>
      <section className="inner-hero parents-hero">
        <div><p className="eyebrow">FOR PARENTS</p><h1>Help your child become a <em>creator.</em></h1><p>Progressive robotics, STEM, coding, AI and innovation learning built around doing.</p></div>
      </section>
      <ParentPrograms/>
      <Curriculum/>
      <section className="section dark-section"><div className="section-heading center"><p className="eyebrow">STUDENT OUTCOMES</p><h2>Skills that go <span>beyond the classroom.</span></h2></div><div className="outcomes">{["Critical & computational thinking","Engineering & problem solving","Creativity & innovation","Programming & AI capabilities","Design & prototyping","Research & iterative thinking","Collaboration & communication","Technology portfolio"].map(x=><span key={x}>{x}</span>)}</div></section>
      <InstagramSection/>
      <section className="section cta-section"><h2>Ready to start <span>making?</span></h2><Link to="/contact" className="dark-btn">Talk to The Makers →</Link></section>
    </main>
  );
}
