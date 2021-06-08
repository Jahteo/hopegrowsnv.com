import React from 'react'
import Layout from '../components/Layout'
import AltBanner from '../components/AltBanner'
import data from '../data/aboutUs.json'

export default function aboutUs() {
  return (
    <Layout>
      <title>Information about Hope Grows and our staff</title>
      <article id="main">
        <AltBanner pageName="Our Team" />
        <header className="container">
          {/* <header className="special container"> */}
          {/* <span className="icon solid fa-users" /> */}

          <p>{data.content}</p>
        </header>

        {data.display
           && (
             <section className="wrapper style3 container special">
               <header className="major">
                 <h2>
                   Administrative Support
                 </h2>
               </header>

               <div className="row">
                 {data.frontDeskAdmins.map((person) => {
                   return (
                     <div className="col-6 col-12-narrower">
                       <section>
                         <div className="image featured">
                           <img src={person.image} alt={person.imageAlt} />
                         </div>
                         <header>
                           <h3>{person.name}</h3>
                         </header>
                         <p>
                           {person.bio}
                         </p>
                       </section>
                     </div>
                   )
                 })}
               </div>

               <header className="major">
                 <h2>
                   Therapists
                 </h2>
               </header>

               <div className="row">
                 {data.providers.map((person) => {
                   return (
                     <div className="col-6 col-12-narrower">
                       <section>
                         <div className="image featured">
                           <img src={person.image} alt={person.imageAlt} />
                         </div>
                         <header>
                           <h3>{person.name}</h3>
                         </header>
                         <p>
                           {person.bio}
                         </p>
                       </section>
                     </div>
                   )
                 })}
               </div>

             </section>
           )}

      </article>
    </Layout>
  )
}
