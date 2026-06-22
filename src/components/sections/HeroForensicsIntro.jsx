import { motion } from "framer-motion";
import "./HeroForensicsIntro.css";

/**
 * Main landing page hero introducing the Forensic Intelligence Platform value prop.
 */
export function HeroForensicsIntro() {
  return (
    <section className="nx-hero" id="top">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="nx-kicker">Forensic Intelligence Platform</p>
        <h1>Forensic Intelligence for the Complexity Era</h1>
        <p className="nx-hero-lede">
          Modern investigations generate more evidence than any human team can meaningfully process.
          NexGen transforms fragmented information into operational understanding.
        </p>
        <div className="nx-hero-tags">
          <span>Government Agencies</span>
          <span>National Security</span>
          <span>Law Enforcement</span>
          <span>Enterprise Investigations</span>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroForensicsIntro;
