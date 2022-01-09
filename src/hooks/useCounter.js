import { useState } from "react";

export const useCounter = () => {
    const [counter, setCounter] = useState(10);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        setCounter(counter - 1);
    };

    return counter, increment, decrement;
};
