import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'gatsby'
// import Helmet from 'react-helmet'
import logo from './images/logo/logo_03_white_ICON.jpg'
import useSiteMetadata from '../static_queries/useSiteMetadata'

// "document" is not available during server side rendering, so this allows build to succeed
function fixDocDuringBuild(code) {
  if (typeof document !== 'undefined') {
    return code
  }
  return null
}

function useInitialAnimations() {
  setTimeout(() => {
    fixDocDuringBuild(document.body.classList.remove('is-preload'))
  }, 100)
}

const navList = [
  {
    to: '/',
    label: 'Welcome',
  },
  {
    to: '/aboutUs',
    label: 'Who We Are',
  },
  {
    to: '/services',
    label: 'Services',
  },
  {
    to: '/resources',
    label: 'Resources',
  },
  {
    to: 'https://hopegrowsnv.clientsecure.me/sign-in',
    label: 'Log In',
  },
  {
    to: '/newClient',
    label: 'Become a Client',
    className: 'button primary',
  },
]
function buildLink(link) {
  if (link.to.includes('://')) {
    return <a href={link.to} className={link.className} target="_blank" rel="noreferrer">{link.label}</a>
  }
  return <Link to={link.to} className={link.className}>{link.label}</Link>
}
function buildSideLink(link) {
  if (
    link.to.includes('://')) {
    return (
      <a href={link.to} className={`link depth-0 ${link.className}`}>
        <span className="indent-0" />
        {link.label}
      </a>
    )
  }
  return (
    <Link to={link.to} className={`link depth-0 ${link.className}`}>
      <span className="indent-0" />
      {link.label}
    </Link>
  )
}

export default function Layout({ children, landing = false }) {
  useInitialAnimations()
  const { title } = useSiteMetadata()

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]')
  }
  function toggleSidebar() {
    fixDocDuringBuild(
      setTimeout(() => { document.body.classList.toggle('navPanel-visible') }, 0),
    )
  }
  function closeSidebar() {
    fixDocDuringBuild(
      document.body.classList.contains('navPanel-visible')
        ? document.body.classList.remove('navPanel-visible') : null,

    )
  }

  // <Helmet>
  //   <html lang="en" />
  //   <title>{title}</title>
  //   <meta name="description" content={description} />
  // </Helmet>

  return (
    // eslint-disable-next-line
    <div id="page-wrapper" onClick={() => closeSidebar()}>
      {/* <!-- Header --> */}
      <header id="header" className={landing && 'alt'}>
        <h1 id="logo">
          <Link to="/">
            <img src={logo} alt="Logo" id="logoTest" /> {title}
          </Link>
        </h1>
        <nav id="nav">
          <ul>
            {navList.map((link) => {
              return <li>{buildLink(link)}</li>
            })}
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
            <div id="innerHomeBanner">
              <section>
                <img src={logo} alt="Logo of hands holding sapling" />
              </section>

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
                      <a href="mailto:hopehelp@hopegrowsnv.com" target="_blank" rel="noreferrer" className="button fit scrolly"> hopehelp@hopegrowsnv.com</a>
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
              <a href="mailto:hopehelp@hopegrowsnv.com" className="button" target="_blank" rel="noreferrer">
                Email us: hopehelp@hopegrowsnv.com
              </a>
            </li>
          </ul>
        </footer>
        <blockquote>
          “The saddest day hath gleams of light, the darkest wave hath bright foam beneath it, the twinkles o'er the cloudiest night, some solitary star to cheer it.” —Sarah Winnemucca
        </blockquote>
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
            <a href="https://www.facebook.com/HopeGrowsNV" target="_blank" rel="noreferrer" className="icon brands circle fa-facebook">
              <span className="label">Facebook</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li><a href="https://github.com/Jahteo" target="_blank" rel="noreferrer">&copy; Josh Glantz</a></li>
          <li>
            Design: <a href="http://html5up.net" target="_blank" rel="noreferrer">HTML5 UP</a>
          </li>
        </ul>
      </footer>
      <div id="navButton">
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button
          type="button"
          className="toggle"
          onClick={() => toggleSidebar()}
        />
      </div>
      {fixDocDuringBuild(
        ReactDOM.createPortal((
          <nav>
            {navList.map((link) => {
              return buildSideLink(link)
            })}
          </nav>
        ), document.getElementById('navPanel')),
      )}
    </div>
  )
}
