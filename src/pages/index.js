import React from 'react'
import Layout from '../components/Layout'
// import SpecialHeader from '../shared/SpecialHeader'

export default function IndexPage() {
  return (
    <Layout landing>
      {/* Todo: need to figure out how to properly use this with markdown. Instead of passing the markdown input as props, I'll actually be using the jsx component in the markdown file inside forestry, I think. */}
      {/* <SpecialHeader
        icon="fa-chart-bar"
        header="As this is my **twentieth** freebie for HTML5 UP
        <br />I decided to give it a really creative name."
        paragraph="Turns out <strong>Twenty</strong> was the best I could come up with.
        Anyway, lame name aside,
        <br />
        its minimally designed, fully responsive, built on HTML5/CSS3, and,
        like all my stuff,
        <br />
        released for free under the
        license. Have fun!"
      /> */}
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
              {/* <div className="content"> */}
              <section>
                {/* <a href="/" className="image featured"><img src="https://source.unsplash.com/V3dHmb1MOXM" alt="" /></a> */}
                <header>
                  <h2>Services we offer</h2>
                </header>
                <p>Hope Grows works to provide evidence based treatments to help our clients manage the mental health challenges. Below are some of the challenges we help treat:</p>
                <div>
                  <p>Depression<br />
                    Anxiety<br />
                    PTSD<br />
                    Trauma<br />
                    Anger Management<br />
                    Bipolar Disorder<br />
                    Substance Abuse<br />
                  </p>
                </div>
                <footer>
                  <ul className="buttons">
                    <li><a href="/services" className="button small">Learn More</a></li>
                  </ul>
                </footer>
              </section>
              {/* </div> */}
            </div>

            {/* <!-- Sidebar --> */}
            <div className="col-4 col-12-narrower">
              {/* <div className="sidebar"> */}

              <section>
                <header>
                  <h3>Who We Serve</h3>
                </header>
              </section>

              <section>
                <ul className="buttons">
                  <li>Individuals</li>
                </ul>
                <ul className="buttons">
                  <li>Families</li>
                </ul>
                <ul className="buttons">
                  <li>Couples</li>
                </ul>
                <ul className="buttons">
                  <li>Groups</li>
                </ul>
              </section>

              {/* </div> */}
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}
