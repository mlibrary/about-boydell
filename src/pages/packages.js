import React from "react"
import {graphql} from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import PackageList from "../components/packages/packageList"

const Packages = ({data}) => {
  const packages = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Packages" />
      <div className="container page-container pt-5 pb-5">
        <h1>All Subscription Packages</h1>
        <PackageList packages={packages} />
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
  allMarkdownRemark(
    filter: { frontmatter: { templateKey: { eq: "package" } } },
    sort: [{ frontmatter: { orderOnPage: ASC } }, { frontmatter: { title: ASC } }]
  ) {
    edges {
      node {
        id
        fields {
          slug
          cover
        }
        frontmatter {
          title
          description
        }
      }
    }
  }
}
`

export default Packages