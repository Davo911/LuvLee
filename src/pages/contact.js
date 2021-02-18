import React, { useState, useEffect } from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Aos from "aos"

export default function Contact() {
  useEffect(() => {
    Aos.init({})
  })
  const [msgBox, setMsgBox] = useState("")
  const [data, setData] = useState({
    firma: "",
    anrede: "",
    name: "",
    position: "",
    email: "",
    telefon: "",
    betreff: "",
    nachricht: "",
  })

  const onChange = event => {
    const { id, value } = event.target
    setData({ ...data, [id]: value })
  }

  const sendForm = event => {
    event.preventDefault()
    console.log(data)
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
    fetch("/send/index.php", requestOptions)
      .then(response => {
        setMsgBox(
          "Vielen Dank, Ihre Anfrage wurde erfolgreich versendet. In der Regel melden wir uns noch am selben Tag bei Ihnen."
        )
      })
      .catch(error => {
        console.log(error)
        setMsgBox(
          "Etwas ist schief gelaufen. Gerne können Sie Ihre Anfrage auch an unsere Email senden: info@oalconsult.com"
        )
      })
    document.getElementById("form").reset()
  }

  return (
    <Layout>
      <SEO title="Kontakt: Oak&Lotus Consulting" />
      <div className="big-spacer" />
      <div className="small-container" data-aos="fade-right">
        <h1>Kontaktieren Sie uns unverbindlich.</h1>
        <p>
          Füllen Sie das Kontaktformular aus oder schreiben Sie uns eine Email
          an
          {""}
          <a href="mailto:oalconsult.com">
            <strong>info@oalconsult.com</strong>
          </a>
        </p>
        <Form id="form" onSubmit={sendForm}>
          <Form.Group className="row" controlId="firma">
            <Form.Label className="col-sm-3">Firma*</Form.Label>
            <Form.Control
              className="col-sm-9"
              required
              type="text"
              onChange={e => onChange(e)}
            />
          </Form.Group>
          <div className="mini-spacer" />
          <Form.Group className="row" controlId="anrede">
            <Form.Label className="col-sm-3">Anrede*</Form.Label>
            <Form.Control
              as="select"
              className="col"
              required
              onChange={e => onChange(e)}
            >
              <option>-</option>
              <option>Frau</option>
              <option>Herr</option>
              <option>Divers</option>
            </Form.Control>
          </Form.Group>
          <div className="mini-spacer" />
          <Form.Group className="row" controlId="name">
            <Form.Label className="col-sm-3">Name*</Form.Label>
            <Form.Control
              className="col"
              type="text"
              required
              onChange={e => onChange(e)}
            />
          </Form.Group>
          <div className="mini-spacer" />
          <Form.Group className="row" controlId="position">
            <Form.Label className="col-sm-3">Position</Form.Label>
            <Form.Control
              className="col"
              type="text"
              onChange={e => onChange(e)}
            />
          </Form.Group>
          <div className="mini-spacer" />
          <Form.Group className="row" controlId="email">
            <Form.Label className="col-sm-3">Email*</Form.Label>
            <Form.Control
              className="col"
              type="email"
              required
              onChange={e => onChange(e)}
            />
          </Form.Group>
          <div className="mini-spacer" />
          <Form.Group className="row" controlId="telefon">
            <Form.Label className="col-sm-3">Telefon</Form.Label>
            <Form.Control
              className="col"
              type="text"
              onChange={e => onChange(e)}
            />
          </Form.Group>
          <div className="mini-spacer" />
          <Form.Group className="row" controlId="betreff">
            <Form.Label className="col-sm-3">Betreff*</Form.Label>
            <Form.Control
              className="col"
              type="text"
              required
              onChange={e => onChange(e)}
            />
          </Form.Group>
          <div className="mini-spacer" />
          <Form.Group className="row" controlId="nachricht">
            <Form.Label className="col-sm-3">Nachricht*</Form.Label>
            <Form.Control
              className="col"
              as="textarea"
              required
              onChange={e => onChange(e)}
              rows={5}
            />
          </Form.Group>
          <p>
            Mit Absenden des Formulars bestätigen Sie, die Hinweise zum
            <Link to="/datenschutz/">
              <strong>Datenschutz</strong>
            </Link>
            zur Kenntnis genommen zu haben. Alle Felder mit einem * müssen
            ausgefüllt werden.
          </p>
          <div>
            <p>{msgBox}</p>
          </div>
          <Button className="button shadow" type="submit">
            Anfrage abschicken
          </Button>
        </Form>
      </div>
    </Layout>
  )
}
