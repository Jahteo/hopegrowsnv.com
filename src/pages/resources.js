import React from 'react'
import { Link } from 'gatsby'
import AltBanner from '../components/AltBanner'
import Layout from '../components/Layout'
import data from '../data/resources.json'

export default function resources() {
  return (
    <Layout>
      <title>List of community resouces</title>
      <article id="main">
        <AltBanner pageName="Resources" />
        <header className="container">
          <p>{data.content}</p> <br />
          <section className="wrapper style1 container special">
            <div className="row">
              {data.resourceSections.map((section) => {
                return (
                  <div className="col-4 col-12-narrower buttons">
                    <Link to={`#${section.id}`} className="button small">{section.name}</Link>
                  </div>
                )
              })}
            </div>
          </section>
        </header>

        {/* <!-- Section One, NoSidebar --> */}
        <section className="wrapper style3 container special">
          <div className="content">
            <section>

              {data.resourceSections.map((section) => {
                return (
                  <>
                    <section id={section.id} className="wrapper style2 container special">
                      <header><h2>{section.name}</h2></header>
                    </section>
                    {section.listings.map((listing) => {
                      const last = section.listings[section.listings.length - 1].name
                      return (
                        <>
                          <h3>{listing.name}</h3>
                          <p>{listing.tel}</p>
                          <p>{listing.address}</p>
                          <a href={`http://${listing.url}`} target="_blank" rel="noreferrer">{listing.url}</a>
                          {(listing.name === last) ? <hr />
                            : <hr style={{ borderTop: '3px solid #bbb' }} />}
                        </>
                      )
                    })}
                  </>
                )
              })}

            </section>
          </div>
        </section>

      </article>
    </Layout>
  )
}
