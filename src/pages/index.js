import React from "react"
import Paragraphs from "../components/paragraphs"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql, Link} from "gatsby"

import Hero from "../components/hero"
import PackageList from "../components/packages/packageList"

export const IndexQuery = graphql`
query {
  home: markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
    frontmatter {      
      heroSection {
        primaryText
        secondaryText
        buttonLabel
        buttonUrl
      }
      firstCallToActionSection {
        heading
        description
        buttonLabel
        buttonUrl
      }
      secondCallToActionSection {
        heading
        description
        buttonLabel
        buttonUrl
      }
      thirdCallToActionSection {
        heading
        description
        buttonLabel
        buttonUrl
      }
    }
  }
  packages: allMarkdownRemark(
    filter: { frontmatter: { templateKey: { eq: "package" } } },
    sort: [{ frontmatter: { orderOnPage: ASC } }, { frontmatter: { title: ASC } }],
    limit: 4
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

const IndexPage = ({data}) => {
  const hero = data.home.frontmatter.heroSection
  const cta1 = data.home.frontmatter.firstCallToActionSection
  const cta2 = data.home.frontmatter.secondCallToActionSection
  const cta3 = data.home.frontmatter.thirdCallToActionSection

  return (
    <Layout>
      <SEO title="Home" />      
        <section className="hero-container">
          <div className="container">
            <div className="row">
              <div className="hero-primary col-md-12">
                <Hero text={hero.primaryText} />
              </div>
            </div>
            <div className="row">
              <div className="hero-secondary col-md-12">
                <Hero text={hero.secondaryText} />
              </div>
            </div>
            {hero.buttonUrl && hero.buttonLabel && (
              <div className="row">
                <div className="hero-button col-md-12">
                  <Link to={hero.buttonUrl} className="btn btn-primary btn-lg">
                    {hero.buttonLabel}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>        
        <section className="home-packages-container container">
          <div className="row">
            <div className="col-md-12 mb-4">
              <h2>Sign Up for Subscription Packages</h2>
            </div>
          </div>
          <PackageList packages={data.packages.edges} headingLevel="h3" />
          <div className="text-center mt-2">
            <Link to="/packages" className="btn btn-secondary btn-lg">
              View All Packages
            </Link>
          </div>
        </section>
        <section className="cta-container container">
          <div className="row">
            {[cta1, cta2, cta3].map((cta, i) => (
              <div key={i} className={i === 0 ? "col-12 mb-4" : "col-md-6 mb-4 mb-md-0"}>
                <div key={i} className={i === 0 ? "callout h-100 d-flex flex-column blue" : "callout h-100 d-flex flex-column yellow"}>
                  <h2>{cta.heading}</h2>
                  <Paragraphs text={cta.description} />
                  <a className="card-link btn btn-primary btn-lg mt-auto align-self-start" href={cta.buttonUrl}>{cta.buttonLabel}</a>
                </div>
              </div>
            ))}
          </div>
        </section>
    </Layout>
  )
}

export default IndexPage