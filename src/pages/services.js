import React from 'react'
import Layout from '../components/Layout'
import AltBanner from '../components/AltBanner'

export default function services() {
  return (
    <Layout>
      <title>Descriptions of services offered</title>
      <article id="main">
        <AltBanner pageName="Services" />
        {/* <!-- Section One, NoSidebar --> */}
        <section className="wrapper style3 container special">

          {/* <!-- Content --> */}
          <div className="content">
            <section>
              <header>
                <h2>Individual Therapy</h2>
              </header>
              <p>Our providers work with individual clients, using evidence-based practices, to aid clients in developing skills, understanding, and ways to process their mental health needs, challenges, and build resilience in the face of life’s struggles. We work to create a supportive and consistent environment where our clients feel safe and empowered to work on their wellness and toward their goals.</p>
            </section>
            <section>
              <header>
                <h2>Family Therapy</h2>
              </header>
              <p>Our providers work with families to help the members gain knowledge, skills, and tools to decrease conflict and increase open communication, support, and, when needed, accountability to each other.
              </p>
            </section>
            <section>
              <header>
                <h2>Couples Therapy</h2>
              </header>
              <p>Our providers work to aid couples in gaining the skills and understanding to reduce conflict and support growth, be that in the domains of coupling, co-parenting, or whatever facet of life the couple feels they need assistance in managing in new and hopefully healthier ways.</p>
            </section>
            <section>
              <header>
                <h2>Group Therapy</h2>
              </header>
              <p>Group Therapy at this time is focused on helping clients with Anger Management challenges learn new and healthy ways to manage their anger. Our group curriculum is an evidence-based intervention endorsed by SAMSHA, the national clearing house for evidence-based practices for mental health and substance abuse treatment. The group consists of two individual sessions with a provider who provides assessment and treatment planning services, followed by 12-1 hour group sessions focused on skill building to aid clients in understanding and managing their anger.</p>
            </section>
          </div>

        </section>

      </article>
    </Layout>
  )
}
