import React from 'react';

const InputArea = props => (
    <div>
        <input
            type="text"
            name="input"
            value={props.inputValue}
        />
    </div>
);

export default InputArea;
