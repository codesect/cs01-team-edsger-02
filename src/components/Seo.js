import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function Seo({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            title
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        { name: 'description', content: metaDescription },
        { property: 'og:title', content: title },
        { property: 'og:description', content: metaDescription },
        { property: 'og:type', content: 'website' },
        { property: 'twitter:card', content: 'summary' },
        { property: 'twitter:creator', content: site.siteMetadata.author },
        { property: 'twitter:title', content: title },
        { property: 'twitter:description', content: metaDescription },
      ].concat(meta)}
    />
  );
}

Seo.defaultProps = {
  description: '',
  lang: 'en',
  meta: [],
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default Seo;
