import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

function Shop({ data }) {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Seo title="Shop" />
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
              style={{ flex: '0 0 320px', margin: '0.5rem' }}
            >
              <Link to={node.fields.slug}>
                <h2>{node.frontmatter.title}</h2>
                <Img
                  fluid={node.frontmatter.images[0].src.childImageSharp.fluid}
                  alt=""
                />
              </Link>
              <p>£{node.frontmatter.price.toFixed(2)}</p>
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
  query ShopItems {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/shop/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            images {
              src {
                childImageSharp {
                  fluid(maxWidth: 320, quality: 75) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            price
          }
        }
      }
    }
  }
`;

export default Shop;
