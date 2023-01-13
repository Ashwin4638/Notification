import React from 'react';
import Child from './Child';

export class Parent extends React.Component { 

    state = {
        count: 0
    }

    onHandleIncrement = () => {
        this.setState((prevCount) => ({
            count: prevCount.count + 1
        }))
    }

    onHandleDecrement = () => {
        this.setState((prevCount) => ({
            count: prevCount.count - 1
        }))
    }

    // onHandleDecrement = () => {
    //     this.setState((prevCount) => {
    //         if (prevCount > 0) {
    //             return prevCount.count - 1
    //         }else {
    //             return prevCount.count = 0
    //         }
    //     })
    // }
    

    render() {
        const { count } = this.state;
        return (
            <>
            <Child count= {count}increment = { this.onHandleIncrement} decrement={ this.onHandleDecrement}/>
            </>
        )
    }

}

export default Parent;