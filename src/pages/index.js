import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image';
import Layout from '../layout';
import Logo from '../logo';

export default function Home() {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      allFile(filter: { absolutePath: { regex: "/homepage/" } }) {
        nodes {
          id
          childImageSharp {
            gatsbyImageData(placeholder: NONE, pngOptions: { compressionSpeed: 10, quality: 1 }, quality: 1, formats: PNG)
          }
        }
      }
    }
  `);

  const randomImage = data.allFile.nodes[Math.floor(Math.random() * data.allFile.nodes.length)];

  return (
    <Layout>
      <header>
        <Logo className={'change-color'}></Logo>
      </header>
      <main className='page-home'>
        <div className='u-overlay u-flex'>
          <div className='u-posRelative'>
            <GatsbyImage className='bg-image' image={getImage(randomImage)}></GatsbyImage>
            <div className='u-overlay img-overlay'></div>
          </div>
        </div>
        <div className='u-flex'>
          <div className='header'>
            <section>
              <h1 className='stylized-tagline'>
                <span className='heading-2 u-fadein u-delay-1'>I am a</span>
                <hr className='u-fadein u-delay-1' />
                <span className='heading-1 u-fadein u-delay-2'>UI Designer</span>
                <span className='heading-1 u-fadein u-delay-3'>And</span>
                <span className='heading-1 u-fadein u-delay-4'>Developer</span>
                <hr className='u-fadein u-delay-4' />
                <span className='heading-1 u-fadein u-delay-5'>Focused On</span>
                <span className='heading-1 u-fadein u-delay-6'>Climate</span>
                <span className='heading-1 u-fadein u-delay-7'>Change</span>
                <hr className='u-fadein u-delay-7' />
              </h1>
              <p className='heading-2 stylized-tagline u-fadein u-delay-8'>My goal is to use my UI design and development skills to help a company that is making meaningful progress in the race to net zero emissions by 2050.</p>
              <hr className='u-fadein u-delay-8' />
              <p className='heading-2 stylized-tagline u-fadein u-delay-8'>I am interested in making sustainable, resource-light web applications that feature great design, engaging content, and interactivity.</p>
              <hr className='u-fadein u-delay-9' />
              <p style={{ marginBottom: 1 + 'rem' }} className='heading-3 stylized-tagline u-fadein u-delay-9'>
                <a href='index.html' className='link touch-link' id='refreshButton'>
                  Click here for something different, yet the same
                </a>
              </p>
              <p className='heading-3 u-block stylized-tagline u-fadein u-delay-9'>
                Want to get in touch? Message me on
                <a className='link touch-link' href='https://www.linkedin.com/in/andy-fehrenbach-95232a59/'>
                  LinkedIn
                </a>
                or
                <a className='link touch-link' href='https://twitter.com/AndyFehrenbach'>
                  Twitter
                </a>
              </p>
              <hr className='u-fadein u-delay-9' />
              <p className='heading-3'>portfolio:</p>
              <div className='portfolio'>
                <Link className='link touch-link heading-4' to='portfolio/naviguard'>
                  Naviguard
                </Link>
                <Link className='link touch-link heading-4' to='portfolio/adel-design-system'>
                  ADEL Design System
                </Link>
                <Link className='link touch-link heading-4' to='portfolio/homi'>
                  HOMI
                </Link>
                <a className='link touch-link heading-4' target='_blank' rel='noreferrer' href='https://codepen.io/andyfehrenbach'>
                  Codepens
                </a>
              </div>
            </section>
            <section className='credits'>
              <div className='u-flex u-noWrap'>
                <div className='credits-wrapper'>
                  <p>This site is built from scratch!</p>
                  <p>
                    Images via
                    <a className='link touch-link' href='https://unsplash.com/'>
                      Unsplash
                    </a>
                    , bitmapped by me
                  </p>
                  <p>
                    Typeset in
                    <a className='link touch-link' href='https://fonts.google.com/specimen/Bebas+Neue?query=bebas#styles'>
                      Bebas Neue
                    </a>
                  </p>
                </div>
                <div style={{ marginLeft: 'auto' }} id='wcb' className='carbonbadge'></div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
