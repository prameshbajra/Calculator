import React from 'react';

const ResultArea = props => (
    <div>
        <hr />
        <div className="text-center">
            <h3 className="display-3">{props.result ? props.result : '... Ready to Calculate ...'}</h3>
        </div>
        <hr />
    </div>
);

export default ResultArea;
