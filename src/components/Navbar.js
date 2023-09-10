import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
    
  <div className="container">
    <Link className="navbar-brand" to="#">Ek</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Carrer</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Location</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Professional</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Programs</Link>

        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Life at Ekalakaar</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Hiring tips</Link>
        </li>
     
      </ul>
      <ul className="d-flex navbar-nav me-auto mb-2 mb-lg-0" role="search">
      <li className="nav-item">
          <Link className="nav-link" to="#">Search</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Sign in</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    
    </div>
  )
}
