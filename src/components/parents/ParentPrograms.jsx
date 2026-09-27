const items = [
  ["Robotics & Engineering", "Mechanical systems, motors, sensors, automation and autonomous robotics."],
  ["STEM & Design", "Electronics, circuitry, CAD, 3D printing, fabrication and product prototyping."],
  ["Computing", "Computational thinking, Scratch, Python, game development and computer vision."],
  ["Innovation", "Research, ideation, design thinking, prototyping, testing, iteration and real-world problem solving."]
];

export default function ParentPrograms() {
  return (
    <section className="section">
      <div className="section-heading center">
        <p className="eyebrow dark">WHAT STUDENTS EXPERIENCE</p>
        <h2>Four pillars of <span>making.</span></h2>
      </div>
      <div className="card-grid four">
        {items.map(([title, text], i) => <article className="info-card" key={title}><small>0{i+1}</small><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>
  );
}
