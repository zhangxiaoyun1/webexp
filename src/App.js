import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Parent from './Context/Parent';
import Hoc from './HOC/Hoc';
import Sider from './Sider';
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Sider />
                    <div style={
                        {float:'left',
                        border:'2px solid red',
                        marginLeft:100}
                        }>
                        <Route path="/hoc" component={Hoc}></Route>
                        <Route path="/parent" component={Parent}></Route>
                    </div>

                </div>
            </Router>
        )
    }
}
