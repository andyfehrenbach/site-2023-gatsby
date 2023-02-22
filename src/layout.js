import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Head from './head';

import '../src/styles/index.scss';

export default function Layout({ children, title = false, description = false, path = false }) {
  const colors = [`colors-1`, `colors-2`, `colors-3`, `colors-4`];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <>
      <Head title={title} description={description} path={path} />
      <div
        onLoad={setTimeout(function () {
          window.scrollTo(0, 0);
        }, 200)}
        className={`u-bg--primary' ${randomColor}`}
      >
        <div> {children} </div>
      </div>
    </>
  );
}
