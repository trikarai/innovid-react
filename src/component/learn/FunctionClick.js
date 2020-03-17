import React from 'react'

export default function FunctionClick() {

    function clickHandler() {
        alert('Buttton CLicked')
    }

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}
