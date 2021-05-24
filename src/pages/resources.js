import React from 'react'
import { Link } from 'gatsby'
import AltBanner from '../components/AltBanner'
import Layout from '../components/Layout'
import data from '../data/resources.json'

export default function resources() {
  return (
    <Layout>
      <title>List of community resouces</title>
      <article id="main">
        <AltBanner pageName="Resources" />
        <header className="container">
          <p>{data.content}</p> <br />
          {/* Scrolling buttons */}
          <section className="wrapper style1 container special">
            <div className="row">

              {data.resourceSections.map((section) => {
                return (
                  <div className="col-4 col-12-narrower buttons">
                    <Link to={section.toID} className="button small">{section.name}</Link>
                  </div>
                )
              })}

            </div>
          </section>
        </header>

        {/* <!-- Section One, NoSidebar --> */}
        <section className="wrapper style3 container special">

          {/* <!-- Content --> */}
          <div className="content">
            <section>

              <section id="foodBanks" className="wrapper style2 container special">
                <header><h2>Food Banks</h2></header>
              </section>
              {data.foodBanks.map((foodBank) => {
                const last = data.foodBanks[data.foodBanks.length - 1].name
                return (
                  <>
                    <h3>{foodBank.name}</h3>
                    <p>{foodBank.tel}</p>
                    <p>{foodBank.address}</p>
                    <a href={`http://${foodBank.url}`} target="_blank" rel="noreferrer">{foodBank.url}</a>
                    {(foodBank.name === last) ? <hr />
                      : <hr style={{ borderTop: '3px solid #bbb' }} />}
                  </>
                )
              })}

              <section id="medicals" className="wrapper style2 container special">
                <header><h2>Medical</h2></header>
              </section>
              {data.medicals.map((medical) => {
                const last = data.medicals[data.medicals.length - 1].name
                return (
                  <>
                    <h3>{medical.name}</h3>
                    <p>{medical.tel}</p>
                    <p>{medical.address}</p>
                    <a href={`http://${medical.url}`}>{medical.url}</a>
                    {(medical.name === last) ? <hr />
                      : <hr style={{ borderTop: '3px solid #bbb' }} />}
                  </>
                )
              })}

              <section id="medicaidWelfares" className="wrapper style2 container special">
                <header><h2>Medicaid & Welfare</h2></header>
              </section>
              {data.medicaidWelfares.map((medWelf) => {
                const last = data.medicaidWelfares[data.medicaidWelfares.length - 1].name
                return (
                  <>
                    <h3>{medWelf.name}</h3>
                    <p>{medWelf.tel}</p>
                    <p>{medWelf.address}</p>
                    <a href={`http://${medWelf.url}`}>{medWelf.url}</a>
                    {(medWelf.name === last) ? <hr />
                      : <hr style={{ borderTop: '3px solid #bbb' }} />}
                  </>
                )
              })}

              <section id="crisis" className="wrapper style2 container special">
                <header><h2>Crisis Lines</h2></header>
              </section>
              {data.crisisLines.map((crisisLine) => {
                const last = data.crisisLines[data.crisisLines.length - 1].name
                return (
                  <>
                    <h3>{crisisLine.name}</h3>
                    <p>{crisisLine.tel}</p>
                    <p>{crisisLine.address}</p>
                    <a href={`http://${crisisLine.url}`}>{crisisLine.url}</a>
                    {(crisisLine.name === last) ? <hr />
                      : <hr style={{ borderTop: '3px solid #bbb' }} />}
                  </>
                )
              })}

              <section id="legal" className="wrapper style2 container special">
                <header><h2>Legal Aides</h2></header>
              </section>
              {data.legalAides.map((legalAide) => {
                const last = data.legalAides[data.legalAides.length - 1].name
                return (
                  <>
                    <h3>{legalAide.name}</h3>
                    <p>{legalAide.tel}</p>
                    <p>{legalAide.address}</p>
                    <a href={`http://${legalAide.url}`}>{legalAide.url}</a>
                    {(legalAide.name === last) ? <hr />
                      : <hr style={{ borderTop: '3px solid #bbb' }} />}
                  </>
                )
              })}

              <section id="dcfso" className="wrapper style2 container special">
                <header><h2>DCFS Offices</h2></header>
              </section>
              {data.DCFSOffices.map((DCFSOffice) => {
                const last = data.DCFSOffices[data.DCFSOffices.length - 1].name
                return (
                  <>
                    <h3>{DCFSOffice.name}</h3>
                    <p>{DCFSOffice.tel}</p>
                    <p>{DCFSOffice.address}</p>
                    <a href={`http://${DCFSOffice.url}`}>{DCFSOffice.url}</a>
                    {(DCFSOffice.name === last) ? <hr />
                      : <hr style={{ borderTop: '3px solid #bbb' }} />}
                  </>
                )
              })}

              <section id="school" className="wrapper style2 container special">
                <header><h2>School Resources</h2></header>
              </section>
              {data.schoolResources.map((schoolResource) => {
                const last = data.schoolResources[data.schoolResources.length - 1].name
                return (
                  <>
                    <h3>{schoolResource.name}</h3>
                    <p>{schoolResource.tel}</p>
                    <p>{schoolResource.address}</p>
                    <a href={`http://${schoolResource.url}`}>{schoolResource.url}</a>
                    {(schoolResource.name === last) ? <hr />
                      : <hr style={{ borderTop: '3px solid #bbb' }} />}
                  </>
                )
              })}

              <section id="housing" className="wrapper style2 container special">
                <header><h2>Housing</h2></header>
              </section>
              {data.housings.map((housing) => {
                const last = data.housings[data.housings.length - 1].name
                return (
                  <>
                    <h3>{housing.name}</h3>
                    <p>{housing.tel}</p>
                    <p>{housing.address}</p>
                    <a href={`http://${housing.url}`}>{housing.url}</a>
                    {(housing.name === last) ? <hr />
                      : <hr style={{ borderTop: '3px solid #bbb' }} />}
                  </>
                )
              })}

              <section id="utilities" className="wrapper style2 container special">
                <header><h2>Utilities</h2></header>
              </section>
              {data.utilities.map((utility) => {
                const last = data.utilities[data.utilities.length - 1].name
                return (
                  <>
                    <h3>{utility.name}</h3>
                    <p>{utility.tel}</p>
                    <p>{utility.address}</p>
                    <a href={`http://${utility.url}`}>{utility.url}</a>
                    {(utility.name === last) ? <hr />
                      : <hr style={{ borderTop: '3px solid #bbb' }} />}
                  </>
                )
              })}

            </section>

          </div>

        </section>

      </article>

    </Layout>
  )
}
