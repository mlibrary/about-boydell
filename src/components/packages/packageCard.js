import React from "react"
import {Link} from "gatsby"

const PackageCard = ({singlePackage, headingLevel = "h2"}) => {
  const Heading = headingLevel
  const {title, description} = singlePackage.frontmatter
  const slug = singlePackage.fields.slug
  const cover = singlePackage.fields.cover
  const headingId = `package-${singlePackage.id}`

  return (
    <div className="card package-card h-100">
      {cover && (
        <div className="package-card-image">
          <img src={cover} alt={`Image: ${title}`} className="card-img-top" />
        </div>
      )}
      <div className="card-body d-flex flex-column">
        <Heading id={headingId} className="card-title"><Link to={slug}>{title}</Link></Heading>
        <p className="card-text">{description}</p>
        <Link to={slug} className="btn btn-primary mt-auto" aria-describedby={headingId}>
          View Package
        </Link>
      </div>
    </div>
  )
}

export default PackageCard