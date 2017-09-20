import * as React from 'react';

interface SearchBarProperties {
    onClick: (value: string) => void;
}

interface SearchBarState {
    query: string;
}

class SearchBar extends React.Component<SearchBarProperties, SearchBarState> {
    constructor() {
        super();

        this.state = {
            query: ""
        };

        this.onChange = this.onChange.bind(this);
    }

    public render() {
        let onClick = this.props.onClick;
        let query = this.state.query;

        return <div className="input-group">
            <TextField onChange={this.onChange} value={query} />
            <Button query={query} onClick={onClick} />
        </div>;
    }

    private onChange(value: string) {
        this.setState({ query: value });
    }
}

interface TextFieldProperties {
    placeholder?: string;
    onChange: (value: string) => void;
    value: string;
}

class TextField extends React.Component<TextFieldProperties, {}> {
    private _placeholder = "Enter query text...";
    
    public render() {
        let placeholder = this.props.placeholder ? this.props.placeholder : this._placeholder;
        let value = this.props.value;

        return <input
            value={value}
            onChange={(e) => this.update(e.target.value)}
            type="text"
            placeholder={placeholder}
            className="form-control" />;
    }

    private update(value: string) {
        this.props.onChange(value);
    }
}

interface ButtonProperties extends SearchBarProperties {
    query: string;
}

class Button extends React.Component<ButtonProperties, {}> {
    public render() {
        let onClick = this.props.onClick;
        let query = this.props.query;

        return <span className="input-group-btn">
            <button onClick={(e) => onClick(query)} className="btn btn-primary">
                <span className="glyphicon glyphicon-search" />
            </button>
        </span>;
    }
}

export default SearchBar;
