import React, {ChangeEvent} from 'react';
import './App.css';
import {ValidatonComponent} from "./ValidatonComponent/ValidatonComponent";
import {ChartComponent} from "./ChartComponent/ChartComponent";

interface AppState {
  textLength: number;
  letterList: string[];
}

export class App extends React.Component<{}, AppState> {

  state: AppState = {textLength: 0, letterList: []};

  inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState(
        {textLength: event.target.value.length,
        letterList: event.target.value.split('')}
        )
  };

    removeLetter = (index: number) => {
        const newLetterList =  [ ...this.state.letterList];
        newLetterList.splice(index, 1);

        this.setState(
            {textLength: newLetterList.length,
                letterList: newLetterList}
        )
    };

  render() {

    const chartConponentList = this.state.letterList.map( (actLetter: string, actIndex: number) =>
        <ChartComponent letter={actLetter} removeLetter={this.removeLetter} index={actIndex}></ChartComponent>);

    return (
        <div className="App">
            <input onChange={this.inputChangeHandler} value={this.state.letterList.join('')}/>
            <p>
                {this.state.textLength}
            </p>
            <ValidatonComponent textLength={this.state.textLength}></ValidatonComponent>

            {chartConponentList}
        </div>
    );
  }
}
