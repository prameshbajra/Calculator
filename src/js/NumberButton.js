import React from 'react';

const NumberButton = () => {
    buttonhandler = (e) => {

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
