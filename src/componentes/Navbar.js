import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>SmartFut</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item " >
          <Link className="nav-link active" aria-current="page" to='/'> Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/equipos'>Equipos</Link>
        </li> 
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to='/torneos' role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Torneos
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to=''>Campeonato pinar libre</Link></li>
            <li><Link className="dropdown-item" to=''>Campeonato pinar sub 40</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to=''>Campeonato los laureles libre</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='Noticias'> Noticias</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-info" type="submit">Search</button>
        
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar