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

    // grab whether or not the animation has played from session storage
    const hasAnimationPlayed = sessionStorage.getItem('hasAnimationPlayed');
    let tl = gsap.timeline({
      scrollTrigger: {
        scrub: 0.8
      }
    });
    let textTl = gsap.timeline({
      onComplete: function () {
        sessionStorage.setItem('hasAnimationPlayed', true);
      }
    });

      let ctx = gsap.context(() => {
        // all the containers that need to change background color on scroll
        tl.to(['.img-overlay', '.header', '.portfolio-page', '.portfolio-page-header', '.content-wrapper'], {
          backgroundColor: '#f0e7df'
        }).to(
          '.change-color',
          {
            color: '#f0e7df'
          },
          0
        ).to(
          '.bg-image',
          {
            x: '-10rem',
          }, 0
        );
        if (hasAnimationPlayed === 'false') {


          textTl
            .from('.header', {
              opacity: 0
            })
            .from(
              '.fadeUp',
              {
                y: '0.4em',
                duration: 1.5,
                ease: 'power2.out',
                stagger: {
                  amount: 1.7,
                  ease: 'power1.out'
                }
              },
              0
            )
            .from(
              '.fadeUp',
              {
                opacity: 0,
                duration: 1,
                stagger: {
                  amount: 1.7,
                  ease: 'power1.out'
                }
              },
              0.5
            )
            .fromTo(
              '.bg-image',
              {
                opacity: 0,
                scale: 1.2
              },
              {
                ease: 'power1.out',
                duration: 2.5,
                opacity: 1,
                scale: 1.3,
                xPercent: 5,
                yPercent: -15
              },
              '>-1'
            )
            .from(
              '.change-color',
              {
                opacity: 0,
                duration: 1
              },
              '>-1'
            );
        }
      }, main);

      return () => ctx.revert();

  }, []);

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <>
      <Head title={title} description={description} path={path} />
      <div ref={main} className={`colors-2 u-bg-color--primary ${className}`}>
        <div> {children} </div>
      </div>
    </>
  );
}
