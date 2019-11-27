import React from 'react';

import Layout from "../components/Layout";
import SEO from '../components/SEO';

export default function Blog() {
  return (
    <Layout title="Criando um blog com React e Gatsby">
      <SEO
        title="Criando um blog com React e Gatsby"
        description="Uma descrição legal"
      />
      <div dangerouslySetInnerHTML={{ __html: "<p>Lorem ipsum</p>" }} />
    </Layout>
  );
}
