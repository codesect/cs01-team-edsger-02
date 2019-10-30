import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

function BlogPost({ data, pageContext }) {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  return (
    <Layout>
      <Seo title={post.frontmatter.title} />
      <article>
        <Img fluid={post.frontmatter.banner.childImageSharp.fluid} alt="" />
        <header style={{ margin: '2rem', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: '3rem',
              fontWeight: 400,
              margin: '1rem 0 0',
            }}
          >
            {post.frontmatter.title}
          </h2>
          <small>{post.frontmatter.date}</small>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          style={{ margin: 'auto', maxWidth: '680px' }}
        />
      </article>
      <nav>
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "Do MMMM, YYYY")
        description
        banner {
          childImageSharp {
            fluid(
              cropFocus: CENTER
              maxWidth: 720
              maxHeight: 240
              quality: 75
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default BlogPost;
