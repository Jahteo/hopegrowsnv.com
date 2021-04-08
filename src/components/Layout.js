import React from 'react'
// import Helmet from 'react-helmet'
import useSiteMetadata from '../static_queries/useSiteMetadata'

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
        <h1 id="logo">
          <a href="index.html">
            <span>logo here</span> {title}
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
              <a href="/">Services</a>
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
              <a href="/">Log In</a>
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
            <p>
              Providing compassionate and quality care
              <br />
              to rural and urban Nevadans alike.
              <br />
              We're here & ready to help
            </p>
            <footer>
              <ul className="buttons stacked">
                <li>
                  <a href="#main" className="button fit scrolly">
                    Learn How
                  </a>
                </li>
                <li>
                  775-xxx-xxxx
                </li>
              </ul>
            </footer>
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
            Ready to do <strong>something</strong>?
          </h2>
          <p>
            Proin a ullamcorper elit, et sagittis turpis integer ut fermentum.
          </p>
        </header>
        <footer>
          <ul className="buttons">
            <li>
              <a href="/" className="button primary">
                Take My Money
              </a>
            </li>
            <li>
              <a href="/" className="button">
                LOL Wut
              </a>
            </li>
          </ul>
        </footer>
      </section>

      {/* <!-- Footer --> */}
      <footer id="footer">
        <ul className="icons">
          <li>
            <a href="/" className="icon brands circle fa-twitter">
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a href="/" className="icon brands circle fa-facebook-f">
              <span className="label">Facebook</span>
            </a>
          </li>
          <li>
            <a href="/" className="icon brands circle fa-google-plus-g">
              <span className="label">Google+</span>
            </a>
          </li>
          <li>
            <a href="/" className="icon brands circle fa-github">
              <span className="label">Github</span>
            </a>
          </li>
          <li>
            <a href="/" className="icon brands circle fa-dribbble">
              <span className="label">Dribbble</span>
            </a>
          </li>
        </ul>

        <ul className="copyright">
          <li>&copy; Untitled</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </footer>
    </div>
  )
}
