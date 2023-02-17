import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../../layout';
import Logo from '../../logo';

export default function ProjectLayout({ children, pageContext }) {
  const { title, description, client, year, workingArrangement } = pageContext.frontmatter;
  return (
    <Layout title={title} description={description}>
      <div className='portfolio-page'>
        <header className='portfolio-page-header'>
          <div className='portfolio-page-header-wrapper'>
            <div className='logo-wrapper ml4'>
              <Logo className={`u-color-black ml1`}></Logo>
            </div>
            <h2 className='project-title-small'>{title}/</h2>
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
        </header>
        <main className='portfolio-page-main'>
          <div className='relative'>
            <h1 className='project-title-large'>{title}</h1>
          </div>
          <section className='Content'>{children}</section>
        </main>
        <Link to='/'>&larr; Back</Link>
      </div>
      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
    </Layout>
  );
}
