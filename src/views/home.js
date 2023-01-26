import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Lead Usability Agent</title>
        <meta property="og:title" content="Lead Usability Agent" />
      </Helmet>
    </div>
  )
}

export default Home
