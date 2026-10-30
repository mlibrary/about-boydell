import React from "react"
import PublisherCard from "./publisherCard"

const PublisherList = ({publishers}) => {

  return (
    <div className="featured">   
      <div className="row book-card-list">
        {
          publishers.map(({node}) => {
            if (Array(1,2,3,4,5).includes(node.frontmatter.orderOnPage)) {
              return (
                <PublisherCard key={node.id} cover={node.fields.cover} publisher={node.frontmatter} />
              )
            } else {
              return null
            }
          })
        }
      </div>
    </div>
  )
}

export default PublisherList
