import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Head from './head';

import '../src/styles/index.scss';

export default function Layout({ children, title = false, description = false, path = false }) {
  return (
    <>
      <Head title={title} description={description} path={path} />
      <div
        onLoad={setTimeout(function () {
          window.scrollTo(0, 0);
        }, 200)}
        className='u-bg--primary colors-2'
      >
        <header>
          <div className='logo u-fadein u-delay-4'>
            <a href='/' className='logo-type'>
              <span className='logo-color-span'>AF</span>
            </a>
          </div>
        </header>
        <main> {children} </main>
      </div>
    </>
  );
}
