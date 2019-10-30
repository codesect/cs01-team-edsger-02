const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('./src/templates/BlogPost.js');
  const shopItemTemplate = path.resolve('./src/templates/ShopItem.js');
  const result = await graphql(`
    {
      posts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/blog/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
      shopItems: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/shop/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const blogPosts = result.data.posts.edges;

  blogPosts.forEach((post, index) => {
    const { slug } = post.node.fields;
    const previous =
      index === blogPosts.length - 1 ? null : blogPosts[index + 1].node;
    const next = index === 0 ? null : blogPosts[index - 1].node;

    createPage({
      path: slug,
      component: blogPostTemplate,
      context: {
        slug,
        previous,
        next,
      },
    });
  });

  result.data.shopItems.edges.forEach(post => {
    const { slug } = post.node.fields;

    createPage({
      path: slug,
      component: shopItemTemplate,
      context: {
        slug,
      },
    });
  });
};

exports.onCreateNode = async ({ actions, getNode, node }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const relativeFilePath = createFilePath({ getNode, node });
    let slug = relativeFilePath;

    if (node.fileAbsolutePath.includes('/content/blog/')) {
      slug = `/blog${relativeFilePath}`;
    } else if (node.fileAbsolutePath.includes('/content/shop/')) {
      slug = `/shop${relativeFilePath}`;
    }

    createNodeField({
      name: 'slug',
      node,
      value: slug,
    });
  }
};
