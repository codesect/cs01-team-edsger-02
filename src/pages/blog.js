import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

function Blog({ data }) {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Seo title="Blog" />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          margin: '-0.5rem',
        }}
      >
        {posts.map(({ node }) => {
          return (
            <article
              key={node.fields.slug}
              style={{ flex: '1 0 320px', margin: '0.5rem' }}
            >
              <Link to={node.fields.slug}>
                <h2>{node.frontmatter.title}</h2>
                <Img
                  fluid={node.frontmatter.banner.childImageSharp.fluid}
                  alt=""
                />
              </Link>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </article>
          );
        })}
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostEntries {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "Do MMMM, YYYY")
            title
            description
            banner {
              childImageSharp {
                fluid(maxWidth: 320, maxHeight: 320, quality: 75) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Blog;
