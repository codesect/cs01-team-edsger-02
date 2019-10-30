import React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';

function NotFoundPage() {
  return (
    <Layout>
      <Seo title="404: Not Found" />
      <h1>Oops, Page Not Found...</h1>
    </Layout>
  );
}

export default NotFoundPage;
