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
      <header className="special container">
        <span className="icon solid fa-door-open" />
        <h2>
          Opening the door to mental health services
        </h2>
        <p>
          HopeGrows is committed to making it easy and safe to see a licensed clinical practitioner. Here is a blurb about how we use telehealth to prevent covid spread, lower costs, and remove the the need to travel for rural nevadans. Talk about how it is all related back to making the best possible experience for a customer. Probably 3-5 sentences total.
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
              <p>This is a tiny overview. Clicking the button will show more details on a different page. Or each service can be be a button instead.</p>
              <div>
                <p>Anger Management<br />
                  Family Counselpng<br />
                  Focus Training<br />
                  Depression<br />
                  Anxiety<br />
                  Substance Abuse
                </p>
              </div>
              <footer>
                <ul className="buttons">
                  <li><a href="/" className="button small">Learn More</a></li>
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
              {/* <a href="/" className="image featured">
                  <img src="https://source.unsplash.com/P47F0-WBmOI/400x400" alt="couple holding hands" />
                </a> */}
              <ul className="buttons">
                <li><a href="/" className="button small">Individuals</a></li>
              </ul>
              {/* <a href="/" className="image featured">
                  <img src="https://source.unsplash.com/oMtXGNw4ZEs/200x200" alt="couple holding hands" />
                </a> */}
              <ul className="buttons">
                <li><a href="/" className="button small">Couples</a></li>
              </ul>
              {/* <a href="/" className="image featured">
                  <img src="https://source.unsplash.com/V3dHmb1MOXM/200x200" alt="couple holding hands" />
                </a> */}
              <ul className="buttons">
                <li><a href="/" className="button small">Families</a></li>
              </ul>
            </section>

            {/* </div> */}
          </div>
        </div>
      </section>

      {/* <!-- Two --> */}
      <section className="wrapper style1 container special">
        <div className="row">
          <div className="col-4 col-12-narrower">
            <section>
              <span className="icon solid featured fa-check" />
              <header>
                <h3>This is Something</h3>
              </header>
              <p>
                Sed tristique purus vitae volutpat ultrices. Aliquam eu elit
                eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper
                elit, et sagittis turpis. Integer ut fermentum.
              </p>
            </section>
          </div>
          <div className="col-4 col-12-narrower">
            <section>
              <span className="icon solid featured fa-check" />
              <header>
                <h3>Also Something</h3>
              </header>
              <p>
                Sed tristique purus vitae volutpat ultrices. Aliquam eu elit
                eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper
                elit, et sagittis turpis. Integer ut fermentum.
              </p>
            </section>
          </div>
          <div className="col-4 col-12-narrower">
            <section>
              <span className="icon solid featured fa-check" />
              <header>
                <h3>Probably Something</h3>
              </header>
              <p>
                Sed tristique purus vitae volutpat ultrices. Aliquam eu elit
                eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper
                elit, et sagittis turpis. Integer ut fermentum.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* <!-- Three --> */}
      <section className="wrapper style3 container special">
        <header className="major">
          <h2>
            Next look at this <strong>cool stuff</strong>
          </h2>
        </header>

        <div className="row">
          <div className="col-6 col-12-narrower">
            <section>
              <a href="/" className="image featured">
                <img src="images/pic01.jpg" alt="" />
              </a>
              <header>
                <h3>A Really Fast Train</h3>
              </header>
              <p>
                Sed tristique purus vitae volutpat commodo suscipit amet sed
                nibh. Proin a ullamcorper sed blandit. Sed tristique purus
                vitae volutpat commodo suscipit ullamcorper sed blandit lorem
                ipsum dolore.
              </p>
            </section>
          </div>
          <div className="col-6 col-12-narrower">
            <section>
              <a href="/" className="image featured">
                <img src="images/pic02.jpg" alt="" />
              </a>
              <header>
                <h3>An Airport Terminal</h3>
              </header>
              <p>
                Sed tristique purus vitae volutpat commodo suscipit amet sed
                nibh. Proin a ullamcorper sed blandit. Sed tristique purus
                vitae volutpat commodo suscipit ullamcorper sed blandit lorem
                ipsum dolore.
              </p>
            </section>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-12-narrower">
            <section>
              <a href="/" className="image featured">
                <img src="images/pic03.jpg" alt="" />
              </a>
              <header>
                <h3>Hyperspace Travel</h3>
              </header>
              <p>
                Sed tristique purus vitae volutpat commodo suscipit amet sed
                nibh. Proin a ullamcorper sed blandit. Sed tristique purus
                vitae volutpat commodo suscipit ullamcorper sed blandit lorem
                ipsum dolore.
              </p>
            </section>
          </div>
          <div className="col-6 col-12-narrower">
            <section>
              <a href="/" className="image featured">
                <img src="images/pic04.jpg" alt="" />
              </a>
              <header>
                <h3>And Another Train</h3>
              </header>
              <p>
                Sed tristique purus vitae volutpat commodo suscipit amet sed
                nibh. Proin a ullamcorper sed blandit. Sed tristique purus
                vitae volutpat commodo suscipit ullamcorper sed blandit lorem
                ipsum dolore.
              </p>
            </section>
          </div>
        </div>

        <footer className="major">
          <ul className="buttons">
            <li>
              <a href="/" className="button">
                See More
              </a>
            </li>
          </ul>
        </footer>
      </section>

    </Layout>
  )
}
