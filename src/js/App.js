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
            inputValue: parseInt(this.state.inputValue + value, 10),
        }));
        console.log(typeof this.state.inputValue);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4" />
                    <div className="col-md-4">
                        <InputArea inputValue={this.state.inputValue} />
                        <NumberButton numberButton={this.numberButton} />
                        <Actions />
                    </div>
                    <div className="col-md-4" />
                </div>
            </div>
        );
    }
}

export default App;
