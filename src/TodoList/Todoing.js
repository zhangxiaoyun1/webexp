import React, { Component } from 'react'
import './Todo.css'
export default class Todoing extends Component {
    render() {
        var { todo } = this.props;
        return (
            <div>
                <h2>正在进行</h2>
                <div className='cl'>{this.props.num1}</div>
                <ol>
                    {
                        todo.map((item, index) => {
                            if (item.done === 'false') {
                                return <li key={index} className="lis">
                                    <input className='in' type="checkbox" onClick={()=>this.props.toCheck(index)}/>
                                        {item.value}
                                    <button onClick={() => this.props.del(index)} className='but'>删除</button>
                                </li>
                            }
                        })
                    }
                </ol>
                <h2>已经完成</h2>
                <div className='cl'>{this.props.num2}</div>
                <ol>
                    {
                        todo.map((item, index) =>{
                            if(item.done==='true'){
                                return <li key={index} className="lis">
                                    <input className='in' type="checkbox" checked="checked" onClick={()=>this.props.toChecked(index)}/>
                                        {item.value}
                                    <button onClick={() => this.props.del(index)} className='but'>删除</button>
                                 </li>
                            }
                        })
                    }
                </ol>
            </div>

        )
    }
}