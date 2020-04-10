import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import { Link } from "gatsby"
import About from "../components/Home/About"
import Services from "../components/Home/Services"
import { graphql } from "gatsby"

export default ({data}) => {
  return (
    <Layout>
      <StyledHero 
        home="true"
        img={data.defaultBcg.childImageSharp.fluid}
      >
        <Banner
          title="continue exploring"
          info="Irure labore incididunt enim magna. Commodo aliquip sunt pariatur id."
        >
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </StyledHero>
      <About />
      <Services />
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
