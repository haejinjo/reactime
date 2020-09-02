/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import React from 'react';
import Splash from '../components/splash';
import VisualState from '../components/visualState';
import Features from '../components/features';
import Team from '../components/team';
import Image from '../components/image';
import SEO from '../components/seo';
import demogif from '../images/MyMovie.gif';
import Footer from '../components/footer';

const styles = {
  reactGreen: '#62D6FB',
  lighterGreen: 'white',
  lightestGreen: '#BDD4DB',
  redCode: '#99A93A',
};

const IndexPage = () => (
  <>
    <Splash>
      <SEO title="Home" />
      <h1
        style={{
          fontFamily: 'Raleway',
          fontSize: '1.5rem',
          fontWeight: '500',
          letterSpacing: '2px',
          color: styles.reactGreen,
          margin: '60px 0 50px 0',
          textAlign: 'center',
        }}
      >
      </h1>
      <div style={{ maxWidth: '300px', marginBottom: '50px' }}>
        <Image />
      </div>
      <p
        style={{
          fontFamily: 'Raleway',
          textAlign: 'center',
          color: styles.lighterGreen,
        }}
      >
        The
        {' '}
        <strong>only</strong>
        {' '}
time-travel debugging tool you need to develop
        your React application by tracking, visualizing, and reverting state
        changes!
      </p>
      <p
        style={{
          fontFamily: 'Raleway',
          textAlign: 'center',
          color: styles.lighterGreen,
        }}
      >
        Nominated for the Productivity Booster award at
        {' '}
        <a
          style={{
            textDecoration: 'none',
            color: styles.redCode,
          }}
          href="https://osawards.com/react/"
        >
React Open Source Awards 2020
        </a>
!
      </p>

      <p
        style={{
          fontFamily: 'Raleway',
          textAlign: 'center',
          color: styles.lighterGreen,
        }}
      >

     
      <a
          style={{
            textDecoration: 'none',
            color: '#62D6FB',
          }}
          href="https://chrome.google.com/webstore/detail/reactime/cgibknllccemdnfhfpmjhffpjfeidjga?hl=en-US"
          >
             <b> Download Now</b>
          </a>
          {' '}to get started debugging your applicaiton.
          </p>
      <p
        style={{
          fontFamily: 'Raleway',
          fontSize: '16px',
          color: styles.lighterGreen,
          textAlign: 'center',
          marginBottom: '50px',
        }}
      >
        Interested in
        {' '}
        <span>
          <a
            style={{ textDecoration: 'none', color: styles.redCode }}
            href="https://github.com/open-source-labs/reactime"
          >
            contributing?
          </a>
        </span>
        {' '}
        Reactime is open-source: help make React state debugging easier!
      </p>

      Read more about what's new in Reactime
            {' '}
            <a
              style={{ textDecoration: 'none', color: '#62D6FB' }}
              href="https://tinyurl.com/reactimeMedium"
            >
              here
            </a>
           
    </Splash>
    <VisualState>
      <h2 style={{ textAlign: 'center' }}>
        <strong>STATE:</strong>
        {' '}
Track, Revert, Visualize
      </h2>
      <img src={demogif} alt="ReacTime Demo" />
    </VisualState>
    <Features>
      <h2>
        <strong>Features</strong>
      </h2>
      <h4
        style={{
          fontWeight: '400',
          fontSize: '13px',
          color: styles.lightestGreen,
          textAlign: 'center',
        }}
      >
        Visualizing, Recording, and Tracking
        {' '}
        <strong>STATE</strong>
        {' '}
has never
        been simpler.
      </h4>
    </Features>
   
    <Team>
      <h2 style={{ color: styles.reactGreen }}>
        <strong>Meet the Team</strong>
      </h2>
    </Team>
    <Footer />
  </>
);

export default IndexPage;
