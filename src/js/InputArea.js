import React, { Component } from 'react';

class InputArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    name="input"
                    value={this.state.inputValue}
                />
            </div>
        );
    }
}

export default InputArea;
