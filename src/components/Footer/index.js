import React from 'react'
import { Link, graphql } from 'gatsby'

const Footer = () => {

  return (
    <footer className="container">
        <Link to="/">
          <div className="logo">Made by Robin</div>
        </Link>
      <p>
        Copyright 2021 - Made by Robin
      </p>
    </footer>
  )
}

export default Footer;
