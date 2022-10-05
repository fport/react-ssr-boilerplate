import React, { useState } from 'react'

export const Counter = () => {
    const [ count, setCount ] = useState(0)

    return (
        <>
            Clicked: {count}
            <button onClick={() => setCount( count + 1)}>Click</button>
        </>
    )
}
