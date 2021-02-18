import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import CookieConsent from "react-cookie-consent"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main style={{ marginTop: "67px" }}>{children}</main>
      <div className="big-spacer" />
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="zustimmen"
        enableDeclineButton="true"
        declineButtonStyle={{ borderRadius: "1em", fontFamily: "helvetica" }}
        buttonStyle={{
          borderRadius: "1em",
          backgroundColor: "#ff8c00",
          color: "white",
          fontFamily: "helvetica",
        }}
        declineButtonText="ablehnen"
        cookieName="gatsby-gdpr-google-analytics"
      >
        <p
          style={{
            color: "white",
            fontSize: "12px",
            fontFamily: "helvetica",
            margin: "10px",
          }}
        >
          Diese Website verwendet Cookies – nähere Informationen dazu und zu
          Ihren Rechten als Benutzer finden Sie in unserer Datenschutzerklärung
          am Ende der Seite. Klicken Sie auf „Ich stimme zu“, um Cookies zu
          akzeptieren und direkt unsere Website besuchen zu können.
        </p>
      </CookieConsent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
