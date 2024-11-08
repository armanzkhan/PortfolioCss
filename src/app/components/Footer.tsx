import React from 'react';
import "../style/Footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
       
        {/* Social Media Icons */}
        <div className="footer-social">
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom (Copyright/Contact Info) */}
      <div className="footer-bottom">
        <p>&copy; 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
