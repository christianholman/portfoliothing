import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

export const blogListQuery = graphql`

query blogListQuery($skip: Int!, $limit: Int!) {
    allSanityPost(
        sort: { fields: [publishedAt], order: DESC }
        limit: $limit
        skip: $skip
    ) {
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


export default class BlogList extends React.Component {
    render() {
        const posts = this.props.data.allSanityPost.edges
        const { currentPage, numPages } = this.props.pageContext
        const isFirst = currentPage === 1
        const isLast = currentPage === numPages
        const prevPage = 'journal/' + currentPage - 1 === 1 ? '/journal' : '/journal/'
        const nextPage = 'journal/' + (currentPage + 1).toString()
        return (
            <Layout>
            <span className="text-xl sm:text-2xl text-blackish"><span className="underlined font-bold">Journal</span></span>
            {
                
                posts.map(({node: post}) => {
                    console.log(post.mainImage.asset.url)
                    return (
                        <Link to={`/journal/${post.slug.current}`}>
                        <div className="journal-entry my-3 rounded-lg overflow-hidden" style={{backgroundImage: `url("${post.mainImage.asset.url}")`}}>
                        <div className="journal-entry-tint flex items-center justify-center " style={{height: '100%', width: '100%'}}>
                        <div className="text-2xl text-white text-center items-center flex-row">
                        <span>{post.title}</span>
                        <br />
                        <span className="text-sm">{new Date(post.publishedAt).toDateString()}</span>
                        </div>
                        </div>
                        </div>
                        </Link>
                        );
                    })
                }
                <ul className="pagination-list"
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        listStyle: 'none',
                        padding: 0,
                    }}
                    >
                    {!isFirst && (
                        <Link to={prevPage} rel="prev">
                        ← Previous Page
                        </Link>
                    )}
                    {Array.from({ length: numPages }, (_, i) => (
                        <li
                        key={`pagination-number${i + 1}`}
                        style={{
                            margin: 0,
                        }}
                        >
                        <Link
                            to={`/journal/${i === 0 ? '' : i + 1}`}
                            style={{
                                textDecoration: 'none',
                                color: i + 1 === currentPage ? '#ffffff' : '',
                            }}
                            className={i + 1 === currentPage ? 'pagination pagination-active' : 'pagination'}
                        >
                            {i + 1}
                        </Link>
                        </li>
                    ))}
                    {!isLast && (
                        <Link to={nextPage} rel="next">
                        Next Page →
                        </Link>
                    )}
                    </ul>
            </Layout>
        )
    }
}
        