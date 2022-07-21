import React, { useEffect, useState, useCallback } from "react";

const MyCallBackHook = () => {
    const [message, setMessage] = useState("");
    const [count, setCount] = useState(0);

    const outputLog = useCallback(() => {
        console.log(message);},[message]);

    useEffect(() => {
        outputLog();
    }, [outputLog]);

    return (
        <div>
            <input 
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={() => setCount(count + 1)}>click me</button>
        </div>
    );
};

export default MyCallBackHook;