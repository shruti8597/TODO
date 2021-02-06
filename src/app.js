import React, { useState } from 'react';
// import './index.css';

export default function () {
    const [todos, setTodo] = useState([]);
    const [buckets, setBucket] = useState([]);

    let addBucket = e => {
        let newBuckets = [...buckets];
        newBuckets.push({ name: "nameBucket" });
        setBucket(newBuckets);
    }

    return (
        <>
            <h1>Buckets</h1>
            {buckets.map(_ =>
                <div>{_.name}</div>)}
            <button onClick={addBucket}>ADD BUCKET</button>
            <h1>Todo</h1>
            {todos.map(_ =>
                <div>{_.name}</div>)}
        </>
    )
}
