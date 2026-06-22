import { motion } from "framer-motion";
import "./RigorTrustStatements.css";

/**
 * Chapter Five: Trust is earned through rigor.
 * Scroll-triggered typographic display showing core investigative guidelines.
 */
export function RigorTrustStatements() {
  const statementTexts = [
    "Every result must be explainable.",
    "Every conclusion must be traceable.",
    "Every finding must be defensible.",
  ];

  return (
    <section className="nx-trust">
      <p className="nx-kicker">Chapter Five</p>
      <h2>Trust is earned through rigor.</h2>
      <div className="nx-trust-statements">
        {statementTexts.map((text, index) => (
          <motion.p
            key={text}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.55 }}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </section>
  );
}

export default RigorTrustStatements;
