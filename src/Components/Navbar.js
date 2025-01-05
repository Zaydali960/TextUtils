import React from 'react'
// import PropTypes from 'prop-types'
// import {version} from 'react-router-dom'
// import {
//     BrowserRouter as Router,
//     Link
//   } from "react-router-dom";
  

// console.log(version)
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} bg-${props.greenMode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/about">{props.about}</Link>
          </li> */}
        </ul>
      </div>
          <div onClick={props.toogleMode} className="form-check form-switch border border-1">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode === "light"?"dark" :"light"}`} htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
</div>
    
          <div className="form-check form-switch mx-4">
  <input onClick={props.greenToogleMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode === "light"?"dark" :"light"}`} htmlFor="flexSwitchCheckDefault">{props.greenModeText}</label>
</div>
    </div>
  </nav>
  )
}


// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     about: PropTypes.string.isRequired

//  }
// Navbar.defaultProps = {
//     title: 'Title here',
//     about: "About here",
//     home: "Home here"
//   };