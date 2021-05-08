import React from 'react'

export default function NoSidebar(data) {
  const { title, subTitle, content } = data
  return (
    // <body className="no-sidebar is-preload">
    <div className="no-sidebar is-preload">
      <div id="page-wrapper">

        {/* <!-- Main --> */}
        <article id="main">

          <header className="special container">
            <span className="icon solid fa-users" />
            <h2>{title}</h2>
            <p>{subTitle}</p>
          </header>

          {/* <!-- One --> */}
          <section className="wrapper style4 container">

            {/* <!-- Content --> */}
            <div className="content">
              <section>
                <img src="images/pic04.jpg" alt="" />
                <header>
                  <h3>Dolore Amet Consequat</h3>
                </header>
                <p>Aliquam massa urna, imperdiet sit amet mi non, bibendum euismod est. Curabitur mi justo, tincidunt vel eros ullamcorper, porta cursus justo. Cras vel neque eros. Vestibulum diam quam, mollis at consectetur non, malesuada quis augue. Morbi tincidunt pretium interdum. Morbi mattis elementum orci, nec dictum massa. Morbi eu faucibus massa. Aliquam massa urna, imperdiet sit amet mi non, bibendum euismod est. Curabitur mi justo, tincidunt vel eros ullamcorper, porta cursus justo. Cras vel neque eros. Vestibulum diam.</p>
                <p>Vestibulum diam quam, mollis at consectetur non, malesuada quis augue. Morbi tincidunt pretium interdum. Morbi mattis elementum orci, nec dictum porta cursus justo. Quisque ultricies lorem in ligula condimentum, et egestas turpis sagittis. Cras ac nunc urna. Nullam eget lobortis purus. Phasellus vitae tortor non est placerat tristique. Sed id sem et massa ornare pellentesque. Maecenas pharetra porta accumsan. </p>
                <p>In vestibulum massa quis arcu lobortis tempus. Nam pretium arcu in odio vulputate luctus. Suspendisse euismod lorem eget lacinia fringilla. Sed sed felis justo. Nunc sodales elit in laoreet aliquam. Nam gravida, nisl sit amet iaculis porttitor, risus nisi rutrum metus, non hendrerit ipsum arcu tristique est.</p>
              </section>
            </div>

          </section>

          {/* <!-- Two --> */}
          <section className="wrapper style1 container special">
            <div className="row">
              <div className="col-4 col-12-narrower">

                <section>
                  <header>
                    <h3>This is Something</h3>
                  </header>
                  <p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
                  <footer>
                    <ul className="buttons">
                      <li>Learn More</li>
                    </ul>
                  </footer>
                </section>

              </div>
              <div className="col-4 col-12-narrower">

                <section>
                  <header>
                    <h3>Also Something</h3>
                  </header>
                  <p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
                  <footer>
                    <ul className="buttons">
                      <li>Learn More</li>
                    </ul>
                  </footer>
                </section>

              </div>
              <div className="col-4 col-12-narrower">

                <section>
                  <header>
                    <h3>Probably Something</h3>
                  </header>
                  <p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
                  <footer>
                    <ul className="buttons">
                      <li>Learn More</li>
                    </ul>
                  </footer>
                </section>

              </div>
            </div>
          </section>

        </article>

      </div>
    </div>
  )
}
