import React from 'react'
import { Link } from 'gatsby'
// import Helmet from 'react-helmet'
import logo from './images/logo/logo_03_white_ICON.jpg'
import useSiteMetadata from '../static_queries/useSiteMetadata'
import LoginModal from '../shared/LoginModal'

function useInitialAnimations() {
  setTimeout(() => {
    if (typeof document !== 'undefined') {
      document.body.classList.remove('is-preload')
    }
  }, 100)
}

export default function Layout({ children, landing = false }) {
  useInitialAnimations()
  const { title } = useSiteMetadata()

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]')
  }

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
          <Link to="/">
            <img src={logo} alt="Logo" id="logoTest" /> {title}
          </Link>
        </h1>
        <nav id="nav">
          <ul>
            <li className="current">
              <Link to="/">Welcome</Link>
            </li>
            <li>
              <Link to="/aboutUs">Who We Are</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              {/* <button type="button">B Log In</button> */}
              <LoginModal id="login">M Log In </LoginModal>
            </li>
            <li>
              <Link to="/newClient" className="button primary">
                Create an account
              </Link>
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
                  for rural and urban Nevadans alike.
                  <br />
                  We're here & ready to help
                  <br />
                </p>
                {/* <i>(also, there will be a local picture behind here, cycling slowly)</i> */}
                <footer>
                  <ul className="buttons">
                    <li>
                      <a href="mailto:hopehelp@hopegrowsnv.com" className="button fit scrolly"> hopehelp@hopegrowsnv.com</a>
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
      {children}

      {/* <!-- CTA --> */}
      <section id="cta">
        <header>
          <h2>
            First Steps
          </h2>
        </header>
        <footer>
          <ul className="buttons">
            <li>
              <Link to="/newClient" className="button primary">
                Become a New Client
              </Link>
            </li>
            <li>
              <a href="tel:+17755614328" className="button">
                Call us: (775) 561-4328
              </a>
            </li>
            <li>
              <a href="mailto:hopehelp@hopegrowsnv.com" className="button">
                Email us: hopehelp@hopegrowsnv.com
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
