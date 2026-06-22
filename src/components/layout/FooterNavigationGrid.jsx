import { useMemo } from "react";
import "./FooterNavigationGrid.css";

/**
 * Site footer displaying branding info, category navigation links,
 * and standard dynamic copyright year indicator.
 */
export function FooterNavigationGrid() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="nx-footer">
      <div>
        <strong>NexGen Forensics</strong>
        <p>Building the operational infrastructure for the future of forensic intelligence.</p>
      </div>
      <div className="nx-footer-grid">
        <a href="#platform">iMatch</a>
        <a href="#platform">NexFusion</a>
        <a href="#platform">NexCase</a>
        <a href="#platform">NexWatch</a>
        <a href="#platform">Digital Intelligence</a>
        <a href="#platform">Audio Intelligence</a>
        <a href="#platform">Document Intelligence</a>
        <a href="#validation">Validation</a>
      </div>
      <div className="nx-footer-legal">
        <small>© {year} NexGen Forensics</small>
      </div>
    </footer>
  );
}

export default FooterNavigationGrid;
