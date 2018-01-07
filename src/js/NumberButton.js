import React from 'react';

const NumberButton = (props) => {
    const buttonhandler = (e) => {
        props.numberButton(e.target.value);
    };
    return (
        <div>
            <input type="button" value="1" onClick={buttonhandler} />
            <input type="button" value="2" onClick={buttonhandler} />
            <input type="button" value="3" onClick={buttonhandler} />
            <input type="button" value="4" onClick={buttonhandler} />
            <input type="button" value="5" onClick={buttonhandler} />
            <input type="button" value="6" onClick={buttonhandler} />
            <input type="button" value="7" onClick={buttonhandler} />
            <input type="button" value="8" onClick={buttonhandler} />
            <input type="button" value="9" onClick={buttonhandler} />
            <input type="button" value="0" onClick={buttonhandler} />
        </div>
    );
};

export default NumberButton;
