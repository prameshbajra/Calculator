import React from 'react';

const Actions = (props) => {
    const buttonHandler = (e) => {
        props.actionsButton(e.target.value);
    };
    return (
        <div>
            <input type="button" value="C" onClick={buttonHandler} />
            <input type="button" value="AC" onClick={buttonHandler} />
            <input type="button" value="+" onClick={buttonHandler} />
            <input type="button" value="-" onClick={buttonHandler} />
            <input type="button" value="*" onClick={buttonHandler} />
            <input type="button" value="/" onClick={buttonHandler} />
            <input type="button" value="=" onClick={buttonHandler} />
        </div>
    );
};

export default Actions;
