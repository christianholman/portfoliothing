/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

async function createBlogPostPages (graphql, actions, reporter) {
    const { createPage } = actions
    const result = await graphql(`
      {
        allSanityPost(filter: { slug: { current: { ne: null } } }) {
          edges {
            node {
              id
              publishedAt
              slug {
                current
              }
            }
          }
        }
      }
    `)
  
    if (result.errors) throw result.errors

    const postEdges = (result.data.allSanityPost || {}).edges || []
  
    postEdges.forEach((edge, index) => {
      const { id, slug = {}, publishedAt } = edge.node
      const path = `/journal/${slug.current}/`
    
      createPage({
        path,
        component: require.resolve('./src/templates/journal-post-template.js'),
        context: { id }
      })
    })
  }

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createBlogPostPages(graphql, actions, reporter)
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allSanityPost(
                sort: {
                    fields: [publishedAt]
                    order: DESC
                }
                filter: { slug: {current: {ne: null}}, publishedAt: { ne: null }}
            ){
                edges {
                    node {
                        title
                        slug {
                            current
                        }
                        mainImage{
                            asset{
                                url
                            }
                        }
                        publishedAt
                    }       
                }  
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // ...

        // Create blog-list pages
        const posts = result.data.allSanityPost.edges
        const postsPerPage = 5
        const numPages = Math.ceil(posts.length / postsPerPage)
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? `/journal` : `/journal/${i + 1}`,
            component: path.resolve("./src/templates/journal-list-template.js"),
            context: {
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages,
              currentPage: i + 1,
            },
          })
        })
      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Post`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}