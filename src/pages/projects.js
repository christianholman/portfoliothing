import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
{
  allSanityProject(sort: {
    fields: [_createdAt]
    order: DESC
    }){
    edges {
      node {
        title
        description
        url
        categories {
            category
            color {
                hex
            }
        }
      }  
    }
  }
}
`

const IndexPage = ({ data }) => (
    <Layout>
        <SEO
            description="Christian Holman's most important projects."
            title="Projects"
            lang="en"
        />
        <span className="text-xl sm:text-2xl text-blackish"><span className="underlined font-bold">Projects</span></span>
        <p className="text-lg sm:text-xl text-blackish font-light mt-2">
            These are projects that I am especially proud of over the years. In addition to these, you can find more on my <a className="underlined underlined-blue" href="http://github.com/christianholman" target="_blank">github</a>.
            <br/>
        </p>
        {
            data.allSanityProject.edges.map(({node: project}) => {
                return (
                    <div className="project my-5">
                        <div className="flex flex-col items-start">
                            <a href={project.url} target="_blank" className="text-lg  text-blackish font-bold underlined underlined-blue">{project.title} </a> 
{/*                             <div className="flex">
                                {project.categories.map((category => {
                                        return (
                                        <span className="text-xs font-base uppercase px-1 my-2 mr-2 rounded" style={
                                            {
                                                backgroundColor: category.color.hex
                                            }
                                        }>{category.category}</span>
                                    )
                                }))}
                            </div> */}
                        </div>
                        <p className="text-blackish font-light">{project.description}</p>
                        <a href={project.url} target="_blank" className="italic text-sm font-bold text-grayish">Go to project <i class="fas fa-arrow-right"></i></a>
                    </div>
                );
            })
        }
    </Layout>
)

export default IndexPage
