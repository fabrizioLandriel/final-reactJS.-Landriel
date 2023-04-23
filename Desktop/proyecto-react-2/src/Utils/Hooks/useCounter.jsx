import React from 'react'
import { useState } from 'react'

const useCounter = () => {
    const [counter, setCounter] = useState(0)

    const increment = ()=> {
        setCounter (counter + 1)
    }

    const decrement = ()=> {
        setCounter (counter - 1)
    }

    const reset = ()=> {
        setCounter (counter - counter) // 0
    }

    return { counter, increment, decrement, reset }
}


export default useCounter