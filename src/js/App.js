import React from 'react';

import InputArea from './InputArea';
import Actions from './Actions';
import NumberButton from './NumberButton';

const App = () => (
    <div className="container">
        <div className="row">
            <div className="col-md-4" />
            <div className="col-md-4">
                <InputArea />
                <NumberButton />
                <Actions />
            </div>
            <div className="col-md-4" />
        </div>
    </div>
);

export default App;
