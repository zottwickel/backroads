import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import {useStaticQuery,graphql} from 'gatsby'
import Img from 'gatsby-image'

const getAbout = graphql`
query aboutImage{
  aboutImage:file(relativePath:{eq:"defaultBcg.jpeg"}) {
    childImageSharp{
      fluid(maxWidth:600) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

const About = () => {
  const {aboutImage} = useStaticQuery(getAbout);
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about company" /> */}
            <Img fluid={aboutImage.childImageSharp.fluid} alt='Awesome Landscape' />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Tempor anim fugiat ex Lorem incididunt cupidatat non cillum. Ea sint
            sunt commodo proident dolore sint mollit consectetur aliquip dolore
            amet ad elit ipsum.
          </p>
          <p>
            Culpa in do velit sunt aute ipsum aute in ipsum ex mollit. Elit ex
            ipsum laborum commodo exercitation reprehenderit ipsum do deserunt
            aliquip.
          </p>
          <button type='button' className='btn-primary'>read more</button>
        </article>
      </div>
    </section>
  )
}

export default About
