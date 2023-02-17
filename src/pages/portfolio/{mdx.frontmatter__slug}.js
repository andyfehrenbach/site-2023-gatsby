import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../../layout';
import Logo from '../../logo';

export default function ProjectLayout({ children, pageContext }) {
  const { title, description, client, year, workingArrangement } = pageContext.frontmatter;
  return (
    <Layout title={title} description={description}>
      <div className="portfolio-page">
        <div className='portfolio-page-wrapper'>
          <h1 className='project-title-large'>{title}</h1>
          <header className='portfolio-page-header'>
            <div className="portfolio-page-header-wrapper">
              <Logo className={`u-color-black`}></Logo>
              <h2 className='project-title-small'>{title}/</h2>
              <div className='project-details'>
                <div>
                  <h3 className='project-details-label'>Timeframe</h3>
                  <p className='project-details-data'>{year}</p>
                </div>
                <div>
                  <h3 className='project-details-label'>Client</h3>
                  <p className='project-details-data'>{client}</p>
                </div>
                <div>
                  <h3 className='project-details-label'>Role</h3>
                  <p className='project-details-data'>{workingArrangement}</p>
                </div>
              </div>
            </div>
          </header>
          <section className='Content'>
            {/* <h2 className='project-tagline'>{description}</h2> */}
            {children}
          </section>
        </div>
        <Link to='/'>&larr; Back</Link>

      </div>
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
    </Layout>
  );
}
