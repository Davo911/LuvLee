import React, { useEffect } from "react"
import Aos from "aos"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import InfoCards from "../components/infoCards"

import { Award, People, Globe2 } from "react-bootstrap-icons"
import Button from "react-bootstrap/Button"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

const Partner = () => {
  useEffect(() => {
    Aos.init({})
  })

  const data = useStaticQuery(graphql`
    query partner {
      partner: file(relativePath: { eq: "business_woman.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coffe: file(relativePath: { eq: "man_coffe.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      men: file(relativePath: { eq: "men.jpg" }) {
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
      <Award className="mb-2" color="#75BF69" size={48} />,
      "Erfolgsorientiert",
      "Vertrauensvolle, transparente und direkte Zusammenarbeit.",
    ],
    [
      <People className="mb-2" color="#75BF69" size={48} />,
      "Nachhaltig",
      "Zukunftsorientierte und gesunde Lösungen für Vietnam und Deutschland.",
    ],
    [
      <Globe2 className="mb-2" color="#75BF69" size={48} />,
      "Vernetzt",
      "Kooperationen mit Schulen, Universitäten und Sprachinstituten.",
    ],
  ]

  const stepsData = [
    [
      "Planung",
      "Im ersten Schritt ermitteln wir Ihren Bedarf und den Umfang der erforderlichen Leistungen, erstellen gemeinsam mit Ihnen eine detaillierte Road-Map zu Ihren zukünftigen Azubis, damit Sie Ihr Personal optimal planen können.",
    ],
    [
      "Personalsuche",
      "Basierend auf Ihren Suchkriterien finden wir die passenden Bewerber für Ihr Unternehmen, führen erste Auswahlgespräche und unterstützen alle Teilnehmer bei VISA-Anträgen, Behördengängen und der Beschaffung, sowie der Übersetzung notwendiger Dokumente.",
    ],
    [
      "Vorausbildung",
      "Zusammen mit unseren Partnern vermitteln wir die benötigten Sprachkenntnisse. Ihre Azubis werden anschließend unabhängig, wahlweise am Goethe-Institut,... in Vietnam geprüft. Zusätzlich vermitteln wir kulturelle Kenntnisse, um einen reibungslosen Start in Ihrem Unternehmen zu ermöglichen. Optional erarbeiten wir gemeinsam mit Ihnen einen Lehrplan um fachliche Grundlagen bereits in Vietnam zu vermitteln.",
    ],
    [
      "Anreise",
      "Von der Abreise in Vietnam bis zur Ankunft in Ihrem Unternehmen sind wir für Ihre Azubis da und sorgen für einen reibungslosen Start.",
    ],
    [
      "Betreuung vor Ort",
      "Auch während Ihre Azubis bei Ihnen lernen, sind wir gerne für Sie da. Mit Problemanalysen, Informations- und Austauschseminaren unterstützen wir Ihre Azubis bei der erfolgreichen und nachhaltigen Integration.",
    ],
  ]

  const faqData = [
    ["Wie werden Bewerber ausgewählt?", "Hello I'm the Body!"],
    ["Wie sieht die fachliche Vorbereitung aus?", "Hello I'm the Body!"],
    ["Wie wird die Integration begleitet?", "Hello I'm the Body!"],
    ["Wie sieht die sprachliche Vorbereitung aus?", "Hello I'm the Body!"],
    [
      "Welche weiteren Beratungsangebote werden den Kunden angeboten?",
      "Hello I'm the Body!",
    ],
  ]

  return (
    <Layout>
      <SEO title="Qualifizierte Azubis finden: Oak&Lotus Consulting" />
      <div className="big-spacer" />
      <div className="container" data-aos="fade-right">
        <div className="row">
          <div className="col-lg mb-5">
            <h2>Azubis für deutsche Unternehmen</h2>
            <p>
              Oak & Lotus bieten Partnern eine Reihe von effizienten und
              nachhaltigen Lösungen, die genau auf Sie zugeschnitten sind.
            </p>
          </div>
          <div className="col-lg">
            <Img fluid={data.partner.childImageSharp.fluid} />
          </div>
        </div>
      </div>
      <div className="spacer" />
      <div className="container text-center" data-aos="fade-left">
        <h1>Ihre neuen Auszubildenden.</h1>
        <p>
          Kompetentes Recruiting für Ihr Unternehmen - in Zusammenarbeit
          entwerfen wir individuelle Konzepte auf Ihre Ziele, Wünsche und
          Bedürfnisse zugeschnitten. Kandidaten-/Innen werden sorgfältig
          ausgewählt, um den geforderten Ansprüchen zu entsprechen. Alle
          Bewerber-/Innen werden auf den deutschen Arbeitsmarkt mit Hilfe
          fachkundiger Vermittlung von Sprach-, als auch Kulturkenntnissen
          vorbereitet. Wir unterstützen Ihre zukünftigen Azubis auf dem Weg nach
          Deutschland sowie bei der Integration vor Ort, beispielsweise beim
          Erhalt des Aufenthaltstitels oder bei der Wohnungssuche. Oak & Lotus
          steht stets für Ihr Unternehmen und den Auszubildenden als
          Ansprechpartner bereit!
        </p>
      </div>
      <div className="spacer" />
      <InfoCards first={cardData[0]} second={cardData[1]} third={cardData[2]} />
      <div className="spacer" />
      <div className="green-background container-fluid shadow">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg mb-5" data-aos="fade-right">
              <Img fluid={data.men.childImageSharp.fluid} />
            </div>
            <div className="col-lg" data-aos="fade-left">
              <h2>Nachhaltig aus Vietnam.</h2>
              <p>
                Der deutsche Arbeitsmarkt weist in den nächsten Jahren viele
                unbesetzte Fachkräftestellen auf.
                <br />
                Durch den demografischen Wandel ist keine Trendwende in Sicht.
                Bis 2035 sollen laut dem Institut deutsche Wirtschaft alleine im
                Gesundheitssektor 300.000 Pfleger-/Innen fehlen.
                <br />
                <br />
                Im Kontrast dazu steht ein Überangebot an jungen vietnamesischen
                Fachkräften. Mit einem Durchschnittsalter von 30,1 Jahren ist
                die vietnamesische Bevölkerung eine der Jüngsten der Welt.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer" />
      <div className="container" data-aos="fade-right">
        <h2 className="text-center">
          Wir erarbeiten eine personalisierte Lösung für Sie
        </h2>
        <p className="text-center">
          Gemeinsam mit Ihnen arbeiten wir in 5 Bereichen um neue Azubis für Ihr
          Unternehmen zu gewinnen.
        </p>
        <div className="row">
          <div className="col-lg mb-5">
            <Accordion allowZeroExpanded>
              {stepsData.map(item => (
                <AccordionItem key={item[0]}>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      <strong>{item[0]}</strong>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>{item[1]}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="col-lg">
            <Img fluid={data.coffe.childImageSharp.fluid} />
          </div>
        </div>
      </div>
      <div className="spacer" />
      <div className="container" data-aos="fade-left">
        <h2 className="text-center">FAQ</h2>
        <Accordion allowZeroExpanded>
          {faqData.map(item => (
            <AccordionItem key={item[0]}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <strong>{item[0]}</strong>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{item[1]}</p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="spacer" />
      <div
        className="dark-green-background
          container-fluid
          shadow m-auto text-center"
      >
        <div className="py-5" data-aos="fade-right">
          <h2>Wir sind gerne für Sie da.</h2>
          <Link to="/contact/">
            <Button className="button shadow">Kontakt aufnehmen</Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Partner
