import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import AltBanner from '../components/AltBanner'

export default function NotFound() {
  return (
    <Layout>
      <title>Page not found</title>
      <article id="main">
        <AltBanner pageName="Oops!" />
        <header className="special container">
          {/* <span className="icon solid fa-users" /> */}
          <Link to="/">
            <h1>Sorry, couldn't find that page.</h1>
          </Link>
          <br />
          <p>Please feel free to contact us via phone or email if we've made a mistake, so we can fix it asap.</p> <br />
          <p> Thank you.</p>
        </header>
      </article>
    </Layout>
  )
}
