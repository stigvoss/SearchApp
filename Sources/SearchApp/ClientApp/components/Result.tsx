import * as React from "react";
import QueryResult from "../interfaces/QueryItem";

interface IResultProperties {
    item: QueryResult;
}

class Result extends React.Component<IResultProperties, {}> {
    constructor() {
        super();
    }

    public render(): JSX.Element {
        const { title, digest, url } = this.props.item;

        return <div>
            <Title text={title} url={url} />
            <Digest text={digest} />
            <Source url={url} />
        </div>;
    }
}

interface IDigestProperties {
    text: string;
}

class Digest extends React.Component<IDigestProperties, {}> {
    constructor() {
        super();
    }

    public render(): JSX.Element {
        return <p>{this.props.text}</p>;
    }
}

interface ITitleProperties {
    text: string;
    url: string;
}

class Title extends React.Component<ITitleProperties, {}> {
    constructor() {
        super();
    }

    public render(): JSX.Element {
        return <h3><a href={this.props.url}>{this.props.text}</a></h3>;
    }
}

interface ISourceProperties {
    url: string;
}

class Source extends React.Component<ISourceProperties, {}> {
    constructor() {
        super();
    }

    public render(): JSX.Element {
        return <em>{this.props.url}</em>;
    }
}

export default Result;