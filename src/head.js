import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default function Head() {

  const title = 'Andy Fehrenbach'
  const description = 'UI designer and developer'

  return (
    <Helmet>
      <meta charSet='UTF-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content={description} />
      {/* <link rel="icon" type="image/png" href="favicon.png" sizes="32x32" /> */}
      {/* <link rel="icon" type="image/png" href="favicon-16.png" sizes="16x16" /> */}
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      <link href='https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap' rel='stylesheet' />
      <title>{title}</title>
      <script src='https://unpkg.com/website-carbon-badges@1.1.3/b.min.js' defer></script>
    </Helmet>
  );
}
