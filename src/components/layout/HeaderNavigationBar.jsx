import "./HeaderNavigationBar.css";

/**
 * Global navigation header including standard branding and viewport anchor links.
 */
export function HeaderNavigationBar() {
  return (
    <nav className="nx-nav">
      <a href="#top" className="nx-brand">
        NexGen Forensics
      </a>
      <div>
        <a href="#platform">Products</a>
        <a href="#research">Research</a>
        <a href="#validation">Validation</a>
        <a href="#briefing">Engage</a>
      </div>
    </nav>
  );
}

export default HeaderNavigationBar;
