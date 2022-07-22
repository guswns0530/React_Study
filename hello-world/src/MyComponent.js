import React, { Component } from "react";

class MyComponent extends Component {
    id = 1;
    setId = (n) => {
        this.id = n;
    }

    printId = () => {
        console.log(this.id)
    }

    render() {
        return (
            <>
                <div>
                    {this.id}
                </div>
                <button onClick={() => {
                    this.setId(this.id  + 1)
                }}>추가</button>
            </>
        )
    }
}

export default MyComponent