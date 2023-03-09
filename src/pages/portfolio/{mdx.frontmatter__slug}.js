import * as React from 'react';
// Gastby Stuff
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// Gsap Stuff
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

// Layout Stuff
import Layout from '../../layout';
import Logo from '../../logo';

const { useRef, useLayoutEffect } = React;
gsap.registerPlugin(ScrollTrigger);

export default function ProjectLayout({ children, pageContext }) {
  const { title, description, client, role, yearStart, yearEnd, workingArrangement } = pageContext.frontmatter;

  const data = useStaticQuery(graphql`
    query LinkQuery {
      allMdx(sort: { frontmatter: { linkOrder: ASC } }) {
        nodes {
          id
          frontmatter {
            slug
            title
          }
        }
      }
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

  const links = data.allMdx.nodes;
  const randomImage = data.allFile.nodes[Math.floor(Math.random() * data.allFile.nodes.length)];

  const portfolio = useRef();

  useLayoutEffect(() => {
    let portfolioTl = gsap.timeline({
      stagger: 1,
      scrollTrigger: {
        trigger: '.portfolio-page-main',
        start: 'bottom bottom',
        end: "+=4500",
        scrub: 0.4,
        // markers: true,
      }
    });

    let ctx = gsap.context(() => {
      portfolioTl
        .from('.footer', {
          y: '10rem',
          duration: 1.5,
          ease: 'power1.in',
        })
        .from('.home-link', {
          scale: 0,
          duration: 8.5
        });

    }, portfolio);
    return () => ctx.revert();
  }, []);

  return (
    <Layout title={title} description={description}>
      <div ref={portfolio} className='portfolio-page'>
        <div className='u-fadein'>
          <h1 className='project-title-large blurred animated-blur'>{title}</h1>
          <header className='portfolio-page-header'>
            <div className='portfolio-page-header-wrapper'>
              <div className='logo-wrapper ml4'>
                <Logo className='ml1 blurred'></Logo>
              </div>
              <div className='flex flex-wrap project-detail-wrapper pt1'>
                <div className='project-detail fadeUp mb3 mr-auto'>
                  <h2 className='project-title-small'>{title}
                    <sup className='project-year fadeUp'>{yearStart} — { yearEnd }</sup></h2>
                </div>
                <div className='flex mb3'>
                  <div className='project-detail fadeUp'>
                    <h3 className='project-details-label'>Client</h3>
                    <p className='project-details-data'>{client}</p>
                  </div>
                  <div className='project-detail fadeUp'>
                    <h3 className='project-details-label'>Role</h3>
                    <p className='project-details-data'>{ role }</p>
                  </div>
                  <div className='project-detail fadeUp'>
                    <h3 className='project-details-label'>Arrangement</h3>
                    <p className='project-details-data'>{workingArrangement}</p>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main className='portfolio-page-main'>
            <div className='sidebar-wrapper'>
              <nav className='sidebar'>
                <h2 className='work'>More Work:</h2>
                <ul className='mt4'>
                  {links.map((link) => (
                    <li key={link.id}>
                      <Link className='link' to={`/portfolio/${link.frontmatter.slug}`}>
                        {link.frontmatter.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link to='https://andy-fehrenbach-ps-2021.surge.sh/' className='link link-external'>
                      2020 portfolio
                    </Link>
                  </li>
                  <li>
                    <Link to='https://codepen.io/andyfehrenbach/pens/showcase' className='link link-external'>
                      Codepens
                    </Link>
                  </li>
                </ul>
              <div className='mt4 mr4'>
                <p className='u-textSerif i f6'>
                  This site uses various methods to create images with a very small file size. Images and video are the largest files served by websites, and the carbon footprint created by storing and serving them is larger than many people realize.
                </p>
              </div>
              </nav>
            </div>
            <section className='Content'>{children}</section>
          </main>
        </div>
        <div className='footer'>
          <div className='img-underlay absolute absolute--fill'>

          </div>
          <GatsbyImage className='curtain-image' image={getImage(randomImage)}></GatsbyImage>

          <div className='absolute absolute--fill flex'>
            <h1 className='home-link heading-2'>
              <a className='link' href='/'>
                Home
              </a>
            </h1>
          </div>
        </div>
      </div>
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
    </Layout>
  );
}
