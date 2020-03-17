import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        alert('clicked class')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Class</button>
            </div>
        )
    }
}

export default ClassClick
