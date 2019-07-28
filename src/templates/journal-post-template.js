import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import '../styles/markdown.css'
import SEO from '../components/seo'
const BlockContent = require('@sanity/block-content-to-react')



export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: {eq: $id}) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        asset{
            url
        }
      }
      title
      slug {
        current
      },
      _rawBody
    }
  }
`

const BlogPostTemplate = props => {

const serializers = {
}

  const {data, errors} = props
  const post = data.post
  return (
    <Layout>
      <div className="blog-post-image"
      style={{
        backgroundImage: `url(${post.mainImage.asset.url})`
        }}>
          <div className="blog-post-image-tint">
          </div>
      </div>
      <div className="text-center w-full"><span className="blog-post-published-at">{new Date(post.publishedAt).toDateString()}</span>
      <br/>
      <span className="underlined blog-post-title">{post.title}</span></div>
      <BlockContent className="blog-block" renderContainerOnSingleChild={true} blocks={post._rawBody} serializers={serializers} projectId='yod7bsm9' dataset='production'/>
    </Layout>
  )
}

export default BlogPostTemplate