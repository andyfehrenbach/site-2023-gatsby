import * as React from 'react';
import { Helmet } from 'react-helmet';

export default function Head(props) {
  const title = props.title || 'Andy Fehrenbach';
  const description = props.description || 'UI designer and developer';

  return (
    <Helmet>
      <meta charSet='UTF-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content={description} />
      <link rel='stylesheet' href='https://unpkg.com/tachyons@4.9.0/css/tachyons.min.css'></link>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
      <link href='https://fonts.googleapis.com/css2?family=Bebas+Neue&display=block' rel='stylesheet' />
      <link href='https://api.fontshare.com/v2/css?f[]=zodiak&display=block' rel='stylesheet' />
      <title>{title}</title>
      <script src='https://unpkg.com/website-carbon-badges@1.1.3/b.min.js' defer></script>
    </Helmet>
  );
}
