import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import HTMLContent from "../components/Content";
import "../styles/volunteer-page.scss";

export const VolunteerPageTemplate = props => {
  const { page } = props;

  return (
    <article className="volunteer">
      <div className="volunteer-container  container">
        <section className="volunteer-header">
          <div className="volunteer-titleWrapper">
            <h1 className="volunteer-title">{page.frontmatter.title}</h1>
          </div>
        </section>
        <section className="section">
          {/* The page.html is actually markdown when viewing the page from the netlify CMS,
              so we must use the ReactMarkdown component to parse the markdown in that case  */}
          {page.bodyIsMarkdown ? (
            <ReactMarkdown className="volunteer-description" source={page.html} />
          ) : (
            <HTMLContent className="volunteer-description" content={page.html} />
          )}
          <ul className="volunteer-gallery  galleryList">
            {page.frontmatter.gallery.map((galleryImage, index) => (
              <li key={index} className="galleryList-item">
                <img src={galleryImage.image} alt={galleryImage.imageAlt} />
              </li>
            ))}
          </ul>
        </section>
      </div>
      <section className="section  developerGroups  volunteer-developerGroups">
        <div className="container">
          <ReactMarkdown source={page.frontmatter.developerGroups} />
        </div>
      </section>
      <section className="section  organizers  volunteer-organizers">
        <div className="container  organizers-container">
          <h2 className="organizers-title">{page.frontmatter.organizers.title}</h2>
          <div className="">
            {page.frontmatter.organizers.description}
          </div>
        </div>
      </section>
    </article>
  );
};

const volunteerPage = ({ data }) => {
  const { markdownRemark: page, footerData, navbarData } = data;
  const {
    frontmatter: {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    },
  } = page;

  return (
    <Layout footerData={footerData} navbarData={navbarData}>
      <Helmet>
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <title>{browserTitle}</title>
      </Helmet>
      <VolunteerPageTemplate page={{ ...page, bodyIsMarkdown: false }} />
    </Layout>
  );
};

volunteerPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default volunteerPage;

export const volunteerPageQuery = graphql`
  query volunteerPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        gallery {
          image
          imageAlt
        }
        developerGroups
        organizers {
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
`;
