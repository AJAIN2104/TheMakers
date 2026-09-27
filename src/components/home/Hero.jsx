import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
          <p className="eyebrow">ROBOTICS • AI • STEM • INNOVATION</p>
          <h1>Building Young Innovators Through <em>Robotics, AI & STEM.</em></h1>
          <p className="hero-copy">
            8+ years of hands-on STEM, robotics and innovation education across schools,
            universities and corporate environments.
          </p>
          <div className="hero-actions">
            <Link to="/parents" className="hero-choice">FOR PARENTS <ArrowRight size={18}/></Link>
            <Link to="/schools" className="hero-choice">FOR SCHOOLS <ArrowRight size={18}/></Link>
          </div>
        </motion.div>
      </div>
      <div className="scroll-hint"><ArrowDown size={18}/> Scroll to explore</div>
    </section>
  );
}
