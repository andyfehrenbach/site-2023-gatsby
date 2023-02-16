import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../../layout';

export default function ProjectLayout({ children, pageContext }) {
  const { title, description } = pageContext.frontmatter;
  return (
    <Layout title={title} description={description}>
      <div className="portfolio-page">
        {children}
      </div>
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
      <Link to='/'>&larr; Back</Link>
    </Layout>
  );
}
