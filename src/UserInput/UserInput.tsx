import * as React from "react";
import {ChangeEventHandler} from "react";
import './UserInput.css';


export interface UserInputProps {
    userNameChanged: ChangeEventHandler;
    initValue: string;
}

export class UserInput extends React.Component<UserInputProps, {}> {
    render() {
        return <input className="UserInput" value={this.props.initValue} onChange={this.props.userNameChanged}/>;
    }
}
