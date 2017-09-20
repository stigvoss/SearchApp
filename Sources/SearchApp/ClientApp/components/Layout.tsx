import * as React from "react";

export interface ILayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<ILayoutProps, {}> {
    public render(): JSX.Element {
        return <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    {this.props.children}
                </div>
            </div>
        </div>;
    }
}
