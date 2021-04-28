import React from 'react';

import './Person.css';

const person = ( props ) => {
    return (
        <div className="Person">
            <p >{props.name}</p>
            <input type="text" onChange={props.changed1} />
             <p>{props.password}</p>
            <input type="text" onChange={props.changed2}  />
            <button onClick={props.click}>Testing</button>
        </div>
    )
};

export default person;