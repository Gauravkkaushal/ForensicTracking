import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { evidenceItems } from "../../constants/data";
import { EvidenceScatterChip } from "../shared/EvidenceScatterChip";
import "./EvidenceScatteringScroll.css";

/**
 * Chapter One: The Fragment.
 * An interactive scroll section showing floating evidence chips centering into a resolved case core.
 */
export function EvidenceScatteringScroll() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const fieldOpacity = useTransform(
    useTransform(scrollYProgress, [0.1, 0.6], [0, 1]),
    [0, 1],
    [0.45, 1]
  );
  
  const centerScale = useTransform(scrollYProgress, [0.55, 0.9], [0.88, 1.08]);
  const centerOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);

  return (
    <section className="nx-evidence-scene" ref={containerRef}>
      <div className="nx-sticky">
        <motion.div className="nx-evidence-field" style={{ opacity: fieldOpacity }}>
          {evidenceItems.map((item, index) => (
            <EvidenceScatterChip
              key={item}
              item={item}
              index={index}
              total={evidenceItems.length}
              scrollYProgress={scrollYProgress}
            />
          ))}

          <motion.div className="nx-case-core" style={{ opacity: centerOpacity, scale: centerScale }}>
            <span>CASE RESOLVED</span>
            <strong>NX-INTEL-0429</strong>
          </motion.div>
        </motion.div>

        <div className="nx-scene-copy nx-scene-copy-left">
          <p className="nx-kicker">Chapter One</p>
          <h2>The fragment.</h2>
          <p>Investigators are not overwhelmed by a lack of evidence. They are overwhelmed by abundance.</p>
        </div>
      </div>
    </section>
  );
}

export default EvidenceScatteringScroll;
