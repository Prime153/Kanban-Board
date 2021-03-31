import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyle from '../Theme/GlobalStyle';
import { theme } from '../Theme/MainTheme';

const MainTemplate = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.node,
};

MainTemplate.defaultProps = {
  children: PropTypes.node,
};

export default MainTemplate;
