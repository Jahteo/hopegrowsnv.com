import React from 'react'
// import Helmet from 'react-helmet'
import logo from './images/logo/logo_03_white_ICON.jpg'
import useSiteMetadata from '../static_queries/useSiteMetadata'
import LoginModal from '../shared/LoginModal'

const test = () => {
  if (typeof document !== 'undefined') {
    document.body.classList.remove('is-preload')
  }
}
function useInitialAnimations() {
  setTimeout(test, 100)
}

export default function Layout({ children, landing = false }) {
  useInitialAnimations()
  const { title } = useSiteMetadata()

  // let isHeaderSticky = true
  // const observer = new IntersectionObserver(
  //   (entries, observer) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         /* Here's where we deal with every intersection */
  //         isHeaderSticky = false
  //         observer.unobserve(entry.target)
  //       }
  //     })
  //   },
  //   { rootMargin: '0px 0px -200px 0px' })
  // const target = document.querySelector('banner')
  // console.log(target)
  // observer.observe(target)

  // <Helmet>
  //   <html lang="en" />
  //   <title>{title}</title>
  //   <meta name="description" content={description} />
  // </Helmet>

  return (
    <div id="page-wrapper">
      {/* <!-- Header --> */}
      <header id="header" className={landing && 'alt'}>
        {/* <header id="header"> */}
        <h1>
          <a href="index.html">
            <img src={logo} alt="Logo" id="logoTest" /> {title}
          </a>
        </h1>
        <nav id="nav">
          <ul>
            <li className="current">
              <a href="/">Welcome</a>
            </li>
            <li>
              <a href="/aboutUs">Who We Are</a>
            </li>
            <li className="submenu">
              <a href="/services">Services</a>
              <ul>
                <li>
                  <a href="left-sidebar.html">Left Sidebar</a>
                </li>
                <li>
                  <a href="right-sidebar.html">Right Sidebar</a>
                </li>
                <li>
                  <a href="no-sidebar.html">No Sidebar</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
                <li className="submenu">
                  <a href="/">Submenu</a>
                  <ul>
                    <li>
                      <a href="/">Dolore Sed</a>
                    </li>
                    <li>
                      <a href="/">Consequat</a>
                    </li>
                    <li>
                      <a href="/">Lorem Magna</a>
                    </li>
                    <li>
                      <a href="/">Sed Magna</a>
                    </li>
                    <li>
                      <a href="/">Ipsum Nisl</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="/resources">Resources</a>
            </li>
            <li>
              {/* <button type="button">B Log In</button> */}
              <LoginModal id="login">M Log In </LoginModal>
            </li>
            <li>
              <a href="/newClient" className="button primary">
                Create an account
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* <!-- Banner --> */}
      {landing && (
        <section id="banner">
          {/* <!--
            ".inner" is set up as an inline-block so it automatically expands
            in both directions to fit whatever's inside it. This means it won't
            automatically wrap lines, so be sure to use line breaks where
            appropriate (<br />).
          --> */}
          <div className="inner">
            <header>
              <h2>Hope Grows Counselling LLC</h2>
            </header>

            {/* <section className="container">

              <div className="row gtr-150">
                <div className="col-4 col-12-narrower"> */}
            {/* <!-- Sidebar --> */}
            {/* <div className="sidebar"> */}
            <div id="innerHomeBanner">
              <section>
                <img src={logo} alt="Logo of hands holding sapling" />
              </section>
              {/* </div> */}
              {/* </div> */}
              {/* </div> */}

              {/* <div className="col-8 col-12-narrower imp-narrower"> */}
              {/* <!-- Content --> */}
              {/* <div className="content" /> */}
              <section>
                <p>
                  Providing compassionate and quality care
                  <br />
                  to rural and urban Nevadans alike.
                  <br />
                  We're here & ready to help
                  <br />
                </p>
                {/* <i>(also, there will be a local picture behind here, cycling slowly)</i> */}
                <footer>
                  <ul className="buttons">
                    <li>
                      <a href="mailto:hopehelp@hopegrowsnv.com" className="button fit scrolly"> hopehelp@hopegrowsnv.com </a>
                    </li>
                    <li>
                      <a href="tel:+17755614328" className="button fit scrolly">(775) 561-4328</a>
                    </li>
                  </ul>
                </footer>
              </section>
            </div>
            {/* </section> */}
          </div>
        </section>
      )}

      {/* <!-- Main --> */}
      <article id="main">
        {children}
      </article>

      {/* <!-- CTA --> */}
      <section id="cta">
        <header>
          <h2>
            What should be the <strong>calls to action</strong> on this page?
          </h2>
          <p>
            This is entirely optional, but it's good to think about what we really want a person to do next. It can be the same thing across the entire site or customized on certain pages.
          </p>
        </header>
        <footer>
          <ul className="buttons">
            <li>
              <a href="/" className="button primary">
                Become a new client?
              </a>
            </li>
            <li>
              <a href="/" className="button">
                Schedule an appt?
              </a>
            </li>
          </ul>
        </footer>
      </section>

      {/* <!-- Footer --> */}
      <footer id="footer">
        <ul className="icons">
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="icon brands circle fa-instagram">
              <span className="label">Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="icon brands circle fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; Josh Glantz</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </footer>
    </div>
  )
}
