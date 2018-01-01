import React from 'react';

const NumberButton = (props) => {
    const buttonhandler = () => {
        props.numberButton(1);
    };
    return (
        <div>
            <button
                name="one"
                onClick={buttonhandler}
            >1
            </button>
            <button name="two">2</button>
        </div>
    );
};

export default NumberButton;
