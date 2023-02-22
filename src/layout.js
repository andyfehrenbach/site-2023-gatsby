import * as React from 'react';
import Head from './head';

import '../src/styles/index.scss';

export default function Layout({ children, title = false, description = false, path = false }) {
  const colors = [`colors-1`, `colors-2`, `colors-3`, `colors-4`];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  window.addEventListener(
    'scroll',
    () => {
      document.body.style.setProperty('--scroll', window.pageYOffset.toFixed(1));
    },
    false
  );

  return (
    <>
      <Head title={title} description={description} path={path} />
      <div
        className={`u-bg--primary' ${randomColor}`}
      >
        <div> {children} </div>
      </div>
    </>
  );
}
