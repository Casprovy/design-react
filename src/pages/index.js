import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Header from "../components/header"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Header />
    <div className="Hero">
      <div className="HeroGroup">
        x
        <SEO title="Home" />
        <h1>Hi Tomasz</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/video">Watch the video</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
