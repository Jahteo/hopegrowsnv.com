import React from 'react'
import Layout from '../components/Layout'

export default function newClient() {
  return (
    <Layout>
      <article id="main">
        <header className="special container">
          {/* <span className="icon solid" /> */}
          <h2>Become a Client</h2>
        </header>
        {/* carousel of images?? */}

        {/* instructions/expectations */}
        <section className="wrapper style1 container special">
          <div className="row">
            <div className="col-4 col-12-narrower">
              <section>
                <span className="icon solid featured fa-seedling" />
                <header>
                  <h3>You Do</h3>
                </header>
                <p>
                  Fill out the form below with your contact information & submit. There is no commitment at this point, but you have just taken the first steps towards growing into a healthier you. Well done!
                </p>
              </section>
            </div>
            <div className="col-4 col-12-narrower">
              <section>
                <span className="icon solid featured fa-tree" />
                <header>
                  <h3>We Do</h3>
                </header>
                <p>
                  We will be reaching out to you within the next 2 business days to see if we are a good fit, and, if we are, to get started on getting you set up for services.
                </p>
              </section>
            </div>
            <div className="col-4 col-12-narrower">
              <section>
                <span className="icon solid featured fa-check" />
                <header>
                  <h3>While you wait</h3>
                </header>
                <p>
                  Feel free to skim through our resource page or call/email us if you have any urgent concerns.
                </p>
              </section>
            </div>
          </div>
        </section>

        {/* New Client Form */}
        <section className="wrapper style4 special container medium">

          <div className="content">
            <header>
              <h2>New Client Information</h2>
            </header>
            <form target="_blank" action="https://formsubmit.co/bonnie@hopegrowsnv.com" method="POST">
              <input type="hidden" name="_template" value="box" />
              {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html" /> */}
              <input type="hidden" name="_subject" value="New Client Submission from hopegrowsnv.com!" />
              {/* <input type="text" name="_honey" style={{ display: 'none' }} /> */}
              {/* Add this "honeypot" field to avoid spam by fooling scrapers. If a value is provided, the submission will be silently ignored. The input should be hidden with CSS. Use if they want to disable the reCaptcha */}
              <div className="form-group row gtr-50">
                <label className="col-6 col-12-mobile">
                  Client Name:
                  <input type="text" name="name" placeholder="Full Name" required />
                </label>
                <label className="col-6 col-12-mobile">
                  Guardian's Name (if client is a minor):
                  <input type="text" name="guardianName" placeholder=" (if applicable)" />
                </label>
                <label className="col-6 col-12-mobile">
                  Email Address:
                  <input type="email" name="email" placeholder="Email" required />
                </label>
                <label className="col-6 col-12-mobile">
                  Phone Number:
                  <input type="text" name="telephone" placeholder="" />
                </label>
                <label className="col-12">
                  We work with folks that are self-pay and those with health insurance. <br />
                  If you have insurance, please let us know who your provider is, otherwise please type "self pay" (Do not include your plan number here):
                  <input type="text" name="insurance" placeholder="example: BlueCross Blue Sheild'" required />
                </label>
                <label className="col-12">
                  <ul className="buttons">
                    <li><input type="submit" className="special" value="Send Message" /></li>
                  </ul>
                </label>
              </div>
            </form>
          </div>

        </section>
      </article>

    </Layout>
  )
}
