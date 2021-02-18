import React from "react"

import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <strong>404: Not Found</strong>
    <p>Die Seite die Sie suchen ist leider nicht verfügbar.</p>
    <Link to="/">Zurück zum Startseite</Link>
  </Layout>
)

export default NotFoundPage
