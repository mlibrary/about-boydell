import React, {useState} from "react"
import {Link} from "gatsby"

const Navbar = () => {
  const [isOpen, setNav] = (useState(false))
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">        
        <a href="/" className="navbar-brand mt-2">
          <h1 className="sr-only">Boydell & Brewer - Opening the Future</h1>
          <img src="/assets/boydell-brewer.png" alt="" height="70" width="auto" className="bb-logo navbar-brand-logo"/>
        </a>
        <a className="navbar-brand" href="https://openingthefuture.net">
          <img src="/assets/otf-logo.png" alt="Opening the Future" height="70" width="auto" className="navbar-brand-logo"/> 
        </a>
        
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon" />
        </button>
        <div id="navbar" className={
          isOpen
            ? "collapse navbar-collapse flex-row show"
            : "collapse navbar-collapse flex-row-reverse"
          }
        >
          <ul className="navbar-nav float-right">
            <li className="nav-item">
              <Link to="/packages" className="nav-link">
                Sign Up
              </Link>
            </li> 
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/about">About</a>
                <a className="dropdown-item" href="/news">News</a>
                <a className="dropdown-item" href="/contact">Contact</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Resources
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/resources">Resources</a>
                <a className="dropdown-item" href="/faq">FAQs</a>
                <a className="dropdown-item" href="/author-faq">Author FAQs</a>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/oa-progress" className="nav-link">
                OA Progress
              </Link>
            </li> 
            <li className="nav-item">
              <Link to="/for-libraries" className="nav-link">
                For Libraries
              </Link>
            </li>            
            <li className="nav-item">
              <Link to="/supporters" className="nav-link">
                Supporters
              </Link>
            </li>                             
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
