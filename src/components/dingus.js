import React from 'react'
import { graphql } from 'gatsby'

function Dingus() {
  return (
    <p>Just to show a warning&hellip; move along now.</p>
  )
}

export const dingusQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
export default Dingus

