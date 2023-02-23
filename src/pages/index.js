import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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
      <header className='fixed-wrapper'>
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
              <h1 className='stylized-tagline blurred'>
                <span className='heading-2 u-fadein u-delay-1'>I am a</span>
                <hr className='u-fadein u-delay-1 mt3' />
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
              </div>
            </section>
            <section className='credits'>
              <div className='u-flex u-noWrap'>
                <div className='credits-wrapper'>
                  <p>Designed from scratch and built on&nbsp;
                    <a className='link' href='https://www.gatsbyjs.org/' target='_blank' rel='noreferrer'>Gatsby</a>
                  </p>
                  <p>
                    Images via &nbsp;
                    <a className='link touch-link' href='https://unsplash.com/'>
                      Unsplash
                    </a>
                    , bitmapped by me
                  </p>
                  <p>
                    Typeset in&nbsp;
                    <a className='link touch-link' href='https://fonts.google.com/specimen/Bebas+Neue?query=bebas#styles'>
                      Bebas Neue
                    </a> and&nbsp;
                    <a className='link touch-link' href='https://www.fontshare.com/fonts/zodiak'>
                      Zodiak</a>
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
