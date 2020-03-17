import React from 'react'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    const NameList = names.map((name)=> <h2>{name}</h2>)
    return (
        <div>
            {NameList}
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}
        </div>
    )
}

export default NameList
