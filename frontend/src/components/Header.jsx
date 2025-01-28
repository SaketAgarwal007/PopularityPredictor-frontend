import React from "react"
import { Link } from "react-router-dom"
import { Music } from "lucide-react"
import "./Header.css"

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <Music />
          <span>Hit Predict</span>
        </Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

