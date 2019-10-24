import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SocialMedia from '../components/socialmedia'

export const query = graphql`
{
  allSanityProject{
    edges {
      node {
        title
        description
        url
      }  
    }
  }
}
`

const IndexPage = ({ data }) => (
  <Layout>
      <SEO
          description="Christian Holman's page on the internet."
          title="Home"
          lang="en"
      />
      <span class="w-full text-xl sm:text-2xl text-blackish">Hi, I'm <span className="underlined font-bold">Christian Holman</span></span>
      <p className="text-lg sm:text-xl text-blackish font-light mt-2">
          I am a high-school student, developer, AI-advocate, and aspiring entrepeneur. On this site you can find my <Link to="/projects" className="underlined underlined-blue">projects</Link>, <Link to="/journal" className="underlined underlined-blue">journal</Link>, and <Link to="/contact" className="underlined underlined-blue">contact information</Link>.
          I am currently focusing on school and working on side-projects. If you want to work with me, shoot me a message on <a href="http://twitter.com/0xholman" className="underlined underlined-blue" target="_blank">twitter</a> or get in touch via my contact page.
          
          
          <br/>
          <img class="my-5 rounded shadow w-full" src="https://media.licdn.com/dms/image/C4D16AQHIR-i6uAu33A/profile-displaybackgroundimage-shrink_350_1400/0?e=1576108800&v=beta&t=hq-kEYx-JDvozYD6JyCKkysMLWH58gM4iwUeqkKjQII"/>

          Best wishes,
          <br/>
          <span className="italic font-base">Christian Holman</span>
      </p>
      <div className="text-center w-full text-3xl p-5">
        <SocialMedia />
      </div>
  </Layout>
)

export default IndexPage
