import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    // eslint-disable-next-line react/require-render-return
    render() {

        return (this.state.isLoggedIn ? <div>Welcome tri </div> :
            <div>Welcome Guest</div>)

        // return (this.state.isLoggedIn && <div>Welcome tri </div>)    

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Tri</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }
        // return message

        // if (this.state.isLoggedIn) {
        //     return (<div>Welcome Tri</div>)
        // }
        // else {
        //     return (<div>Welcome Guest</div>)
        // }
    }
}

export default UserGreeting
