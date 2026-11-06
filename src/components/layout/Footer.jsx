
import {
  Instagram,
  Facebook,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';

import './Footer.css';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Investments', href: '/investments' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        {/* Brand */}
        <div className="footer-brand">
          <a href="/" className="footer-logo" aria-label="MGP Investments home">
            <img
              src="/images/mgp-logo.jpg"
              alt="MGP Investments"
              className="footer-logo-image"
            />
          </a>

          <p className="footer-tagline">
            Providing quality residences for Lesotho.
          </p>

          <p className="footer-brand-description">
            Your housing solution.
          </p>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/mgpinvestments/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://www.facebook.com/mgpinvestments/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>
                  <span>{link.label}</span>
                  <ArrowUpRight size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-column">
          <h3>Legal</h3>

          <ul>
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>
                  <span>{link.label}</span>
                  <ArrowUpRight size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column footer-contact">
          <h3>Contact Us</h3>

          <a href="tel:+26667833015" className="footer-contact-item">
            <Phone size={16} />
            <span>+266 6783 3015</span>
          </a>

          <a
            href="mailto:info@mgpinvestments.co.ls"
            className="footer-contact-item"
          >
            <Mail size={16} />
            <span>info@mgpinvestments.co.ls</span>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Green+City+Kofi+Annan+Road+Ha+Abia+Maseru+Lesotho"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-item footer-address"
          >
            <MapPin size={16} />
            <span>
              Green City, Kofi Annan Road,
              <br />
              Ha Abia, Maseru,
              <br />
              Lesotho
            </span>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} MGP Investments. All rights reserved.
        </p>

        <p className="footer-bottom-note">
          Building with purpose. Investing in tomorrow.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
