import React, { useState } from 'react'

import './styles'

export const App = ({}) => {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>Hello SSR</h1>
            <div>
                Clicked: {count}
                <button onClick={() => setCount( count + 1)}>Click</button>
            </div>
        </>
    )
}
