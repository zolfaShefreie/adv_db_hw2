import React from 'react';


class UserCard extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div className="card text-left bg-dark w-70 mr-4" style={{color: 'antiquewhite'}}>
                <div className="card-body ml-4">
                    <p className="card-text">{"Firstname: ".concat(this.props.item.first_name)}</p>
                    <p className="card-text">{"Lastname: ".concat(this.props.item.last_name)}</p>
                </div>
                <button className="btn btn-dark " onClick={this.handleClick}>more&update</button>
        </div>
        )
    }

    handleClick(){
        localStorage.setItem('pk', this.props.item.id)
        window.location.href = "/update-user/";
    }

}

export default UserCard;