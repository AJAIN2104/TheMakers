export default function PhysicalAI() {
  return (
    <section className="section physical-ai">
      <div className="split">
        <div>
          <p className="eyebrow dark">AI & PHYSICAL AI</p>
          <h2>From coding to <span>autonomous systems.</span></h2>
        </div>
        <div>
          <p className="lead">
            AI is not treated merely as Python programming or basic computer vision. Students progressively move
            through electronics, sensors, microcontrollers, robotics, computer vision, machine learning, edge AI
            and intelligent physical systems.
          </p>
          <div className="pipeline">
            {["Coding","Electronics","Robotics","Computer Vision","Machine Learning","Edge AI","Physical AI","Autonomous Systems"].map(x => <span key={x}>{x}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
