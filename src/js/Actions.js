import React from 'react';

const Actions = (props) => {
    const buttonHandler = (e) => {
        props.actionsButton(e.target.value);
    };
    return (
        <div>
            <div className="btn-group btn-group-justified" role="group" aria-label="...">
                <div className="btn-group" role="group">
                    <input type="button" className="btn btn-default btn-lg" value="C" onClick={buttonHandler} />
                </div>
                <div className="btn-group" role="group">
                    <input type="button" className="btn btn-default btn-lg" value="AC" onClick={buttonHandler} />
                </div>
            </div>
            <div className="btn-group btn-group-justified" role="group" aria-label="...">
                <div className="btn-group" role="group">
                    <input type="button" className="btn btn-default btn-lg" value="+" onClick={buttonHandler} />
                </div>
                <div className="btn-group" role="group">
                    <input type="button" className="btn btn-default btn-lg" value="-" onClick={buttonHandler} />
                </div>
                <div className="btn-group" role="group">
                    <input type="button" className="btn btn-default btn-lg" value="*" onClick={buttonHandler} />
                </div>
                <div className="btn-group" role="group">
                    <input type="button" className="btn btn-default btn-lg" value="/" onClick={buttonHandler} />
                </div>
                <div className="btn-group" role="group">
                    <input type="button" className="btn btn-default btn-lg" value="=" onClick={buttonHandler} />
                </div>
            </div>
        </div>
    );
};

export default Actions;
