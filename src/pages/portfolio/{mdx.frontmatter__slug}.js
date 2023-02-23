import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../../layout';
import Logo from '../../logo';

export default function ProjectLayout({ children, pageContext }) {
  const { title, description, client, year, workingArrangement } = pageContext.frontmatter;

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
    }
  `);

  const links = data.allMdx.nodes;

  return (
    <Layout title={title} description={description}>
      <div className='portfolio-page'>
      <div className="u-fadein">
        <h1 className='project-title-large blurred'>{title}</h1>
        <header className='portfolio-page-header'>
          <div className='portfolio-page-header-wrapper'>
            <div className='logo-wrapper ml4'>
              <Logo className='ml1 blurred'></Logo>
            </div>
            <div className='flex project-detail-wrapper pt1'>
              <div className='project-detail'>
                <h2 className='project-title-small blurred'>{title}/</h2>
              </div>
              <div className='project-detail'>
                <h3 className='project-details-label'>Year</h3>
                <p className='project-details-data'>{year}</p>
              </div>
              <div className='project-detail'>
                <h3 className='project-details-label'>Client</h3>
                <p className='project-details-data'>{client}</p>
              </div>
              <div className='project-detail'>
                <h3 className='project-details-label'>Role</h3>
                <p className='project-details-data'>{workingArrangement}</p>
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
                    <Link className='link' to={`/portfolio/${link.frontmatter.slug}`}>{link.frontmatter.title}</Link>
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
            </nav>
          </div>
          <section className='Content'>
            {children}
            <h2 className='mt5'>
              <Link to='/'>&larr; Home</Link>
            </h2>
          </section>
        </main>
      </div>
      </div>
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
    </Layout>
  );
}
