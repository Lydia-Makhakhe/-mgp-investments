
import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/#what-we-do' },
  { label: 'Our Projects', href: '/projects' },
  { label: 'Investment', href: '/investments' },
  { label: 'Insights', href: '/insights' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="/" className="navbar-logo" onClick={closeMenu}>
          <img
            src="/images/mgp-logo.jpg"
            alt="MGP Investments"
          />
        </a>

        <nav className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <a
            href="/contact"
            className="navbar-mobile-contact"
            onClick={closeMenu}
          >
            Make an Enquiry
            <ArrowUpRight size={16} />
          </a>
        </nav>

        <a href="/contact" className="navbar-contact">
          Make an Enquiry
          <ArrowUpRight size={17} />
        </a>

        <button
          type="button"
          className="navbar-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;
