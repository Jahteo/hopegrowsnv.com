import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

export default function resources() {
  const foodBanks = [
    {
      name: 'Yerington Food Pantry',
      tel: '775-350-4597',
      address: '124 W Bridge ST, Yerington NV 89447',
      url: 'Yerington Food Pantry | Facebook',
    },

    {
      name: 'Silver Stage Food Pantry',
      tel: '775-577-9161',
      address: '1775 E HWY 50, Silver Springs NV 89429',
      url: 'Silver Stage Food Pantry | Facebook',
    },

    {
      name: 'Dayton Food Bank',
      tel: '775-246-7834',
      address: '5 Enterprise Way, Dayton NV 8903',
      url: 'Dayton Food Pantry, Dayton NV (food-banks.org)',
    },

    {
      name: 'Living Faith Christian Fellowship',
      tel: '775-575-5037',
      address: '115 West Main St, Fernley NV 89408',
      url: 'http://www.livingfaithchristianfellowshipchurch.org/',
    },

    {
      name: 'Hawthorne Food Pantry',
      tel: '775-945-2471',
      address: '924 5th St, Hawthorne NV 89415',
      url: 'www.cahsnv.org',
    },
  ]
  const medicals = [
    {
      name: 'Yerington/ South Lyon Medical Center ',
      tel: '775-463-2301',
      address: '213 South Whitacre St, Yerington NV 89447',
      url: 'South Lyon Medical Center – Heart of a Healthy Community (slmcnv.org)',
    },
    {
      name: 'Silver Springs Rural Health Center',
      tel: '775-577-2117',
      address: '3595 US-50 Silver Springs, NV 89429',
      url: 'Silver Springs Rural Health Centers Renown Health',
    },
    {
      name: 'Topaz Ranch Medical Clinic',
      tel: '775-783-3096',
      address: '3919 Carter Way, Wellington NV 89444',
      url: 'cvmchospital.org',
    },
    {
      name: 'Banner Health Clinic',
      tel: '775-575-7171',
      address: '805 E Main ST, Fernley NV 89408',
      url: 'Banner Health Center in Fernley | Nevada Pacific Pkwy & US-50',
    },
    {
      name: 'Carson Tahoe Physicians Clinics',
      tel: '775-445-7630',
      address: '901 Medical Center, Dayton NV 89403',
      url: 'Carson Tahoe Health | Healthcare Network',
    },
    {
      name: 'Mt Grant General Hospital',
      tel: '775-945-2461',
      address: '200 S A Street, Hawthorne NV 89415',
      url: 'mgghnv.org',
    },
  ]
  const medicaidWelfares = [
    {
      name: 'Yerington District Office ',
      tel: '775-684-0800',
      address: '215 W Bridge St, Suite 6, Yerington NV 89447',
      url: '',
    },
    {
      name: 'Lyon County Human Services',
      tel: '775-577-5009',
      address: '620 Lake Avenue, Silver Springs NV 89429',
      url: 'https://www.lyon-county.org/175/Human-Services',
    },
    {
      name: 'State of Nevada Health & Human Services',
      tel: '775-575-1844',
      address: '55 N Center ST, Fernley NV 89408',
      url: 'dcfs.nv.gov',
    },
    {
      name: 'Nevada State Welfare & Supportive Services',
      tel: '775-945-3602',
      address: '100 C Street, Hawthorne NV 89415',
      url: ' https://dwss.nv.gov/',
    },
    {
      name: 'Dayton Human Services',
      tel: '775-246-6326',
      address: '5 Pine Cone Road, Dayton NV 89403',
      url: 'Lyon County, NV - Official Website | Official Website (lyon-county.org)',
    },
  ]
  const crisiLines = [
    {
      name: 'Mobile Outreach',
      tel: '775-334-2677',
      address: '',
      url: '',
    },
    {
      name: 'The Trevor Project ',
      tel: '1-866-488-7386',
      address: 'Text “Trevor” to 1-202-304-1200',
      url: '',
    },
    {
      name: 'Crisis Text Line',
      tel: 'Text “Home” to 741741',
      address: '',
      url: '',
    },
    {
      name: 'Childrens Mobile Crisis Response Team',
      tel: '702-486-7865',
      address: '',
      url: '',
    },
    {
      name: 'National Suicide Prevention Lifeline',
      tel: '1-800-273-8255',
      address: '',
      url: '',
    },
    {
      name: 'Sexual Assault Hotline',
      tel: '1-775-221-7600',
      address: 'Text Sass to 839863',
      url: 'Sexual Assault Hotline and Support Services | CSSNV',
    },
  ]
  const legalAides = [
    {
      name: 'Nevada Legal Services',
      tel: '775-463-1222',
      address: '720 S Main St Unit A, Yerington NV 89447',
      url: 'Nevada Legal Services - Free Legal Services for Low-Income Nevadans (nlslaw.net)',
    },
    {
      name: 'A Nevada’s Best',
      tel: '775-575-5556',
      address: '564 Wedge Lane, Fernley NV 89408',
      url: 'NEVADA INCORPORATE #1 $29.00 | Incorporate Online',
    },
    {
      name: 'Affordable Legal Services',
      tel: '775-883-0404',
      address: '10116 US HWY 50 E Ste 103, Mound House NV 89706',
      url: 'apservicesnv.com',
    },
  ]
  const DCFSOffices = [
    {
      name: 'Yerington DCFS Office',
      tel: '775-463-3151',
      address: '205 West Goldfield Ave, Yerington NV 89447',
      url: 'systems.advocate@dcfs.nv.gov',
    },
    {
      name: 'Fernley DCFS Office',
      tel: '775-575-1844',
      address: '55 North Center St #3, Fernley NV 89408',
      url: 'Contact Child Welfare Services (nv.gov)',
    },
  ]
  const schoolResources = [
    {
      name: 'Safe Voice Nevada ',
      tel: '1-833-216-7233',
      address: '',
      url: 'Safe Voice Nevada (safevoicenv.org)',
    },
    {
      name: 'Lyon County School District ',
      tel: '775-575-1575',
      address: '1100 Jasmine Ln, Fernley NV 89408',
      url: 'www.sms.lyoncsd.org',
    },
    {
      name: 'Lyon County School District ',
      tel: '775-463-6800',
      address: '25 East Goldfield Ave, Yerington NV 89447',
      url: 'Home - Lyon County School District (lyoncsd.org)',
    },
  ]
  const housings = [
    {
      name: 'Nevada Rural Housing Authority',
      tel: '775-887-1795',
      address: 'Main Office: 3695 Desatoya Drive, Carson City NV 89701',
      url: 'info@nvrural.org',
    },
    {
      name: 'Rental Assistance',
      tel: '775-887-1795',
      address: 'Email: renthelp@nvrural.org ',
      url: '',
    },
    {
      name: 'Cares Housing Assistance Program (CHAP)',
      tel: '775-887-1795',
      address: 'Login to Nevada Rural Housing Authority to track your url: account | Nevada Rural Housing Authority (securecafe.com)',
    },
  ]
  const utilities = [
    {
      name: 'NV Energy',
      tel: 'Special Assistance Fund for Energy (SAFE)',
      address: '775-577-5009',
      url: 'Assistance Programs | NV Energy',
    },
    {
      name: 'Utility Bill Assistance ',
      tel: '211 Nevada ',
      address: '1-866-535-5654',
      url: 'Utility Bill Assistance - Nevada 211',
    },
  ]

  return (
    <Layout>

      <article id="main">

        <header className="special container">
          <span className="icon solid fa-tasks" />
          <h2>Resources</h2>
          <p>We at Hope Grows believe that mental health is only one piece of the puzzle when it comes to a person’s wellness and ability to manage both their responsibilities and achieve their goals. Below you will find a list of community resources that can aid in different facets of one’s life.</p>
          <ul>
            <li><Link to="#foodBanks">Food Banks</Link></li>
            <li><Link to="#medicals">Medical</Link></li>
            <li><Link to="#medicaidWelfares">Medicaid & Welfare</Link></li>
            <li><Link to="#crisis">Crisis Lines</Link></li>
            <li><Link to="#legal">Legal Aides</Link></li>
            <li><Link to="#dcfso">DCSF Offices</Link></li>
            <li><Link to="#school">School Resources</Link></li>
            <li><Link to="#housing">Housing</Link></li>
            <li><Link to="#utilities">Utilities</Link></li>
          </ul>
        </header>

        {/* <!-- Section One, NoSidebar --> */}
        <section className="wrapper style3 container special">

          {/* <!-- Content --> */}
          <div className="content">
            <section>

              <section id="foodBanks" className="wrapper style2 container special">
                <header><h2>Food Banks</h2></header>
              </section>
              {foodBanks.map((foodBank) => {
                const last = foodBanks[foodBanks.length - 1].name
                return (
                  <>
                    <h3>{foodBank.name}</h3>
                    <p>{foodBank.tel}</p>
                    <p>{foodBank.address}</p>
                    <p>{foodBank.url}</p>
                    {(foodBank.name === last) ? <hr />
                      : <hr style={{ borderTop: '3px solid #bbb' }} />}
                  </>
                )
              })}

              <section id="medicals" className="wrapper style2 container special">
                <header><h2>Medical</h2></header>
              </section>
              {medicals.map((medical) => {
                const last = medicals[medicals.length - 1].name
                return (
                  <>
                    <h3>{medical.name}</h3>
                    <p>{medical.tel}</p>
                    <p>{medical.address}</p>
                    <p>{medical.url}</p>
                    {(medical.name === last) ? <hr />
                      : <hr style={{ borderTop: '3px solid #bbb' }} />}
                  </>
                )
              })}

              <section id="medicaidWelfares" className="wrapper style2 container special">
                <header><h2>Medicaid & Welfare</h2></header>
              </section>
              {medicaidWelfares.map((medWelf) => {
                const last = medicaidWelfares[medicaidWelfares.length - 1].name
                return (
                  <>
                    <h3>{medWelf.name}</h3>
                    <p>{medWelf.tel}</p>
                    <p>{medWelf.address}</p>
                    <p>{medWelf.url}</p>
                    {(medWelf.name === last) ? <hr />
                      : <hr style={{ borderTop: '3px solid #bbb' }} />}
                  </>
                )
              })}

              <section id="crisis" className="wrapper style2 container special">
                <header><h2>Crisis Lines</h2></header>
              </section>
              {crisiLines.map((crisiLine) => {
                const last = crisiLines[crisiLines.length - 1].name
                return (
                  <>
                    <h3>{crisiLine.name}</h3>
                    <p>{crisiLine.tel}</p>
                    <p>{crisiLine.address}</p>
                    <p>{crisiLine.url}</p>
                    {(crisiLine.name === last) ? <hr />
                      : <hr style={{ borderTop: '3px solid #bbb' }} />}
                  </>
                )
              })}

              <section id="legal" className="wrapper style2 container special">
                <header><h2>Legal Aides</h2></header>
              </section>
              {legalAides.map((legalAide) => {
                const last = legalAides[legalAides.length - 1].name
                return (
                  <>
                    <h3>{legalAide.name}</h3>
                    <p>{legalAide.tel}</p>
                    <p>{legalAide.address}</p>
                    <p>{legalAide.url}</p>
                    {(legalAide.name === last) ? <hr />
                      : <hr style={{ borderTop: '3px solid #bbb' }} />}
                  </>
                )
              })}

              <section id="dcfso" className="wrapper style2 container special">
                <header><h2>DCFS Offices</h2></header>
              </section>
              {DCFSOffices.map((DCFSOffice) => {
                const last = DCFSOffices[DCFSOffices.length - 1].name
                return (
                  <>
                    <h3>{DCFSOffice.name}</h3>
                    <p>{DCFSOffice.tel}</p>
                    <p>{DCFSOffice.address}</p>
                    <p>{DCFSOffice.url}</p>
                    {(DCFSOffice.name === last) ? <hr />
                      : <hr style={{ borderTop: '3px solid #bbb' }} />}
                  </>
                )
              })}

              <section id="school" className="wrapper style2 container special">
                <header><h2>School Resources</h2></header>
              </section>
              {schoolResources.map((schoolResource) => {
                const last = schoolResources[schoolResources.length - 1].name
                return (
                  <>
                    <h3>{schoolResource.name}</h3>
                    <p>{schoolResource.tel}</p>
                    <p>{schoolResource.address}</p>
                    <p>{schoolResource.url}</p>
                    {(schoolResource.name === last) ? <hr />
                      : <hr style={{ borderTop: '3px solid #bbb' }} />}
                  </>
                )
              })}

              <section id="housing" className="wrapper style2 container special">
                <header><h2>Housing</h2></header>
              </section>
              {housings.map((housing) => {
                const last = housings[housings.length - 1].name
                return (
                  <>
                    <h3>{housing.name}</h3>
                    <p>{housing.tel}</p>
                    <p>{housing.address}</p>
                    <p>{housing.url}</p>
                    {(housing.name === last) ? <hr />
                      : <hr style={{ borderTop: '3px solid #bbb' }} />}
                  </>
                )
              })}

              <section id="utilities" className="wrapper style2 container special">
                <header><h2>Utilities</h2></header>
              </section>
              {utilities.map((utilitie) => {
                const last = utilities[utilities.length - 1].name
                return (
                  <>
                    <h3>{utilitie.name}</h3>
                    <p>{utilitie.tel}</p>
                    <p>{utilitie.address}</p>
                    <p>{utilitie.url}</p>
                    {(utilitie.name === last) ? <hr />
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

const resourceList = [
  {
    'Food bank': [
      {
        name: 'Yerington Food Pantry',
        tel: '775-350-4597',
        address: '124 W Bridge ST, Yerington NV 89447',
        url: 'Yerington Food Pantry | Facebook',
      },

      {
        name: 'Silver Stage Food Pantry',
        tel: '775-577-9161',
        address: '1775 E HWY 50, Silver Springs NV 89429',
        url: 'Silver Stage Food Pantry | Facebook',
      },

      {
        name: 'Dayton Food Bank',
        tel: '775-246-7834',
        address: '5 Enterprise Way, Dayton NV 8903',
        url: 'Dayton Food Pantry, Dayton NV (food-banks.org)',
      },

      {
        name: 'Living Faith Christian Fellowship',
        tel: '775-575-5037',
        address: '115 West Main St, Fernley NV 89408',
        url: 'http://www.livingfaithchristianfellowshipchurch.org/',
      },

      {
        name: 'Hawthorne Food Pantry',
        tel: '775-945-2471',
        address: '924 5th St, Hawthorne NV 89415',
        url: 'www.cahsnv.org',
      },
    ],
  },
  {
    'Medical': [

      {
        name: 'Yerington/ South Lyon Medical Center ',
        tel: '775-463-2301',
        address: '213 South Whitacre St, Yerington NV 89447',
        url: 'South Lyon Medical Center – Heart of a Healthy Community (slmcnv.org)',
      },

      {
        name: 'Silver Springs Rural Health Center',
        tel: '775-577-2117',
        address: '3595 US-50 Silver Springs, NV 89429',
        url: 'Silver Springs Rural Health Centers Renown Health',
      },

      {
        name: 'Topaz Ranch Medical Clinic',
        tel: '775-783-3096',
        address: '3919 Carter Way, Wellington NV 89444',
        url: 'cvmchospital.org',
      },

      {
        name: 'Banner Health Clinic',
        tel: '775-575-7171',
        address: '805 E Main ST, Fernley NV 89408',
        url: 'Banner Health Center in Fernley | Nevada Pacific Pkwy & US-50',
      },

      {
        name: 'Carson Tahoe Physicians Clinics',
        tel: '775-445-7630',
        address: '901 Medical Center, Dayton NV 89403',
        url: 'Carson Tahoe Health | Healthcare Network',
      },

      {
        name: 'Mt Grant General Hospital',
        tel: '775-945-2461',
        address: '200 S A Street, Hawthorne NV 89415',
        url: 'mgghnv.org',
      },
    ],
  },

  {
    'Medicaid/Welfare Office': [

      {
        name: 'Yerington District Office ',
        tel: '775-684-0800',
        address: '215 W Bridge St, Suite 6, Yerington NV 89447',
        url: '',
      },

      {
        name: 'Lyon County Human Services',
        tel: '775-577-5009',
        address: '620 Lake Avenue, Silver Springs NV 89429',
        url: 'https://www.lyon-county.org/175/Human-Services',
      },

      {
        name: 'State of Nevada Health & Human Services',
        tel: '775-575-1844',
        address: '55 N Center ST, Fernley NV 89408',
        url: 'dcfs.nv.gov',
      },

      {
        name: 'Nevada State Welfare & Supportive Services',
        tel: '775-945-3602',
        address: '100 C Street, Hawthorne NV 89415',
        url: ' https://dwss.nv.gov/',
      },

      {
        name: 'Dayton Human Services',
        tel: '775-246-6326',
        address: '5 Pine Cone Road, Dayton NV 89403',
        url: 'Lyon County, NV - Official Website | Official Website (lyon-county.org)',
      },
    ],
  },

  {
    'Crisis line': [

      {
        name: 'Mobile Outreach',
        tel: '775-334-2677',
        address: '',
        url: '',
      },

      {
        name: 'The Trevor Project ',
        tel: '1-866-488-7386',
        address: 'Text “Trevor” to 1-202-304-1200',
        url: '',
      },

      {
        name: 'Crisis Text Line',
        tel: 'Text “Home” to 741741',
        address: '',
        url: '',
      },

      {
        name: 'Childrens Mobile Crisis Response Team',
        tel: '702-486-7865',
        address: '',
        url: '',
      },

      {
        name: 'National Suicide Prevention Lifeline',
        tel: '1-800-273-8255',
        address: '',
        url: '',
      },

      {
        name: 'Sexual Assault Hotline',
        tel: '1-775-221-7600',
        address: 'Text Sass to 839863',
        url: 'Sexual Assault Hotline and Support Services | CSSNV',
      },
    ],
  },

  {
    'Legal Aide': [

      {
        name: 'Nevada Legal Services',
        tel: '775-463-1222',
        address: '720 S Main St Unit A, Yerington NV 89447',
        url: 'Nevada Legal Services - Free Legal Services for Low-Income Nevadans (nlslaw.net)',
      },

      {
        name: 'A Nevada’s Best',
        tel: '775-575-5556',
        address: '564 Wedge Lane, Fernley NV 89408',
        url: 'NEVADA INCORPORATE #1 $29.00 | Incorporate Online',
      },

      {
        name: 'Affordable Legal Services',
        tel: '775-883-0404',
        address: '10116 US HWY 50 E Ste 103, Mound House NV 89706',
        url: 'apservicesnv.com',
      },
    ],
  },
  {
    'DCFS Offices': [

      {
        name: 'Yerington DCFS Office',
        tel: '775-463-3151',
        address: '205 West Goldfield Ave, Yerington NV 89447',
        url: 'systems.advocate@dcfs.nv.gov',
      },

      {
        name: 'Fernley DCFS Office',
        tel: '775-575-1844',
        address: '55 North Center St #3, Fernley NV 89408',
        url: 'Contact Child Welfare Services (nv.gov)',
      },
    ],
  },
  {
    'School Resources': [

      {
        name: 'Safe Voice Nevada ',
        tel: '1-833-216-7233',
        address: '',
        url: 'Safe Voice Nevada (safevoicenv.org)',
      },

      {
        name: 'Lyon County School District ',
        tel: '775-575-1575',
        address: '1100 Jasmine Ln, Fernley NV 89408',
        url: 'www.sms.lyoncsd.org',
      },

      {
        name: 'Lyon County School District ',
        tel: '775-463-6800',
        address: '25 East Goldfield Ave, Yerington NV 89447',
        url: 'Home - Lyon County School District (lyoncsd.org)',
      },
    ],
  },
  {
    'Housing': [

      {
        name: 'Nevada Rural Housing Authority',
        tel: '775-887-1795',
        address: 'Main Office: 3695 Desatoya Drive, Carson City NV 89701',
        url: 'info@nvrural.org',
      },

      {
        name: 'Rental Assistance',
        tel: '775-887-1795',
        address: 'Email: renthelp@nvrural.org ',
        url: '',
      },

      {
        name: 'Cares Housing Assistance Program (CHAP)',
        tel: '775-887-1795',
        address: 'Login to Nevada Rural Housing Authority to track your url: account | Nevada Rural Housing Authority (securecafe.com)',
      },
    ],
  },
  {
    'Utilities': [

      {
        name: 'NV Energy',
        tel: 'Special Assistance Fund for Energy (SAFE)',
        address: '775-577-5009',
        url: 'Assistance Programs | NV Energy',
      },

      {
        name: 'Utility Bill Assistance ',
        tel: '211 Nevada ',
        address: '1-866-535-5654',
        url: 'Utility Bill Assistance - Nevada 211',
      },
    ],
  },
]
