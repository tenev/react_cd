import React, { useState,useContext } from 'react';
import {ThemeContext} from './App'

export default function  CounterHooks ({initialCount}) {
    const [count,setCount] = useState(initialCount)
    const theme = useContext(ThemeContext)

    return ( 
        <>
            {/* <button onClick={() => setState({count:state.count-1}) } >-</button> */}
            {/* BETTER - bec if we call it multiple times setState - only works once, so use: */}
            {/* <button onClick={() => setState(prevState => {return {count:prevState.count-1}}) } >-</button> */}
            {/* even better: */}
            <button style={theme} onClick={() => setCount(prevCount => prevCount -1 )} >-</button>
            

            {/* <span>{props.initialCount}</span> */}
            {/* <span>{state.count}</span> */}
            {/* just one variable, not whole obj in the state */}
            <span>{count}</span>
            {/* <button onClick={() => setState({count:state.count+1}) } >+</button> */}
            <button style={theme} onClick={() => setCount(prevCount => prevCount +1 )} >+ </button>

        </>

     );
}
 
