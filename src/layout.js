import * as React from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Head from './head';

import '../src/styles/index.scss';

gsap.registerPlugin(ScrollTrigger);
const { useLayoutEffect, useRef } = React;

export default function Layout({ children, title = false, description = false, path = false, className }) {
  const main = useRef();

  useLayoutEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        scrub: 1
      }
    });

    let textTl = gsap.timeline({

    });
    let ctx = gsap.context(() => {
      // use scoped selectors
      tl.to(['.img-overlay', '.header', '.portfolio-page', '.portfolio-page-header'], {
        backgroundColor: '#f0e7df'
      }).to(
        '.change-color',
        {
          color: '#f0e7df'
        },
        0
      );

      textTl
        .from(
          '.heading-1',
          {
            y: '0.8em',
            duration: 1.3,
            ease: 'power4.out',
            stagger: { amount: 1 }
          },
          0
        )
        .from(
          '.heading-1',
          {
            opacity: 0,
            duration: 2,
            stagger: { amount: 1.2 }
          }, 0.6);
    }, main);


    return () => ctx.revert();
  }, []);

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Head title={title} description={description} path={path} />
      <div ref={main} className={`colors-2 ${className}`}>
        <div> {children} </div>
      </div>
    </>
  );
}
