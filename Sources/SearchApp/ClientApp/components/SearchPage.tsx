import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import ResultList from './ResultList';
import SearchBar from './SearchBar';
import QueryResult from '../interfaces/QueryItem'

interface SearchPageState {
    results: QueryResult[];
}

export class SearchPage extends React.Component<RouteComponentProps<{}>, SearchPageState> {
    constructor() {
        super();

        this.state = {
            results: []
        };

        this.search = this.search.bind(this);
    }

    public render() {
        return <div>
            <h1>Search</h1>
            <SearchBar onClick={this.search} />
            <ResultList items={this.state.results} />
        </div>;
    }

    private search(query: string): void {
        let url = `/api/Search?query=${query}`;

        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({
                results: data
            }));
    }
}