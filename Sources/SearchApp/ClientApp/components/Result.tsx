import * as React from 'react';
import QueryResult from '../interfaces/QueryItem'

interface ResultProperties {
    item: QueryResult;
}

class Result extends React.Component<ResultProperties, {}> {
    constructor() {
        super();
    }

    public render() {
        let result = this.props.item;

        return <div>
            <Title text={result.title} url={result.url} />
            <Digest text={result.digest} />
            <Source url={result.url} />
        </div>;
    }
}

interface DigestProperties {
    text: string;
}

class Digest extends React.Component<DigestProperties, {}> {
    constructor() {
        super();
    }

    public render() {
        return <p>{this.props.text}</p>;
    }
}

interface TitleProperties {
    text: string;
    url: string;
}

class Title extends React.Component<TitleProperties, {}> {
    constructor() {
        super();
    }

    public render() {
        return <h3><a href={this.props.url}>{this.props.text}</a></h3>;
    }
}

interface SourceProperties {
    url: string;
}

class Source extends React.Component<SourceProperties, {}> {
    constructor() {
        super();
    }

    public render() {
        return <em>{this.props.url}</em>;
    }
}

export default Result;