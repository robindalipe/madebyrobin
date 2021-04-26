import React from 'react'
import { Link, graphql } from 'gatsby'
import { SiteHeader, Logo, GridRow } from './styles'
import { StaticImage } from "gatsby-plugin-image"


const Header = () => {

  return (
    <SiteHeader>
      <div className="max-container">
        <GridRow>
          <Logo>
            <Link to="/">
              <StaticImage 
                src="../../images/madebyrobin-logo.svg" 
                alt="Made By Robin"           
                placeholder="blurred"
              />
            </Link>
          </Logo>
          <nav>
            <Link to="/">
              ABOUT ROBIN
            </Link>
            <Link to="/">
              RECIPES
            </Link>
            <Link to="/">
              VIDEOS
            </Link>
            <Link to="/">
              CONTACT
            </Link>
          </nav>
        </GridRow>
      </div>
    </SiteHeader>
  )
}

export default Header;
