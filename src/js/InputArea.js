import React from 'react';

const InputArea = props => (
    <div>
        <input
            type="text"
            name="input"
            className="form-control"
            value={props.inputValue}
        />
    </div>
);

export default InputArea;
