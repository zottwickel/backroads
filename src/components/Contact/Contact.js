import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form
          className={styles.form}
          action="https://formspree.io/scott.g.mckell@gmail.com"
          method="POST"
        >
          <div>
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="john smith"
            />
            <label htmlFor="email">email</label>
            <input
              type="text"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email@email.com"
            />
            <label htmlFor="message">message</label>
            <textarea
              rows="10"
              name="message"
              id="message"
              className={styles.formControl}
              placeholder="hello there"
            />
          </div>
          <div>
            <input type="submit" value="submit" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
