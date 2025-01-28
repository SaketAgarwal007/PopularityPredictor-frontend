import React from "react"
import { Github, Twitter, Mail } from "lucide-react"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>We provide music analytics and popularity predictions.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <nav className="footer-nav">
            <a href="/">Home</a>
            <a href="/dashboard">Dashboard</a>
          </nav>
        </div>
        <div className="footer-section">
          <h3>Connect</h3>
          <div className="social-links">
            <a href="#">
              <Github />
            </a>
            <a href="#">
              <Twitter />
            </a>
            <a href="#">
              <Mail />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Music Analytics. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

