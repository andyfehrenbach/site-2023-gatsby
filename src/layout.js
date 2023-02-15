import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Head from './head';

import '../src/styles/index.scss';

export default function Layout({ children, title = false, description = false, path = false }) {

  return (
    <>
      <Head title={title} description={description} path={path} />
      <main> {children} </main>
    </>
  );
}
