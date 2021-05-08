import React from 'react'
import Layout from '../components/Layout'

export default function resources() {
  // [
  //   {category:[{specific}, {specific},]},
  //   {category:[{specific}, {specific},]},
  // ]
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

  return (
    <Layout>

      <article id="main">

        <header className="special container">
          <span className="icon solid fa-tasks" />
          <h2>Resources</h2>
          <p>We at Hope Grows believe that mental health is only one piece of the puzzle when it comes to a person’s wellness and ability to manage both their responsibilities and achieve their goals. Below you will find a list of community resources that can aid in different facets of one’s life.</p>
        </header>

        {/* <!-- Section One, NoSidebar --> */}
        <section className="wrapper style3 container special">

          {/* <!-- Content --> */}
          <div className="content">
            <section>

              {/* attemp 2 at itterating and displayng */}
              {/* {resourceList.map((category) => (
                // console.log(category);
                <p>{(category) => {
                  for (const specific of category) {
                    return (specific)
                  }
                }}
                </p>
                // <p>{category[0]["name"]}</p>
              ),
              )} */}

              {/* attempting to test data resource data structures, but it's not working... */}
              {/* {Object.entries(resourceList).forEach(([ category, specificL ]) => (

                console.log(`${category.toString()}: ${specificL}`)
              ))} */}

              {/* {() => {
                for (const category of resourceList) {
                  return (
                    <>
                      <p>{category}</p>
                    </>
                  )
                }
              }} */}

              <header><h2>Food Bank</h2></header>
              <p>all food banks will be listed here, work-in-progress</p>
              <header><h2>Other Categories</h2></header>
              <p>there'll be a series of category headers, with each resource listed underneath, work-in-progress</p>

              {/* <header>
                <h2>Food Bank</h2>
              </header>
              <p>Our providers work with individual clients, using evidence-based practices, to aid clients in developing skills, understanding, and ways to process their mental health needs, challenges, and build resilience in the face of life’s struggles. We work to create a supportive and consistent environment where our clients feel safe and empowered to work on their wellness and toward their goals.</p>
              */}
              {/* </section> */}
            </section>

          </div>

        </section>

      </article>

    </Layout>
  )
}
