import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import HTMLContent from '../components/Content'
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
      <section className='section  whatWeDo  volunteer-whatWeDo'>
        <div className='container  whatWeDo-container'>
          <h2 className='whatWeDo-title'>{page.frontmatter.whatWeDo.title}</h2>
          <div className=''>{page.frontmatter.whatWeDo.description}</div>
        </div>
      </section>
      <section className='section  socialValues  volunteer-socialValues'>
        <div className='container  socialValues-container'>
          <h2 className='socialValues-title'>
            {page.frontmatter.socialValues.title}
          </h2>
          <div className=''>{page.frontmatter.socialValues.description}</div>
        </div>
      </section>
      <section className='section  expectations  volunteer-expectations'>
        <div className='container  expectations-container'>
          <h2 className='expectations-title'>
            {page.frontmatter.expectations.title}
          </h2>
          <div className=''>{page.frontmatter.expectations.description}</div>
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
        socialValues {
          title
          description
        }
        expectations {
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
