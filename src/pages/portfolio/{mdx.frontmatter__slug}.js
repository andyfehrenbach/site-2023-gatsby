import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../../layout';
import Logo from '../../logo';

export default function ProjectLayout({ children, pageContext }) {
  const { title, description, client, year, slug, workingArrangement } = pageContext.frontmatter;

  const data = useStaticQuery(graphql`
    query LinkQuery {
      allMdx {
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
        <h1 className='project-title-large'>{title}</h1>
        <header className='portfolio-page-header'>
          <div className='portfolio-page-header-wrapper'>
            <div className='logo-wrapper ml4'>
              <Logo className={`u-color-black ml1`}></Logo>
            </div>
            <div className='flex project-detail-wrapper pt1'>
              <div className='project-detail'>
                <h2 className='project-title-small'>{title}/</h2>
              </div>
              <div className='project-detail'>
                <h3 className='project-details-label'>Timeframe</h3>
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
          <div className='relative'></div>
          <section className='Content'>{children}</section>
        </main>
        <nav>
          <h2 className='work'>More Work:</h2>
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <Link to={`/portfolio/${link.frontmatter.slug}`}>{link.frontmatter.title}</Link>
              </li>
            ))}
          </ul>

          <Link to='/'>&larr; Back</Link>
        </nav>
      </div>
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
    </Layout>
  );
}
