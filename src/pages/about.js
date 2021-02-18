import React, { useEffect } from "react"
import Aos from "aos"

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoCards from "../components/InfoCards"

import { Person, XDiamond, Droplet } from "react-bootstrap-icons"
import { Link, useStaticQuery, graphql } from "gatsby"
import Button from "react-bootstrap/Button"
import Img from "gatsby-image"

const About = () => {
  useEffect(() => {
    Aos.init({})
  })

  const data = useStaticQuery(graphql`
    query about {
      about: file(relativePath: { eq: "thanh_hai_do.jpeg" }) {
        childImageSharp {
          fluid(maxHeight: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const cardData = [
    [
      <Person className="mb-2" color="#75BF69" size={48} />,
      "Zuerst der Mensch",
      "Wir stehen für eine sichere und wertschätzende Arbeitsweise, in dem sich jeder Einzelne nachhaltig einbringen, entwickeln, sowie entfalten kann.",
    ],
    [
      <XDiamond className="mb-2" color="#75BF69" size={48} />,
      "Integrität",
      "Wir arbeiten nach den fachlich höchsten Standards und richten uns klar an ethische Maßstäben aus. Transparente Arbeitsweise und offene Kommunikation sichern einen vertrauensvollen Umgang im Team und führen zu Integrität gegenüber unseren Kunden und Partnern.",
    ],
    [
      <Droplet className="mb-2" color="#75BF69" size={48} />,
      "Nachhaltigkeit",
      "Wir richten unsere Arbeit für Partner und Kunden nachhaltig aus. Nachhaltigkeit hat für uns zugleich eine ökonimische, ökologische und soziale Dimension.",
    ],
  ]

  return (
    <Layout>
      <SEO title="Qualifizierte Azubis finden: Oak&Lotus Consulting" />
      <div className="container" data-aos="fade-right">
        <div className="big-spacer" />
        <div className="row">
          <div className="col-lg">
            <h2>Wer wir sind</h2>
            <p>In Deutschland zu Hause, in Vietnam vernetzt.</p>
          </div>
          <div className="col-lg m-3">
            <Img fluid={data.about.childImageSharp.fluid} />
          </div>
        </div>
      </div>
      <div className="spacer" />
      <div className="container m-auto text-center" data-aos="fade-left">
        <h1>Gemeinsam mehr erreichen.</h1>
        <p>
          Fachkräftemangel, demografischer Wandel, Urbanisierung - die Aufgaben
          vor denen wir stehen werden immer komplexer. Wir stellen uns diesen
          Herausforderungen und kreieren gleichzeitig außergewöhnliche und
          nachhaltige Ergebnisse für unsere Partner. <br />
          Wir bekennen uns zu dem Ziel die Lebensqualität aller Generationen zu
          verbessern.
        </p>
      </div>
      <div className="spacer" />
      <div className="container text-center">
        <h2 data-aos="fade-right">Unsere Visionen und Werte</h2>
        <InfoCards
          first={cardData[0]}
          second={cardData[1]}
          third={cardData[2]}
        />
      </div>
      <div className="spacer" />
      <div
        className="dark-green-background
          container-fluid
          shadow m-auto text-center"
      >
        <div className="py-5" data-aos="flip-up">
          <h2>Kommen Sie mit uns ins Gespräch.</h2>
          <Link to="/contact/">
            <Button className="button shadow">Kontakt aufnehmen</Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default About
