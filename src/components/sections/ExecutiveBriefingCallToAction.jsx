import { motion } from "framer-motion";
import { MagneticButton } from "../shared/MagneticButton";
import "./ExecutiveBriefingCallToAction.css";

/**
 * Final Chapter: Choose the path into NexGen.
 * Contains user path cards (Government, Enterprises, Partners) and briefing calls to action.
 */
export function ExecutiveBriefingCallToAction() {
  const paths = [
    [
      "For Government",
      "National security, law enforcement, defense, border security, and public safety.",
    ],
    ["For Enterprises", "Investigations, fraud, compliance, risk, and intelligence teams."],
    ["For Partners", "Technology, research, integration, and strategic programs."],
  ];

  return (
    <section className="nx-engage">
      <div className="nx-section-heading">
        <p className="nx-kicker">Final Chapter</p>
        <h2>Choose the path into NexGen.</h2>
      </div>
      <div className="nx-engage-paths">
        {paths.map(([title, body], index) => (
          <motion.a
            href="#briefing"
            className="nx-engage-path"
            key={title}
            whileHover={{ flex: 1.2, boxShadow: "0 24px 64px rgba(25,22,18,.10)" }}
            transition={{ type: "spring", stiffness: 170, damping: 22 }}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div className="nx-engage-path-content">
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </motion.a>
        ))}
      </div>
      <div className="nx-cta-row">
        <MagneticButton>Request Executive Briefing</MagneticButton>
        <MagneticButton variant="secondary">Explore Platform</MagneticButton>
      </div>
    </section>
  );
}

export default ExecutiveBriefingCallToAction;
