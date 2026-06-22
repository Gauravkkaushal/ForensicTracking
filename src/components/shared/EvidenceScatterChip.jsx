import { motion, useTransform } from "framer-motion";
import "./EvidenceScatterChip.css";

/**
 * An individual evidence chip that animates its position (x, y) and opacity
 * based on the parent section's scroll progress.
 * 
 * @param {Object} props
 * @param {string} props.item - The evidence name/text label.
 * @param {number} props.index - Index of the chip in the array.
 * @param {number} props.total - Total number of chips.
 * @param {import("framer-motion").MotionValue<number>} props.scrollYProgress - Progress value of scroll.
 */
export function EvidenceScatterChip({ item, index, total, scrollYProgress }) {
  // Distribute chips circularly using polar coordinates
  const angle = (index / total) * Math.PI * 2;
  const radius = 34 + (index % 4) * 11;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  // Stagger entry opacity based on index distribution
  const delayStart = index / total;
  const itemOpacity = useTransform(scrollYProgress, [delayStart * 0.45, delayStart * 0.45 + 0.18], [0, 1]);

  // Pull chips inward towards the center as scroll progresses
  const itemX = useTransform(scrollYProgress, [0.2, 0.76], [`${x}vw`, `${x * 0.18}vw`]);
  const itemY = useTransform(scrollYProgress, [0.2, 0.76], [`${y}vh`, `${y * 0.12}vh`]);

  return (
    <motion.div className="nx-evidence-chip" style={{ opacity: itemOpacity, x: itemX, y: itemY }}>
      <span>{String(index + 1).padStart(2, "0")}</span>
      {item}
    </motion.div>
  );
}

export default EvidenceScatterChip;
