import React from 'react';

const InputArea = props => (
    <div className="input-group input-group-lg">
        <input
            type="text"
            name="input"
            id="input-result"
            className="form-control"
            placeholder="0"
            value={props.inputValue}
        />
    </div>
);

export default InputArea;
