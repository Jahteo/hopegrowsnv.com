import React from 'react'
import Layout from '../components/Layout'

// DRAFT!!!
export default function Appointments() {
  return (
    <Layout>
      <body className="right-sidebar is-preload">
        <div id="page-wrapper">
          {/*  Main  */}
          <article id="main">

            <header className="special container">
              <span className="icon solid fa-tablet-alt" />
              <h2>Appointment Options &  Our Promise for your safety</h2>
              <p>Here's where we'll tell you the different ways you can visit us & how we take your safety seriously</p>
            </header>
            <section className="wrapper style2 container special">
              Quick Blurb about how we are open during the pandemic, maybe acknowledging that it's stressfull both for those at risk, and those who don't think we should be worried about it.
            </section>

            {/*  One  */}
            <section className="wrapper style4 container">

              <div className="row gtr-150">
                <div className="col-8 col-12-narrower">

                  {/*  Content  */}
                  <div className="content">
                    <section>
                      <a href="#" className="image featured"><img src="https://picsum.photos/300/200" alt="" /></a>
                      <header>
                        <h3>In person Visits</h3>
                      </header>
                      <p>Here's what to expect if you visit us in person. Sentences to reduce anxiety by establishing both what the process is and then a second paragraph about how we make sure to take your physical health seriously by regularly cleaning high-tough places</p>
                      <p>Vestibulum diam quam, mollis at consectetur non, malesuada quis augue. Morbi tincidunt pretium interdum. Morbi mattis elementum orci, nec dictum porta cursus justo. Quisque ultricies lorem in ligula condimentum, et egestas turpis sagittis. Cras ac nunc urna. Nullam eget lobortis purus. Phasellus vitae tortor non est placerat tristique. Sed id sem et massa ornare pellentesque. Maecenas pharetra porta accumsan. </p>
                      <header>
                        <h3>Virtual Visits</h3>
                      </header>
                      <p>And here's where we tell you all about how easy we make virtual visits & telehealth. Maybe we actually put this before the section about in-person visits to encourage folks first about how great it is to not have to leave home/work. Talking about the simplicity of the system & how many clients appreciate it. </p>
                      <p>In vestibulum massa quis arcu lobortis tempus. Nam pretium arcu in odio vulputate luctus. Suspendisse euismod lorem eget lacinia fringilla. Sed sed felis justo. Nunc sodales elit in laoreet aliquam. Nam gravida, nisl sit amet iaculis porttitor, risus nisi rutrum metus, non hendrerit ipsum arcu tristique est.</p>
                    </section>
                  </div>

                </div>
                <div className="col-4 col-12-narrower">

                  {/*  Sidebar  */}
                  <div className="sidebar">
                    <section>
                      <header>
                        <h3>New Clients</h3>
                      </header>
                      <p>Ready to set up your first appointment? Lets get started! First you'll need to send us your name and phone number & we'll get back to you withing 24 office hours.</p>
                      <p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit..</p>
                      <footer>
                        <ul className="buttons">
                          <li><a href="#" className="button small">Contact Us</a></li>
                        </ul>
                      </footer>
                    </section>

                    <section>
                      <a href="#" className="image featured"><img src="https://picsum.photos/300/200" alt="" /></a>
                      <header>
                        <h3>Existing Clients</h3>
                      </header>
                      <p>Schedule an appt here. This button will send them to the login portal or the scheduler</p>
                      <p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
                      <footer>
                        <ul className="buttons">
                          <li><a href="#" className="button small">Schedule Now</a></li>
                        </ul>
                      </footer>
                    </section>
                  </div>

                </div>
              </div>
            </section>

            {/*  Two  */}
            <section className="wrapper style1 container special">
              <div className="row">
                <div className="col-4 col-12-narrower">

                  <section>
                    <header>
                      <h3>Physical Safety</h3>
                    </header>
                    <p>By providing a virtual option and low-risk physical option for visits</p>
                    <p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
                    {/* <footer>
                      <ul className="buttons">
                        <li><a href="#" className="button small">Learn More</a></li>
                      </ul>
                    </footer> */}
                  </section>

                </div>
                <div className="col-4 col-12-narrower">

                  <section>
                    <header>
                      <h3>Mental Safety</h3>
                    </header>
                    <p>All our employees are trained to these standards of compassion and will not be jerks.</p>
                    <p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
                    {/* <footer>
                      <ul className="buttons">
                        <li><a href="#" className="button small">Learn More</a></li>
                      </ul>
                    </footer> */}
                  </section>

                </div>
                <div className="col-4 col-12-narrower">

                  <section>
                    <header>
                      <h3>Privacy</h3>
                    </header>
                    <p>Sworn to secrecy when needed, caveats for minors & legal issues. </p>
                    <p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
                    {/* <footer>
                      <ul className="buttons">
                        <li><a href="#" className="button small">Learn More</a></li>
                      </ul>
                    </footer> */}
                  </section>

                </div>
              </div>
            </section>

          </article>
        </div>
      </body>

    </Layout>
  )
}
