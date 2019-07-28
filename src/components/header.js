import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerImage from '../images/headshot.png'

const Header = () => (
  <div>   
      <div className="header py-4 my-4 inline-flex flex-row items-center w-full">
          <img src={headerImage} className=" rounded-tl-lg w-12 h-12 inline-block mr-2"/>
          <div className="inline-block">
              <div className="header-title z-50 text-xl">
                  <Link to="/">Christian <span className="font-bold">Holman</span></Link>
              </div>
              <div className="header-right block z-50 items-center right-0">
                  <Link activeClassName="active" to="/">About</Link>
                  <Link activeClassName="active" to="/projects">Projects</Link>
                  <Link activeClassName="active" to="/journal">Journal</Link>
                  <Link activeClassName="active" to="/contact">Contact</Link>
              </div>
          </div>
      </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
