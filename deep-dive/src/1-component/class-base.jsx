import { Component } from "react";

class Button extends Component{
    render(){
        console.log(this.context)
        return (
            <button>hello</button>
        )
    }
}

export default Button