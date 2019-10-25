import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

function IndexPage() {
  return (
    <Layout>
      <Seo title="Home" />
      <div>
        <h1>Home page</h1>
      </div>
    </Layout>
  );
}

export default IndexPage;
