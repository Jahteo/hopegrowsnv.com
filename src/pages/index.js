import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import data from '../data/index.json'

export default function IndexPage() {
  return (
    <Layout landing>
      <title>Homepage</title>
      <article id="main">
        <header className="special container">
          <span className="icon solid fa-door-open" />
          <h2>
            {data.bannerHeader}
          </h2>
          <p>
            {data.bannerContent}
          </p>
        </header>

        {/* <!-- Feature w colored background  & left sidebar--> */}
        <section className="wrapper style2 container special-alt">
          <div className="row gtr-150">

            {/* <!-- Content --> */}
            <div className="col-8 col-12-narrower imp-narrower">
              <section>
                <header>
                  <h2>Services we offer</h2>
                </header>
                <p>{data.servicesContent}</p>
                <div>

                  <p>
                    {data.servicesList.map((service) => {
                      return <> {service} <br /></>
                    })}
                  </p>
                </div>
              </section>
            </div>

            {/* <!-- Sidebar --> */}
            <div className="col-4 col-12-narrower">
              <div className="sidebar">

                <section>
                  <header>
                    <h2>Who We Serve</h2>
                  </header>
                </section>

                <section>
                  {data.whoWeServeList.map((group) => {
                    return <h3>{group}</h3>
                  })}
                  <footer>
                    <ul className="buttons">
                      <li><Link href="/services" className="button small">Learn More</Link></li>
                    </ul>
                  </footer>
                </section>

              </div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}
