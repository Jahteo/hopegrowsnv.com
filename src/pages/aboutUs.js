import React from 'react'
import Layout from '../components/Layout'
import AltBanner from '../components/AltBanner'
import data from '../data/staff.json'
// import NoSidebar from '../components/NoSidebar'

export default function aboutUs() {
  console.log(data.items)
  // const data = {
  //   title: 'Our Team',
  //   subTitle: null,
  //   content: 'We are a collection of providers and other team members coming together to do our best to provide our clients with the support and treatment to aid them in achieving their goals. The majority of our team have lived here in Nevada majority of our lives and we want to provide and support our fellow Nevadans in their journeys in health and wellness.',
  // }
  // const people = [
  //   {
  //     name: "",
  //   }
  // ]

  return (
    <Layout>
      <title>Information about Hope Grows and our staff</title>
      <article id="main">
        <AltBanner pageName="Our Team" />
        <header className="container">
        {/* <header className="special container"> */}
          {/* <span className="icon solid fa-users" /> */}

          <p>We are a collection of providers and other team members coming together to do our best to provide our clients with the support and treatment to aid them in achieving their goals. The majority of our team have lived here in Nevada majority of our lives and we want to provide and support our fellow Nevadans in their journeys in health and wellness.</p>
        </header>

        {/* <!-- Style Three from index --> */}
        {/* <section className="wrapper style3 container special">
          <header className="major">
            <h2>
              Front Desk
            </h2>
          </header>

          <div className="row">
            <div className="col-6 col-12-narrower">
              <section>
                <div className="image featured">
                  <img src="https://source.unsplash.com/800x450/?smiling, headshot,1" alt="" />
                </div>
                <header>
                  <h3>Person 1</h3>
                </header>
                <p>
                  Bio
                </p>
              </section>
            </div>
            <div className="col-6 col-12-narrower">
              <section>
                <div className="image featured">
                  <img src="https://source.unsplash.com/800x450/?smiling, headshot,2" alt="" />
                </div>
                <header>
                  <h3>Person 2</h3>
                </header>
                <p>
                  Bio
                </p>
              </section>
            </div>
          </div>

          <header className="major">
            <h2>
              Therapists
            </h2>
          </header>

          <div className="row">
            <div className="col-6 col-12-narrower">
              <section>
                <div className="image featured">
                  <img src="https://source.unsplash.com/800x450/?therapist" alt="" />
                </div>
                <header>
                  <h3>Person 1</h3>
                </header>
                <p>
                  Bio
                </p>
              </section>
            </div>
            <div className="col-6 col-12-narrower">
              <section>
                <div className="image featured">
                  <img src="https://source.unsplash.com/800x450/?clinician" alt="" />
                </div>
                <header>
                  <h3>Person 2</h3>
                </header>
                <p>
                  Bio
                </p>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-12-narrower">
              <section>
                <div className="image featured">
                  <img src="https://source.unsplash.com/800x450/?woman" alt="" />
                </div>
                <header>
                  <h3>Person 3</h3>
                </header>
                <p>
                  Bio
                </p>
              </section>
            </div>
            <div className="col-6 col-12-narrower">
              <section>
                <div className="image featured">
                  <img src="https://source.unsplash.com/800x450/?man" alt="" />
                </div>
                <header>
                  <h3>Person 4</h3>
                </header>
                <p>
                  Bio
                </p>
              </section>
            </div>
          </div>

        </section> */}
      </article>
      {/* <NoSidebar props={data}>
        Testing
      </NoSidebar> */}
    </Layout>
  )
}
