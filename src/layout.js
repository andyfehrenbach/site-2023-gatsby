import * as React from 'react';
import { useEffect } from 'react';
import Head from './head';

import '../src/styles/index.scss';

export default function Layout({ children, title = false, description = false, path = false }) {
  // const colors = [`colors-1`, `colors-2`, `colors-3`];
  // const randomColor = colors[Math.floor(Math.random() * colors.length)];

  useEffect(() => window.scrollTo(0, 0), []);
  useEffect(() => {
    window.addEventListener(
      'scroll',
      () => {
        document.body.style.setProperty('--scroll', window.pageYOffset.toFixed(1));
      },
      false
    );
  });

  return (
    <>
      <Head title={title} description={description} path={path} />
      <div className='colors-2'>
        <div> {children} </div>
      </div>
    </>
  );
}
