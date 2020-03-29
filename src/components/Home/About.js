import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpeg"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company" />
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
