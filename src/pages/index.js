import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        //src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT.jpg?name=small"
        src="../images/clifford.webp"
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
      />
    </Layout>
  )
}
export default IndexPage