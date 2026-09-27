const models = [
  ["A", "Robotics & STEM Curriculum", "Grades 1–11", "Progressive, age-appropriate curriculum covering robotics, coding, AI, design, fabrication and project-based learning."],
  ["B", "Robotics Lab Setup", "Permanent Infrastructure", "End-to-end lab design, hardware planning, curriculum mapping and teacher training."],
  ["C", "Robotics & Technology Club", "Grades 1–12", "Instructor-led enrichment focused on robotics challenges, coding, innovation and talent development."],
  ["D", "Monthly Turnkey Robotics Program", "Grades 1–9", "Curriculum, instructors, hardware, inventory, maintenance, reporting and programme management."],
  ["E", "Makerspace Program", "All Grades", "Robotics, electronics, 3D printing, product design, woodworking, AI, drones, wearables and digital media."],
  ["F", "Design Thinking & Capstone", "Grades 8–12", "Mentor-led progression from problem identification and research through prototyping and final showcase."]
];

export default function SchoolModels() {
  return <section className="section"><div className="section-heading center"><p className="eyebrow dark">PROGRAM MODELS</p><h2>Choose the ecosystem <span>your school needs.</span></h2></div><div className="card-grid three">{models.map(([letter,title,grade,text]) => <article className="info-card model" key={letter}><small>{letter}</small><h3>{title}</h3><b>{grade}</b><p>{text}</p></article>)}</div></section>;
}
