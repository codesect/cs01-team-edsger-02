import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

function ShopItem({ data }) {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <article>
        <header>
          <h2>{post.frontmatter.title}</h2>
        </header>
        <Img
          fluid={post.frontmatter.images[0].src.childImageSharp.fluid}
          alt=""
        />
        <p>£{post.frontmatter.price.toFixed(2)}</p>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <nav>
        <ul>
          <li>Related item I</li>
          <li>Related Item II</li>
          <li>Related Item III</li>
        </ul>
      </nav>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ShopItemBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        id
        title
        description
        images {
          src {
            childImageSharp {
              fluid(maxWidth: 720, quality: 75) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        price
      }
    }
  }
`;

export default ShopItem;
