import React from "react";

type MyStateType = {
    count: number
}

type MyPropsType = {
    initialCount: number;
}

export class ClassCompWithCounter extends React.Component<MyPropsType, MyStateType> {
    constructor(props: MyPropsType) {
        super(props);
        this.state = {
            count: props.initialCount,
        };
    }


    decreaseHandler = () => {
        this.setState({count: this.state.count - 1});
    }

    increaseHandler = () => {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <>
                <button onClick={this.increaseHandler}>+</button>
                <button onClick={this.decreaseHandler} disabled={this.state.count === 0}>-</button>
                {this.state.count}
            </>
        );
    }
}



//Задание 5: Счетчик с увеличением и уменьшением значения
// Создайте классовый компонент, который содержит счетчик и две кнопки:
// одна для увеличения значения счетчика, другая для уменьшения.
// 
// Требования:
// Состояние: Храните текущее значение счетчика в состоянии компонента.
// Кнопки: Реализуйте две кнопки - одна для увеличения значения счетчика,
// другая для уменьшения.
// Методы: Создайте методы для обработки нажатий на кнопки, которые будут обновлять состояние счетчика.
// Отображение: Отображайте текущее значение счетчика на экране.

// Подсказки:
// Используйте setState для обновления значения счетчика.
// Убедитесь, что значение счетчика не становится отрицательным (если это необходимо по условию задачи).
// Обработчики событий для кнопок могут быть привязаны к методам в 
// конструкторе или с использованием синтаксиса стрелочных функций.