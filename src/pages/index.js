import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
// import SpecialHeader from '../shared/SpecialHeader'

export default function IndexPage() {
  return (
    <Layout landing>
      <title>Homepage</title>
      <article id="main">
        <header className="special container">
          <span className="icon solid fa-door-open" />
          <h2>
            Opening the door to mental health services
          </h2>
          <p>
            We at Hope Grows are committed to bringing competent and thoughtful mental health professionals to our community. Our goal is to grow a robust set of mental health services to meet the needs of the people we serve. Historically it has been challenging for many to be able to access mental health services in our community and we hope we will be able to begin to change this fact.
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
                <p>Hope Grows works to provide evidence based treatments to help our clients manage the mental health challenges. Below are some of the challenges we help treat:</p>
                <div>

                  <p>Depression<br />
                    Anxiety<br />
                    PTSD<br />
                    Trauma<br />
                    Phobias<br />
                    Interpersonal Conflict<br />
                    Stress Management<br />
                    Struggles with Grief and Loss<br />
                    Panic Attacks<br />
                    Anger Management<br />
                    Bipolar Disorder<br />
                    Substance Abuse<br />
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
                  <h3>Individuals</h3>
                  <h3>Families</h3>
                  <h3>Couples</h3>
                  <h3>Groups</h3>
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
