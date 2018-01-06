import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../store/store';
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
        const storeInstance = store();
        return (
            <Provider store={storeInstance}>
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
            </Provider>
        );
    }
}

export default App;
