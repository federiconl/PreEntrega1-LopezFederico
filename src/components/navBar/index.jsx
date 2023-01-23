import React from 'react'
import CartWidget from '../CartWidget'


const NavBar = () => {
  return (
    <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="../pages/index.js">Game of Freaks</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="../pages/index.js">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../pages/aboutUs.js">About us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="../pages/upcoming.js">Upcoming games</a>
          </li>
          <a className="nav-link" href=""><CartWidget/>3</a>
        </ul>
        
        
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav></div>
  )
}

export default NavBar