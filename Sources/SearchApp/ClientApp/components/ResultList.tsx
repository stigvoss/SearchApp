import * as React from 'react';
import Result from './Result';
import QueryResult from '../interfaces/QueryItem'

interface ResultListProperties {
    items: QueryResult[];
}

class ResultList extends React.Component<ResultListProperties, {}> {
    constructor() {
        super();
    }

    public render() {
        let items = this.props.items;

        return <div>
            {items.map(item =>
                <Result item={item} />
            )}
        </div>;
    }
}

export default ResultList;