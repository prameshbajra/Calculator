import React, { Component } from 'react';

import InputArea from './InputArea';
import Actions from './Actions';
import NumberButton from './NumberButton';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
    }
    numberButton = (value) => {
        this.setState(() => ({
            inputValue: this.state.inputValue + value,
        }));
    }
    actionsButton = (action) => {
        const prevValue = this.state.inputValue;
        if (action === "backspace")
            this.setState(() => ({
                inputValue: prevValue.slice(0, -1),
            }));
        else {
            this.setState(() => {
                return {
                    inputValue: ""
                }
            });
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4" />
                    <div className="col-md-4">
                        <InputArea inputValue={this.state.inputValue} />
                        <NumberButton numberButton={this.numberButton} />
                        <Actions actionsButton={this.actionsButton} />
                    </div>
                    <div className="col-md-4" />
                </div>
            </div>
        );
    }
}

export default App;
