import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { divisions } from "../../constants/data";
import "./SevenDivisionsHorizontalScroll.css";

/**
 * Chapter Three: One intelligence platform. Seven specialized divisions.
 * A horizontal scroll-triggered slide deck revealing different intelligence divisions.
 */
export function SevenDivisionsHorizontalScroll() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Slide track translation based on page scrolling progress
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(divisions.length - 1) * 100}%`]);
  const [active, setActive] = useState(0);

  // Sync current slide index with active dots indicator
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = Math.min(
      divisions.length - 1,
      Math.max(0, Math.round(latest * (divisions.length - 1)))
    );
    setActive(next);
  });


  return (
    <section className="nx-platform-scroll" ref={containerRef}>
      <div className="nx-platform-sticky">
        <div className="nx-platform-header">
          <p className="nx-kicker">Chapter Three</p>
          <h2>One intelligence platform. Seven specialized divisions.</h2>
          <div className="nx-platform-index">
            {divisions.map((division, index) => (
              <span
                key={division.id}
                className={index === active ? "active" : ""}
                title={`Go to Division ${index + 1}`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            ))}
          </div>
        </div>
        <motion.div className="nx-platform-track" style={{ x }}>
          {divisions.map((division) => (
            <article className="nx-division-panel" key={division.id}>
              <div className="nx-division-copy">
                <p className="nx-kicker">{division.eyebrow}</p>
                <h3>{division.title}</h3>
                <p>{division.thesis}</p>
                <div className="nx-product-pills">
                  {division.products.map((product) => (
                    <span key={product}>{product}</span>
                  ))}
                </div>
              </div>
              <div className="nx-proof-card">
                {division.proof.map((step, index) => (
                  <motion.div
                    className="nx-proof-row"
                    key={step}
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{step}</strong>
                  </motion.div>
                ))}
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SevenDivisionsHorizontalScroll;
