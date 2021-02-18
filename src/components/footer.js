import React from "react"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "gatsby"
import logo from "../images/logo.svg"

const Footer = () => (
  <footer
    style={{
      marginTop: `2rem`,
      borderTop: "5px solid #A9DD86",
    }}
  >
    <Navbar style={{ borderBottom: "none" }}>
      <div className="container">
        <div className="row w-100">
          <div className="col-12 col-md-6 col-lg footer-col">
            <img
              alt="Oak&Lotus logo"
              src={logo}
              style={{
                marginBottom: "7px",
                height: "95px",
                width: "300px",
              }}
            />
            <p>
              <strong>
                © {new Date().getFullYear()}, Oak & Lotus Consulting
              </strong>
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg footer-col">
            <p className="footer-headding">
              <strong>Kontakt</strong>
            </p>
            <p>Oak&Lotus Consulting</p>
            <p>Augustusplatz 1-4</p>
            <p>04109 Leipzig</p>
            <p>
              <a className="p-0" href="mailto:oalconsult.com">
                info@oalconsult.com
              </a>
            </p>
          </div>
          <div className="col-12 col-md-6 col-lg footer-col">
            <p className="footer-headding">
              <strong>Über uns</strong>
            </p>
            <Nav className="flex-column">
              <Link to="/about/">Unternehmen</Link>
              <Link to="/impressum/">Impressum</Link>
              <Link to="/datenschutz/">Datenschutz</Link>
            </Nav>
          </div>
        </div>
      </div>
    </Navbar>
  </footer>
)

export default Footer
