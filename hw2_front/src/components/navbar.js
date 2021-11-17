import React from 'react';
import {Link, BrowserRouter, Route, Switch} from "react-router-dom";

class Navbar extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <nav className="navbar dark">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link" to="/user-form/">Add User</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/user-list/">Users</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Navbar;