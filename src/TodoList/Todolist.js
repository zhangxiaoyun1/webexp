import React, { Component } from 'react'
import Todoing from './Todoing'
import Todoinput from './Todoinput'
import './Todo.css'
export default class Todolist extends Component {
    constructor() {
        super();
        this.state = {
            todo: JSON.parse(localStorage.getItem('key'))
        }
        this.num1 = 0;
        this.num2 = 0;
        this.state.todo.map((item) => {
            if (item.done === 'false') {
                this.num1++;
            } else {
                this.num2++;
            }
        })


    }
    addItem = (data) => {
        if (data !== '') {
            this.num1++;
            this.setState((state, props) => {
                var arr = [];
                arr = [...state.todo, data];
                localStorage.setItem('key', JSON.stringify(arr));
                return {
                    todo: arr,
                }
            })

        } else {
            alert('请输入内容');
        }
    }
    delItem = (index) => {
        let todo = [...this.state.todo];
        if (todo[index].done === 'false') {
            this.num1--;
        } else {
            this.num2--;
        }
        todo.splice(index, 1);
        localStorage.setItem('key', JSON.stringify(todo));
        this.setState((state, props) => {
            return {
                todo: todo,
            }
        })

    }
    toCheck = (index) => {
        this.num1--;
        this.num2++;
        let todo = [...this.state.todo];
        todo[index].done = 'true';
        localStorage.setItem('key', JSON.stringify(todo));
        this.setState((state, props) => {
            return {
                todo: todo
            }
        })
    }
    toChecked = (index) => {
        this.num1++;
        this.num2--;
        let todo = [...this.state.todo];
        todo[index].done = 'false';
        localStorage.setItem('key', JSON.stringify(todo));
        this.setState((state, props) => {
            return {
                todo: todo
            }
        })
    }
    render() {
        return (
            <div>
                <div className='box'>
                    <Todoinput add={this.addItem} />
                    <Todoing del={this.delItem} todo={this.state.todo} toCheck={this.toCheck} toChecked={this.toChecked} num1={this.num1} num2={this.num2} />
                </div>
            </div>

        )
    }
}
