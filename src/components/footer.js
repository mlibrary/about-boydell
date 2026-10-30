import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'

export const titleQuery = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
}
`

const Footer = () => {
    const data = useStaticQuery(titleQuery)
    const {title} = data.site.siteMetadata
    const now = new Date()
    const year = now.getFullYear()

    return (
    <footer className="footer text-white">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-4 contact">
            <a href="https://boydellandbrewer.com/" className="block logo-link"><img src="/assets/boydellandbrewer-white.png" alt="Logo: Boydell & Brewer" height="auto" width="150" /></a>
            <span className="text-light d-block mt-2">Boydell & Brewer<br />
Bridge Farm, Top Street,<br />
Martlesham, Suffolk<br />
IP12 4RB</span>            
          </div>                    
          <div className="col-md-6">
            <ul className="list-unstyled second-nav">
              <li><a className="text-light" href="/about">About</a></li>                
              <li><a className="text-light" href="/news">News</a></li>              
              <li><a className="text-light" href="/packages">Packages</a></li>
              <li><a className="text-light" href="/faq">FAQs</a></li>
              <li><a className="text-light" href="/resources">Resources</a></li>
              <li><a className="text-light" href="/oa-progress">OA Progress</a></li>
              <li><a className="text-light" href="/contact">Contact</a></li>
            </ul>
          </div>            
        </div>
        <div className="row mt-4">
          <div className="col-md-8">
          <span className=" copyright text-light d-block mb-3 font-weight-normal">© {year}, Boydell & Brewer · <a className="text-light" href="/accessibility">Accessibility</a></span>
          </div>
          <div className="col-md-4 text-right">
            <small className="text-white">Powered by</small> <a target="_blank" href="https://fulcrum.org/"><img className="fulcrum" src="/assets/fulcrum-full-white.svg" alt="Fulcrum logo" height="20" width="auto" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
