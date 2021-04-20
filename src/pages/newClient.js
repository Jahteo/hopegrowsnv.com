import React from 'react'
import Layout from '../components/Layout'

export default function newClient() {
  return (
    <Layout>
      {/* <h2>Welcome New Clients</h2> */}
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
                Fill out the form below with your contact information & submit. There is no commitment at this point, but you have just taken the first steps towards growing into a better you. Well done!
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
                We will be reach out to you within 48 hours to schedule your first appointment & send you a custom link to fill out some forms.
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

      {/* form to put in name and number  */}
      {/* <!-- Feature w colored background  & left sidebar--> */}
      <section className="wrapper style2 container special-alt">
        <div className="row gtr-150">

          {/* <!-- Content --> */}
          <div className="col-8 col-12-narrower imp-narrower">
            <section>
              <header>
                <h2>New Client Information</h2>
              </header>
              <form>
                <label>
                  Name:
                  <input type="text" name="name" />
                </label>
                <label>
                  (Guardian's Name, if client is a minor)
                  <input type="text" name="guardianName" />
                </label>
                <label>
                  Email:
                  <input type="text" name="email" />
                </label>
                <footer>
                  <input type="submit" value="Submit" />
                </footer>
              </form>
              {/* <footer>
                <ul className="buttons">
                  <li><a href="/" className="button small">Submit</a></li>
                </ul>
              </footer> */}
            </section>
          </div>

          {/* <!-- Sidebar --> */}
          <div className="col-4 col-12-narrower">
            {/* <div className="sidebar"> */}

            <section>
              <header>
                <h3>Optional side bar</h3>
              </header>
              <p>We can move the instructions down here, or leave this area blank.</p>
            </section>

            {/* </div> */}
          </div>
        </div>
      </section>

    </Layout>
  )
}
