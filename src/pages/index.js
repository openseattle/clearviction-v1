import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/Layout'
import CustomLink from '../components/CustomLink'
import '../styles/home.scss'

export const HomePageTemplate = ({ home }) => {
  return (
    <>
      <section className='header'>
        <div className='header-container  container'>
          {home.headerImage && (
            <img
              className='header-image'
              src={home.headerImage.image}
              alt={home.headerImage.imageAlt}
            />
          )}
          <p className='header-tagline'>
            <span className='header-taglinePart'>{home.title}</span>
          </p>
        </div>
      </section>
      <section className='description section'>
        <div className='description-container  container'>
          <p className='description-title'>{home.titleDescription}</p>
        </div>
      </section>
      <section className='ctaBlock'>
        <CustomLink
          linkType={home.callToActions.firstCTA.linkType}
          linkURL={home.callToActions.firstCTA.linkURL}
          className='ctaBlock-pattern  ctaBlock-pattern--first'
        >
          <div className='ctaBlock-cta'>
            <span className='ctaBlock-ctaHeading'>
              {home.callToActions.firstCTA.heading}
            </span>
            <p className='ctaBlock-ctaDescription'>
              {home.callToActions.firstCTA.subHeading}
            </p>
          </div>
        </CustomLink>
        <CustomLink
          linkType={home.callToActions.secondCTA.linkType}
          linkURL={home.callToActions.secondCTA.linkURL}
          className='ctaBlock-pattern  ctaBlock-pattern--second'
        >
          <div className='ctaBlock-cta'>
            <span className='ctaBlock-ctaHeading'>
              {home.callToActions.secondCTA.heading}
            </span>
            <p className='ctaBlock-ctaDescription'>
              {home.callToActions.secondCTA.subHeading}
            </p>
          </div>
        </CustomLink>
      </section>
    </>
  )
}

class HomePage extends React.Component {
  render() {
    const { data } = this.props
    const {
      data: { footerData, navbarData },
    } = this.props
    const { frontmatter: home } = data.homePageData.edges[0].node
    const {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    } = home
    return (
      <Layout footerData={footerData} navbarData={navbarData}>
        <Helmet>
          <meta name='title' content={seoTitle} />
          <meta name='description' content={seoDescription} />
          <title>{browserTitle}</title>
        </Helmet>
        <HomePageTemplate home={home} />
      </Layout>
    )
  }
}

HomePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query HomePageQuery {
    ...LayoutFragment
    homePageData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "home-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            titleDescription
            headerImage {
              image
              imageAlt
            }
            callToActions {
              firstCTA {
                heading
                subHeading
                linkType
                linkURL
              }
              secondCTA {
                heading
                subHeading
                linkType
                linkURL
              }
            }
            seo {
              browserTitle
              title
              description
            }
          }
        }
      }
    }
  }
`
