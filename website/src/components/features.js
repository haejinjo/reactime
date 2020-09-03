/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable semi */
/* eslint-disable react/jsx-filename-extension */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import ZoomInGridElement from './zoomInGridElement';
// import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';

import './layout.css';

const styles = {
  reactGreen: '#427aa1', // h4 font-color #072D2B
  lightestGreen: '#BDD4DB',
  gray: '#a3a3a3',

  iconBColor: '#242529' // feature icon bg #E4C2B3
};

const StyledWrapper = styled.div`
  @media only screen and (max-height: 570px) {
    margin-top: 100px;
  }
`;

const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 40px;
`;

const StyledGridElement = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  background: ${styles.iconBColor};
  padding: 20px;
  width: 395px;
  height: 120px;
  margin: 20px 10px 0px 10px;
  font-family: 'Raleway', sans-serif;
  border-radius: 5px;
  border: 1px solid rgba(184, 196, 194, 0.25);
  box-shadow: 2px 3px 4px 2px rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 480px) {
    width: 98%;
  }
  h4 {
    color: ${styles.reactGreen};
    margin-bottom: 10px;
    margin-top: 10px;
  }
  p {
    color: white;
    text-align: center;
    line-height: 20px;
    margin-bottom: 1px;
  }
  h6 {
    color: ${styles.gray};
    text-align: center;
    margin-bottom: 1px;
    font-weight: 400;
  }
`;
const Layout = ({ children }) => (
  <>
    <StyledWrapper>
      <StyledDiv>
        <StyledMain>
          {children}
          <Grid>
            <ZoomInGridElement className="feaStyle">
              <StyledGridElement>
                <h4>State Snapshot Text Display</h4>
                <p>See your application state in stylized, interactive JSON format.</p>
              </StyledGridElement>
            </ZoomInGridElement>

            <ZoomInGridElement className="feaStyle">
              <StyledGridElement>
                <h4>Components Map</h4>
                <p>Visualize relationships between components in a collapsible tree for a given snapshot.</p>
              </StyledGridElement>
            </ZoomInGridElement>

            <ZoomInGridElement className="feaStyle">
              <StyledGridElement>
                <h4>Time Travel Live Render</h4>
                <p>Simulate any state change from history in the DOM with a click of a button.</p>
              </StyledGridElement>
            </ZoomInGridElement>

            <ZoomInGridElement className="feaStyle">
              <StyledGridElement>
                <h4>Atom and Selector Data Flow</h4>
                <p>
                  Visualize the data flow from atoms to selectors to components.
  </p>
              </StyledGridElement>
            </ZoomInGridElement>

            <ZoomInGridElement className="feaStyle">
              <StyledGridElement>
                <h4>Snapshot History Display</h4>
                <p>
                  Monitor history as you time travel or make new changes to state.
              </p>
              </StyledGridElement>
            </ZoomInGridElement>

            <ZoomInGridElement className="feaStyle">
              <StyledGridElement>
                <h4>Components Performance</h4>
                <p>
                  Visualize the relative latency introduced by rerendering each component on state change.
</p>
              </StyledGridElement>
            </ZoomInGridElement>

            <ZoomInGridElement className="feaStyle">
              <StyledGridElement>
                <h4>Import, Export, and Persist</h4>
                <p>
                  Save your state history for future tests.<br />Keep your state
                changes on app reload.{' '}
                </p>
              </StyledGridElement>
            </ZoomInGridElement>
            <ZoomInGridElement className="feaStyle">
              <StyledGridElement>
                <h4>Try Reactime With Our Demos</h4>
                <p>
                  <a
                    style={{ textDecoration: 'none', color: '#99A93A' }}
                    href="https://joshua0308.github.io/calculator/"
                  >
                    Calculator
                </a>{' '}
                &amp;{' '}
                  <a
                    style={{ textDecoration: 'none', color: '#99A93A' }}
                    href="http://reactime-demo2.us-east-1.elasticbeanstalk.com/"
                  >
                    Bitcoin Price
                </a>
                .
              </p>
              </StyledGridElement>
            </ZoomInGridElement>
          </Grid>
          <h4
            style={{
              fontWeight: '400',
              fontSize: '13px',
              color: styles.lightestGreen,
              textAlign: 'center'
            }}
          >
            * Some features not available with every state managment solution.
          </h4>
        </StyledMain>
      </StyledDiv>
    </StyledWrapper>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
