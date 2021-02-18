import React, { useEffect } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CircledNumber from "../components/circledNumber"
import InfoCards from "../components/infoCards"

import BackgroundImage from "gatsby-background-image"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Aos from "aos"
import "aos/dist/aos.css"
import { People, Globe2, Award } from "react-bootstrap-icons"
import Img from "gatsby-image"

const IndexPage = () => {
  useEffect(() => {
    Aos.init({})
  })

  const data = useStaticQuery(graphql`
    query index {
      group: file(relativePath: { eq: "group_learning.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 310) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      woman: file(relativePath: { eq: "woman.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 510) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      banner: file(relativePath: { eq: "large_banner.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const cardData = [
    [
      <Award className="mb-2" color="#75BF69" size={48} />,
      "Rundum-Service",
      "Alles organisiert! Von Planung und Suche über Anreise und Betreuung vor Ort.",
    ],
    [
      <People className="mb-2" color="#75BF69" size={48} />,
      "Top Kandidaten",
      "Gebildet und motiviert - durch proaktives Bewerben und unserem Qualitätscheck zu den richtigen Mitarbeitern!",
    ],
    [
      <Globe2 className="mb-2" color="#75BF69" size={48} />,
      "In Vietnam vernetzt",
      "Ausgezeichnet durch eine Vielzahl an Kooperationen mit Schulen, Universitäten und Sprachinstituten.",
    ],
  ]

  return (
    <Layout>
      <SEO title="Azubis für Ihr Unternehmen" />

      <BackgroundImage fluid={data.banner.childImageSharp.fluid}>
        <div className="container py-5" data-aos="fade-right">
          <div className="row">
            <div className="col">
              <h2>Kein passendes Personal am Start?</h2>
              <p>
                Wir rekrutieren Azubis, besetzen Ihre offenen Stellen und helfen
                bei der Intergration.
              </p>
              <Link to="/contact/">
                <Button className="button shadow">
                  Unverbindliche Anfrage
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </BackgroundImage>
      <div className="spacer" />
      <div className="container m-auto text-center" data-aos="fade-left">
        <h1>Internationale Azubis für Ihr Unternehmen.</h1>
        <p>
          Azubis sind ein ausschlaggebender Faktor für den Erfolg Ihres
          Unternehmens. Bei der Personalsuche geht es nicht nur darum neue
          Arbeitskräfte zu finden, sondern es sollen auch die Richtigen sein,
          die zum Erfolg Ihres Unternehmens beitragen. Unser Konzept ist es
          gemeinsam mit Ihnen eine optimale Lösung zu finden. Transparenz und
          stätige Professionalität sind dabei unser höchstes Gebot.
        </p>
      </div>
      <div className="spacer" />
      <InfoCards first={cardData[0]} second={cardData[1]} third={cardData[2]} />
      <div className="spacer" />
      <div className="green-background container-fluid shadow">
        <div className="container">
          <div className="row py-5">
            <div className="col-lg mb-5" data-aos="fade-left">
              <h2>Azubis aus Vietnam</h2>
              <p>
                Für Vietnamesen ist Deutschland ein Raum für Chancen und
                Entfaltung. Dementsprechend sind unsere Teilnehmer hochmotiviert
                in Deutschland Fuß zu fassen. Diese Aussicht wollen wir diesen
                jungen und fleißigen Nachwuchstalenten - ausgezeichnet durch
                eine abgeschlossene Schulbildung, sowie Sprach- und
                Kulturkenntnissen - ermöglichen. Die vakanten Stellen in Ihrem
                weltoffenen Unternehmen werden passend und nachhaltig besetzt.
              </p>
            </div>
            <div className="col-lg" data-aos="fade-right">
              <Img fluid={data.group.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
      <div className="spacer" />
      <div className="container">
        <div className="row">
          <div className="col-lg text-middle" data-aos="fade-right">
            <h2>5 Schritte zu Ihren neuen Azubis</h2>
            <Img fluid={data.woman.childImageSharp.fluid} />
          </div>
          <div className="small-spacer" />
          <div className="col-lg" data-aos="fade-left">
            <Card>
              <Card.Body>
                <div className="row mb-3">
                  <div className="col-1">
                    <CircledNumber txt="1" />
                  </div>
                  <div className="col-sm">
                    <strong>Planung:</strong>
                    <p>
                      Erarbeitung eines Konzeptes, zugeschnitten auf Ihr
                      Unternehmen.
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-1">
                    <CircledNumber txt="2" />
                  </div>
                  <div className="col-sm">
                    <strong>Personalsuche:</strong>
                    <p>Vorauswahl Ihrer zukünftigen Bewerber.</p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-1">
                    <CircledNumber txt="3" />
                  </div>
                  <div className="col-sm">
                    <strong>Vorausbildung:</strong>
                    <p>
                      Vorbereitung auf den deutschen Arbeitsmarkt durch
                      Vermittlung von Deutsch- und Kulturkenntnissen.
                    </p>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-1">
                    <CircledNumber txt="4" />
                  </div>
                  <div className="col-sm">
                    <strong>Anreise:</strong>
                    <p>
                      Reibungsloser Ablauf auf dem Weg nach Deutschland für Ihre
                      Azubis.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <CircledNumber txt="5" />
                  </div>
                  <div className="col-sm">
                    <strong>Betreuung vor Ort:</strong>
                    <p>
                      Integrationshilfe und Unterstützung für Ihr Unternehmen
                      durch uns.
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className="spacer" />
      <div
        className="dark-green-background
          container-fluid
          shadow m-auto text-center"
      >
        <div className="py-5" data-aos="fade-up">
          <h2>Wir erstellen ein unverbindliches Angebot für Sie.</h2>
          <Link to="/contact/">
            <Button className="button shadow">Kontakt aufnehmen</Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
