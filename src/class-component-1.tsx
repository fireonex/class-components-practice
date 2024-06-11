import React from "react";

type myStateType = {
    count: number
}

type myPropsType = {
    initialCount: number
}

export class ClassComponent1 extends React.Component <myPropsType, myStateType>{

    constructor(props: myPropsType) {
        super(props);
        this.state = {
            count: props.initialCount,
        };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };


    render() {
        return <>
            <div>Hello, I am a class component!</div>
            <button onClick={this.increment} style={{ padding: '10px' }}>enlarge text</button>
            <textarea style={{ fontSize: `${this.state.count}px`, padding: '10px' }} ></textarea>
        </>;
    }
}

