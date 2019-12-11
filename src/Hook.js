import React, { useState, useEffect } from "react";
import axios from "axios";

const Hook = () => {
    const [counter, setCounter] = useState(1);
    const [data, setData] = useState(null);

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/todos/${counter}`)
            .then(resp => setData(resp.data));
    }, [counter]);

    const onClickHandler = () => {
        setCounter(count => count + 1);
    };

    return (
        <div>
            {data && (
                <div style={{ fontSize: "20px" }}>
                    {" "}
                    id:{data.id} | title: {data.title} | completed:{" "}
                    {data.completed.toString()}{" "}
                </div>
            )}
            <div>{counter}</div>
            <button onClick={onClickHandler}>Add</button>
        </div>
    );
};

export default Hook;
