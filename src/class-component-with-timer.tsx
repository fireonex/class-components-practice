import React from "react";

type myStateType = {
    time: number
}

type myPropsType = {
    initialCount: number
}

export class ClassCompWithTimer extends React.Component <myPropsType, myStateType>{

    constructor(props: myPropsType) {
        super(props);
        this.state = {
            time: props.initialCount,
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ time: this.state.time + 1 });
        }, 1000)
    }

    componentWillUnmount() {
        this.setState({ time: 0 });
    }

    render() {
        return <>
          <div>{this.state.time}</div>
        </>;
    }
}


//Создайте классовый компонент, который отображает текущее время и обновляет его каждую секунду.
//
// Создайте состояние для хранения текущего времени.
// Используйте метод componentDidMount для запуска таймера, который обновляет состояние каждую секунду.
// Используйте метод componentWillUnmount для очистки таймера при размонтировании компонента.