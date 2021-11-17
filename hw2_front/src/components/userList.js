import React from 'react';
import axios from "axios";
import {Link, Redirect} from "react-router-dom";
import UserCard from "./userInfiItem";


class Users extends React.Component{
    constructor(props){
        super(props);
        this.URL = 'http://127.0.0.1:8000/users/user-info/list/'
        this.state = {
            items: [],
            term: ''
        }
    }
    async componentDidMount(){
        localStorage.removeItem('pk')
        const response = await axios.get(`${this.URL}`);
        await this.setState({items: response.data});
    }

    render(){
        return(
            <div className="container" style={{width: '80%'}}>
                <h1 style={{color: '#3b3636'}}>Users</h1>
                <ul className="">
                        {this.state.items.map((item, index) => {
                            return <UserCard item={item} key={item.id} />
                        })}
                </ul>
            </div>
        )
    }

}


export default Users;