import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
      <div className="navbar">
            <div className="list">
                <li className="ms-2 me-2 mt-2"><i className="fa-solid cloud fa-cloud-bolt"></i></li>
                <li className="ms-2 me-3"><button className="btn">on teams <i class="fa-solid fa-caret-down ms-3"></i></button></li>
                <li className="ms-2 me-2 "><i className="bi bi-plus"></i></li>
                <div className="hr1 ms-2 me-2"></div>
                <li className="ms-2 me-2"><i className="bi bi-gear"></i></li>
                <div className="hr1 ms-2 me-2"></div>
                <li className="ms-2 me-2"><i className="bi bi-card-text"></i></li>
                <div className="hr1 ms-2 me-2"></div>
                <li className="search mt-2"><input className="searchbtn" type="text" placeholder="Search"/></li>   
            </div>     
      </div>
  )
}

export default Navbar
