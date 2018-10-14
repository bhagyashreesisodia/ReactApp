import * as React from 'react';
import './CounterControl.css';

const counterControl = (props : any) => (
    <div className="CounterControl" onClick={props.clicked}>
        {props.label}
    </div>
);

export default counterControl;