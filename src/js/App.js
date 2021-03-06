import React, { Component } from 'react';

import InputArea from './InputArea';
import Actions from './Actions';
import NumberButton from './NumberButton';
import ResultArea from './ResultArea';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            result: '',
        };
    }
    numberButton = (value) => {
        this.setState(() => ({
            inputValue: this.state.inputValue + value,
        }));
    }
    actionsButton = (action) => {
        const prevValue = this.state.inputValue;
        switch (action) {
        case 'C':
            this.setState(() => ({
                inputValue: prevValue.slice(0, -1),
            }));
            break;
        case 'AC':
            this.setState(() => ({
                inputValue: '',
            }));
            break;
        case '+':
            if (prevValue[prevValue.length - 1] !== '+' && prevValue.length > 0) {
                this.setState(() => ({ inputValue: prevValue + action }));
            }
            break;
        case '-':
            if (prevValue[prevValue.length - 1] !== '-' && prevValue.length > 0) {
                this.setState(() => ({ inputValue: prevValue + action }));
            }
            break;
        case '/':
            if (prevValue[prevValue.length - 1] !== '/' && prevValue.length > 0) {
                this.setState(() => ({ inputValue: prevValue + action }));
            }
            break;
        case '*':
            if (prevValue[prevValue.length - 1] !== '*' && prevValue.length > 0) {
                this.setState(() => ({ inputValue: prevValue + action }));
            }
            break;
        case '=':
            // Do calculation part ...
            this.setState(() => ({ result: eval(this.state.inputValue) }));
            break;
        default: this.setState(() => ({ inputValue: '' }));
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h1 className="text-center">React Calculator</h1>
                    <br />
                    <div className="col-md-6 col-md-offset-3">
                        <InputArea inputValue={this.state.inputValue} />
                        <ResultArea result={this.state.result} />
                        <Actions actionsButton={this.actionsButton} />
                        <NumberButton numberButton={this.numberButton} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
