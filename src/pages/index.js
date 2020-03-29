import React from "react"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from '../components/Banner'
import {Link} from 'gatsby'
import About from '../components/Home/About'
import Services from '../components/Home/Services'

export default () => {
  return (
    <Layout>
      <SimpleHero>
        <Banner
          title="continue exploring"
          info="Irure labore incididunt enim magna. Commodo aliquip sunt pariatur id."
        >
          <Link to='/tours' className='btn-white'>explore tours</Link>
        </Banner>
      </SimpleHero>
      <About />
      <Services />
    </Layout>
  )
}
