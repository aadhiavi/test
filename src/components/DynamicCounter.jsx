import React, { useState, useEffect } from "react";

const DynamicCounter = ({limit}) => {
    const [count, setCount] = useState(0);
    // const limit = 100; // Set your limit here
    const intervalTime = 50; // Time interval in ms (100 ms)

    useEffect(() => {
        if (count < limit) {
            const intervalId = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, intervalTime);

            // Cleanup interval on component unmount or when limit is reached
            return () => clearInterval(intervalId);
        }
    }, [count]);

    return (
        count
    )
}

export default DynamicCounter