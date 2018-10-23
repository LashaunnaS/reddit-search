import React, { Component, Fragment } from 'react';
import Header from './Header/';
import Footer from './Footer/';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body{
    height: 100%;
    margin: 0;
  };`


// variables to represent the API endpoint
const DEFAULT_QUERY = 'reddit';
const PATH_BASE = 'https://www.reddit.com/subreddits';
const PATH_SEARCH = '/search.json?';
const PATH_Q = 'q=';


class App extends Component {

  state = {
    // searchKey: '',
    searchTerm: DEFAULT_QUERY,
    listings: null,
    error: null,
    isLoaded: false,
  };

  componentDidMount = () => {
    const { searchTerm } = this.state;
    // this.setState({ searchKey: searchTerm });
    this.fetchSearchTopStories(searchTerm);
  }

  fetchSearchTopStories = (searchTerm) => {
    fetch(`${PATH_BASE}${PATH_SEARCH}${PATH_Q}${searchTerm}`)
      .then(response => response.json())
      .then(item => this.setState({
        isLoaded: true,
        listings: item.data.children,
      }))
      .catch(error => this.setState({ error }));
  }

  onSearchChange = event => this.setState({ searchTerm: event.target.value })

  onSearchSubmit = e => {
    const { searchTerm, searchKey } = this.state;
    e.preventDefault();
    // this.setState({ searchKey: searchTerm })
    this.fetchSearchTopStories(searchTerm)
  }

  render() {
    const { searchTerm, isLoaded } = this.state;

    return (
      <Fragment>
        <GlobalStyle />
        <Header />
        {!isLoaded ?
          <h1>Be with you shortly...</h1>
          :
          <Fragment>
            <Search
              value={searchTerm}
              onChange={this.onSearchChange}
              onSubmit={this.onSearchSubmit}
            >
              Search
            </Search>
            <Table listings={this.state.listings} />
          </Fragment>
        }
        <Footer />
      </Fragment>
    );
  }
}

const Search = ({ value, onChange, onSubmit, children }) =>

  <form onSubmit={onSubmit}>
    <input
      type="text"
      value={value}
      onChange={onChange}
    />
    <button type="submit">
      {children}
    </button>
  </form>

const Table = ({ listings }) => {
  return (
    <div>
      {listings.map(item => (
        <p key={item.data.id}>{item.data.title}</p>
      ))}
    </div>
  )
}

export default App;
