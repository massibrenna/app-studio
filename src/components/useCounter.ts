
import React, { useState, useEffect, createContext } from 'react';
const useCounter = (initialVal:number = 0) => {

    const [state, setState] = useState<number>(initialVal);

    const onIncrement = () => {
        setState( (prev: number) => prev+1);
    }
    const onDecrement = () => {
        setState( (prev: number) => prev-1);
    }
    const onReset = () => {
        setState( (prev: number) => initialVal);
    }

    return [state, onIncrement, onDecrement];

}

export default useCounter;