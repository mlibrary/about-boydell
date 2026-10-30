import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout'
import {graphql} from "gatsby"

const Package = ({data}) => {
  const { html, fields } = data.markdownRemark
  const { title, longDescription } = data.markdownRemark.frontmatter
  const paragraphs = (longDescription || "")
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(Boolean)

  return (
    <Layout>
      <SEO title={title} />
      <div className="container page-container package-page pb-5">
        <h1 className="mb-4">{title}</h1>
        <div className="row package-intro">
          {fields.cover && (
            <div className="col-md-4 mb-4 mb-md-0">
              <img src={fields.cover} alt={`Image: ${title}`} className="package-page-image" />
            </div>
          )}
          <div className={fields.cover ? "col-md-8" : "col-md-12"}>
            <div className="package-long-description">
              {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
        {html && (
          <div className="row main mt-4">
            <div className="col-12">
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($id: String!) {
  markdownRemark(id: {eq: $id}) {
    html
    fields {
      cover
    }
    frontmatter {
      title
      longDescription
    }
  }
}
`

export default Package