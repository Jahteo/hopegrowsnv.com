import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

export default function NotFound() {
  return (
    <Layout>
      <article>

        <header className="special container">
          <span className="icon solid fa-users" />
          <h2>Oops</h2> <br />
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
