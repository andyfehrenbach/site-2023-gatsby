import * as React from 'react'
import { Helmet } from 'react-helmet'

export default function Head() {
  return (
    <Helmet>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="favicon.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="favicon-16.png" sizes="16x16" />
        <link rel="stylesheet" type="text/css" href="styles/index.scss" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        <title>Andy Fehrenbach | User interface developer</title>
    </Helmet>
  )

}