import React, {MouseEvent} from "react";
import "./ChartComponent.css"

interface ChartComponentProps {
    letter: string
    removeLetter: (index: number) => void;
    index: number
}

export class ChartComponent extends React.Component<ChartComponentProps, {}> {

    onClickedHandler = (event: MouseEvent): void => {
        this.props.removeLetter(this.props.index);
    };

    render() {
      return (
            <div className="ChartComponent" onClick={this.onClickedHandler}>
                {this.props.letter}
            </div>
        );
    }
}
