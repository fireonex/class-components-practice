// import React, {useRef} from "react";
//
// type myStateType = {
//     items: Array<string>
// }
//
// type myPropsType = {
//     initialItems: Array<string>
// }
//
// export class ClassCompWithList extends React.Component <myPropsType, myStateType>{
//
//     constructor(props: myPropsType) {
//         super(props);
//         this.state = {
//             items: props.initialItems
//         };
//
//     }
//
//     inputRef = useRef<HTMLInputElement>(null)
//
//
//     addItemHandler = () => {
//         const el = this.inputRef.current as HTMLInputElement;
//         this.setState({items: this.state.items.push(el.value)})
//     }
//
//
//     render() {
//         return <>
//             <input type={"text"}/>
//             <button onClick={this.addItemHandler}>add item</button>
//             {this.state.items.map((el) => <div>{el}</div>)}
//         </>;
//     }
// }


import React from "react";

type MyStateType = {
    items: string[];
    currentItem: string;
}

type MyPropsType = {
    initialItems: string[];
}

export class ClassCompWithList extends React.Component<MyPropsType, MyStateType> {
    constructor(props: MyPropsType) {
        super(props);
        this.state = {
            items: props.initialItems,
            currentItem: ''
        };
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ currentItem: event.target.value });
    }

    addItemHandler = () => {
        if (this.state.currentItem.trim() !== '') {
            this.setState((prevState) => ({
                items: [...prevState.items, prevState.currentItem],
                currentItem: ''
            }));
        }
    }

    render() {
        return (
            <>
                <input
                    type="text"
                    value={this.state.currentItem}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.addItemHandler}>Add item</button>
                {this.state.items.map((el, index) => <div key={index}>{el}</div>)}
            </>
        );
    }
}




//Задание 4: Список элементов с добавлением
// Создайте классовый компонент, который позволяет пользователю добавлять элементы в список.
//
// Создайте состояние для хранения списка элементов и текущего значения ввода.
// Реализуйте текстовое поле для ввода нового элемента и кнопку для добавления элемента в список.
// При нажатии на кнопку новый элемент должен добавляться в список и текстовое поле должно очищаться.
// Требования:
// Текстовое поле для ввода нового элемента.
// Кнопка для добавления элемента в список.
// Отображение списка элементов.
// Пример кода для начала работы:
// Создайте компонент, который будет содержать текстовое поле, кнопку и список элементов.