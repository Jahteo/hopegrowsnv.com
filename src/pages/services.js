import React from 'react'
import Layout from '../components/Layout'
import AltBanner from '../components/AltBanner'
import data from '../data/services.json'

export default function services() {
  return (
    <Layout>
      <title>Descriptions of services offered</title>
      <article id="main">
        <AltBanner pageName="Services" />
        {/* <!-- Section One, NoSidebar --> */}
        <section className="wrapper style3 container special">

          {/* <!-- Content --> */}
          <div className="content">
            {data.sections.map((section) => {
              return (
                <section>
                  <header>
                    <h2>{section.header}</h2>
                  </header>
                  <p>{section.content}</p>
                </section>
              )
            })}
          </div>

        </section>

      </article>
    </Layout>
  )
}
