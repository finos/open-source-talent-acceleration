import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Feature from '../components/feature';
import { features } from '../components/feature-config';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className={classnames('hero--subtitle')}>{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <div className="container">
          <h1>Getting Started</h1>
          <p>Welcome to the Open Source Talent Acceleration (OSTA) SIG portal of the
FINOS - an independent, non-profit membership organization
whose mission is unite the financial services industry to
collaboratively build open technologies and standards that
enhance profitability, improve resilience, and accelerate
innovation.</p>

          <p>The financial services industry faces significant challenges in attracting and retaining broad
talent, especially in the open-source domain. By focusing on talent development and identifying
best practices/upskilling initiatives and events, we aim to provide actionable pathways for
newcomers and mid-career professionals to nurture and drive continuous growth; bridge the skill
gap and optimize the impact of open-source collaboration for FSIs.</p>

          <p>Our mission is to
 Contribute to FINOS’ Open Source Readiness (OSR) best practices for creating nurturing
open-source environments and collaborations which improve retention and results
 Organize upskilling events/’on-ramping’ workshops for newcomers and mid-career
professionals in concert with FINOS/Linux Foundation Training and Certification 
 Provide networking opportunities to drive professional connections and continuous
growth  
 Aid FINOS members and the FS Community in attracting &amp; retaining talent to accelerate
their open-source priorities
 Ensure that advancing accessibility and broad talent development are key pillars for all
activities undertaken by the SIG</p>

          <p>By creating actionable pathways and amplifying talent-focused collaboration, the
OSTA SIG helps bridge critical skills gaps and unlock the full potential of open-
source in financial services.
Whether you&#39;re a seasoned contributor or a newcomer to the open-source community, the
OSTA SIG is here to support you and your company’s talent development journey.
Join us in building programs, contributing to best practices, and collaborate with a
vibrant community committed to advancing inclusive, high-impact open source FS
ecosystems.
�� Join Us in Accelerating Open Source Talent!
Join our Monthly Calls here</p>


        </div>
      </main>
    </Layout>
  );
}

export default Home;
