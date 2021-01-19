import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import '../styles/volunteer-page.scss'

export const VolunteerPageTemplate = (props) => {
  const { page } = props

  return (
    <article className='volunteer'>
      <div className='volunteer-container  container'>
        <section className='volunteer-header'>
          <div className='volunteer-titleWrapper'>
            <h1 className='volunteer-title'>{page.frontmatter.title}</h1>
          </div>
        </section>
      </div>
      <section className='section volunteerInfo'>
        <div className='container'>
          <h2 className='volunteerInfo-title'>
            {page.frontmatter.whatWeDo.title}
          </h2>
          <div>{page.frontmatter.whatWeDo.description}</div>
        </div>
      </section>
      <section className='section volunteerInfo'>
        <div className='container'>
          <h2 className='volunteerInfo-title'>
            {page.frontmatter.impact.title}
          </h2>
          <div>{page.frontmatter.impact.description}</div>
        </div>
      </section>
      <section className='section volunteerInfo'>
        <div className='container'>
          <h2 className='volunteerInfo-title'>
            {page.frontmatter.groupDynamic.title}
          </h2>
          <div>{page.frontmatter.groupDynamic.description}</div>
        </div>
      </section>
      <section className='section volunteerInfo'>
        <div className='container'>
          <h2 className='volunteerInfo-title'>
            {page.frontmatter.qualifications.title}
          </h2>
          <div>{page.frontmatter.qualifications.description}</div>
        </div>
      </section>
      <section className='section volunteerInfo'>
        <div className='container'>
          <h2 className='volunteerInfo-title'>
            {page.frontmatter.timeExpectations.title}
          </h2>
          <div>{page.frontmatter.timeExpectations.description}</div>
        </div>
      </section>
      <section className='section volunteerInfo'>
        <div className='container'>
          <h2 className='volunteerInfo-title'>
            {page.frontmatter.status.title}
          </h2>
          <div>{page.frontmatter.status.description}</div>
        </div>
      </section>
      <section className='section volunteerInfo'>
        <div className='container'>
          <h2 className='volunteerInfo-title'>
            {page.frontmatter.contact.title}
          </h2>
          <div>{page.frontmatter.contact.description}</div>
        </div>
      </section>
    </article>
  )
}

const volunteerPage = ({ data }) => {
  const { markdownRemark: page, footerData, navbarData } = data
  const {
    frontmatter: {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    },
  } = page

  return (
    <Layout footerData={footerData} navbarData={navbarData}>
      <Helmet>
        <meta name='title' content={seoTitle} />
        <meta name='description' content={seoDescription} />
        <title>{browserTitle}</title>
      </Helmet>
      <VolunteerPageTemplate page={{ ...page, bodyIsMarkdown: false }} />
    </Layout>
  )
}

volunteerPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default volunteerPage

export const volunteerPageQuery = graphql`
  query volunteerPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        whatWeDo {
          title
          description
        }
        impact {
          title
          description
        }
        groupDynamic {
          title
          description
        }
        qualifications {
          title
          description
        }
        timeExpectations {
          title
          description
        }
        status {
          title
          description
        }
        contact {
          title
          description
        }
        seo {
          browserTitle
          title
          description
        }
      }
    }
    ...LayoutFragment
  }
`
