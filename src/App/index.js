import React, { Component } from 'react';
import Header from './Header/';
import Footer from './Footer/';
import SearchResults from './SearchResults/';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body{
    height: 100%;
    margin: 0;
  };`

class App extends Component {

  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <SearchResults />
        <Footer />
      </>
    );
  }
}

export default App;
