import React from 'react';

const Actions = (props) => {
    const buttonHandler = (e) => {
        props.actionsButton(e.target.value);
    };
    return (
        <div>
            <input type="button" value="backspace" onClick={buttonHandler} />
            <input type="button" value="clear all" onClick={buttonHandler} />
        </div>
    );
};

export default Actions;
