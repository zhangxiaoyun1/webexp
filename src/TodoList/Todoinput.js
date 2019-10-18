import React, { Component } from 'react'
import './Todo.css'
export default class Todoing extends Component {
    constructor(){
        super();
    }
    handleInput = (e)=>{
        //绑定this,事件处理函数写成箭头函数，或者硬bind
        if(e.keyCode===13){
            var obj={};
            obj.value=e.target.value;
            obj.done='false';
            this.props.add(obj);
            e.target.value=null;
        }
        
    }
    render() {
        return (
            <div>
                <input className='int' ref={(inp)=>{this.inp=inp}} type="text" onKeyDown={this.handleInput} placeholder='   请添加事件，并回车确定'></input>
            </div>
        )
    }
}