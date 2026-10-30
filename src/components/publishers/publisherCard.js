import React from "react"
// import Img from "gatsby-image"

const Publisher = ({cover, publisher}) => {
  const {
    title,
    publisherLink,
    description,
    orderOnPage
  } = publisher

  return (
    <div className="card book-card">
      <div className="row">
        <div className="col-md-12">
          <img src={cover} alt={`Logo: ${title}`} className="card-img" />
        </div>
        <div className="col-md-12">
          <div className="card-body">
            <h3 id={`publisher${orderOnPage}`} className="card-title">{title}</h3>
            <a className="card-link btn btn-secondary btn d-block" href={publisherLink} aria-describedby={`publisher${orderOnPage}`} >Visit Site <img className="external" src="/assets/external-link-light.png" alt="opens page in new tab" /></a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Publisher
