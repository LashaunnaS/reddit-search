import { SRGrid, SearchBlock, SearchBar, Button, ListTable } from './SearchResultsStyle';
import React, { Component, Fragment } from 'react';

// variables to represent the API endpoint
const DEFAULT_QUERY = 'reddit';
const PATH_BASE = 'https://www.reddit.com/subreddits';
const PATH_SEARCH = '/search.json?';
const PATH_Q = 'q=';


class SearchResults extends Component {

    state = {
        searchTerm: DEFAULT_QUERY,
        listings: null,
        error: null,
        isLoaded: false,
    };

    componentDidMount = () => {
        const { searchTerm } = this.state;
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
        const { searchTerm } = this.state;
        e.preventDefault();
        this.fetchSearchTopStories(searchTerm)
    }

    render() {
        const { searchTerm, isLoaded } = this.state;

        return (
            <SRGrid>
                {!isLoaded ?
                    <div style={{ height: '84vh' }}>
                        <h1>Be with you shortly...</h1>
                    </div>
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
            </SRGrid>
        );
    }
}

const Search = ({ value, onChange, onSubmit, children }) =>
    <SearchBlock onSubmit={onSubmit}>
        <SearchBar
            type="text"
            value={value}
            onChange={onChange}
        />
        <Button type="submit">
            {children}
        </Button>
    </SearchBlock>

const Table = ({ listings }) => {
    return (
        <ListTable>
            {listings.map(item => (
                <p key={item.data.id}>{item.data.title}</p>
            ))}
        </ListTable>
    )
}

export default SearchResults;
