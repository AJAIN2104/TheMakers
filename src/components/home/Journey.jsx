const steps = ["Explore", "Build & Code", "Create", "Design", "Engineer", "Innovate", "Solve"];
export default function Journey() {
  return (
    <section className="section dark-section">
      <div className="section-heading center">
        <p className="eyebrow">OUR APPROACH</p>
        <h2>One continuous learning <span>journey.</span></h2>
      </div>
      <div className="journey">
        {steps.map((step, i) => <div className="journey-step" key={step}><small>0{i+1}</small><strong>{step}</strong></div>)}
      </div>
    </section>
  );
}
