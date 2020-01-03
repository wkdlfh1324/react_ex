import React, {Component} from 'react'

class Hello2 extends Component{

    constructor(){
        super()
        this.state = {count: 1}
    }

    plusClick = () => {
        console.log("CLICK")
        this.setState({count: ++ this.state.count})
    }

    minusClick = () => {
        console.log("CLICK")
        this.setState({count: -- this.state.count})
    }

    render() {
        return(
            <>
            <h2>{this.state.count}</h2>
            <button onClick= {this.plusClick}> + </button>
            <button onClick= {this.minusClick}> - </button>
            </>
        )
    }

}

export default Hello2