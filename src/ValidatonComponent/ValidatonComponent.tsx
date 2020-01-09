import React from "react";

export const minLength = 5;

interface ValidatonComponentProps {
    textLength: number
}

export class ValidatonComponent extends React.Component<ValidatonComponentProps, {}> {


    render() {
        let result = null;

        if (this.props.textLength < minLength) {
            result = <span> Text too short </span>;
        } else {
            result = <span> Text long enough </span>;
        }
        return (
            <div>
                {result}
            </div>
        );
    }
}
