import * as React from "react";

export interface UserOutputProps {
    username: string;
}

export class UserOutput extends React.Component<UserOutputProps, {}> {


    render() {
        const UserOutputStyles = {
            color: 'red'
        };

        return <div>
                    <p>usename: <span style={UserOutputStyles}>{this.props.username}</span></p>
                    <p>UserOutput</p>
                </div>;
    }
}
