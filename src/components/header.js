import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { HouseDoor } from "react-bootstrap-icons"
import logo from "../images/logo.svg"
import { Link } from "gatsby"

const Header = () => (
  <Navbar expand="lg" fixed="top" className="shadow">
    <div className="container">
      <Navbar.Brand href="/">
        <img
          src={logo}
          className="d-inline-block"
          alt="Oak and Lotus logo"
          style={{ height: "45px", width: "144px", margin: 0 }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto header">
          <Link className="align-middle" to="/" alt="Home">
            <HouseDoor viewBox="0 1.5 16 16" size={20} />
          </Link>
          <Link to="/about/">Über uns</Link>
          <Link to="/partner/">Für Unternehmen</Link>
          <Link to="/contact/">Kontakt</Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
)

export default Header
