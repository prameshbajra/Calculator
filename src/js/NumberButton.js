import React from 'react';

const NumberButton = (props) => {
    const buttonhandler = (e) => {
        props.numberButton(e.target.value);
    };
    return (
        <div>
            <hr />
            <div className="btn-group btn-group-justified" role="group" aria-label="...">
                <div className="btn-group" role="group">
                    <input type="button" value="1" className="btn btn-lg btn-default" onClick={buttonhandler} />
                </div>
                <div className="btn-group" role="group">
                    <input type="button" value="2" className="btn btn-lg btn-default" onClick={buttonhandler} />
                </div>
                <div className="btn-group" role="group">
                    <input type="button" value="3" className="btn btn-lg btn-default" onClick={buttonhandler} />
                </div>
            </div>
            <div className="btn-group btn-group-justified" role="group" aria-label="...">
                <div className="btn-group" role="group">
                    <input type="button" value="4" className="btn btn-lg btn-default" onClick={buttonhandler} />
                </div>
                <div className="btn-group" role="group">
                    <input type="button" value="5" className="btn btn-lg btn-default" onClick={buttonhandler} />
                </div>
                <div className="btn-group" role="group">
                    <input type="button" value="6" className="btn btn-lg btn-default" onClick={buttonhandler} />
                </div>
            </div>
            <div className="btn-group btn-group-justified" role="group" aria-label="...">
                <div className="btn-group" role="group">
                    <input type="button" value="7" className="btn btn-lg btn-default" onClick={buttonhandler} />
                </div>
                <div className="btn-group" role="group">
                    <input type="button" value="8" className="btn btn-lg btn-default" onClick={buttonhandler} />
                </div>
                <div className="btn-group" role="group">
                    <input type="button" value="9" className="btn btn-lg btn-default" onClick={buttonhandler} />
                </div>
            </div>
            <div className="btn-group btn-group-justified" role="group" aria-label="...">
                <div className="btn-group" role="group" />
                <div className="btn-group" role="group">
                    <input type="button" value="0" className="btn btn-lg btn-default" onClick={buttonhandler} />
                </div>
                <div className="btn-group" role="group" />
            </div>
        </div>
    );
};

export default NumberButton;
