import React from 'react';

export class Child extends React.Component { 
    render() {
        const { count, increment, decrement } = this.props;
        return (
            <>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            </>
        )
    }

}

export default Child;