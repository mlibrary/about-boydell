import React from "react"
import PackageCard from "./packageCard"

const PackageList = ({packages, headingLevel}) => {
  return (
    <section className="row package-card-list">
    {
      packages.map(({node}) => {
        return (
          <div key={node.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <PackageCard singlePackage={node} headingLevel={headingLevel} />
          </div>
        )
      })
    }
    </section>
  )
}

export default PackageList