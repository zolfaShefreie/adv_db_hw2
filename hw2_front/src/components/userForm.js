import React from 'react';
import axios from "axios";
import {Link, Redirect} from "react-router-dom";


class UserForm extends React.Component{

    constructor(props){
        super(props);
        this.baseUrl = 'http://127.0.0.1:8000/users/user-info/';
        this.input_style = {
            backgroundColor: '#3b3636',
            color: 'antiquewhite'
        }
        this.error_style={
            color: 'red',
            fontWeight: 'normal',
            fontSize: '.6em',
        }
        this.state = {
            'errors': {},
            'phone': '',
            'last_name': '',
            'first_name': '',
            'birthday': '',
            'address': '',
            'gender': 'male',
            'showSuccess': false,
            'successMsg': '',
            'maleCheck': true,
            'femaleCheck': false
        }
        if (!this.props.update){
            localStorage.removeItem('pk')
        }
        this.pk = (this.props.update&&localStorage.getItem('pk')) ? localStorage.getItem('pk') : null
        console.log(this.pk)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount(){
        if (this.pk){
            const response = await axios.get(`${this.baseUrl}${this.pk}/`);
            await this.setState(response.data)
            console.log(response.data['gender']=="female")
            if(response.data['gender'] == "female"){
                await this.setState({maleCheck: false, femaleCheck: true})
                console.log(this.state)
            }
        }
    }

    render(){
        return (
            <div className="container box" style={{width: '42%'}}>
                {
                    this.props.update &&
                    <h1 style={{color: '#3b3636'}}>Update User Info</h1>
                }
                {
                    !this.props.update &&
                     <h1 style={{color: '#3b3636'}}>add User Info</h1>
                }
                {
                    'non_field_errors' in this.state.errors &&
                    <div className='alert alert-danger mt-3'>
                        <p className="text-center">{this.state.errors['non_field_errors']}</p>
                    </div>
                }
                {
                    this.state.showSuccess &&
                    <div className='alert alert-success mt-3'>
                        <p className="text-center">{this.state.successMsg}</p>
                    </div>
                }

                <form className="form container" style={{width: '98%'}}>
                    <div className="form-row ml-4 mr-4">
                        <div className="col">
                            <div className="form-group row mr-2">
                                <label htmlFor="first_name" className="col-form-label col-form-label-sm">FirstName</label>
                                <input type="text" className="form-control" style={this.input_style} id="first_name"
                                       onChange={this.handleChange} value={this.state.first_name} required/>
                                {
                                    'first_name' in this.state.errors &&
                                    <div style={this.error_style}>
                                        {this.state.errors['first_name']}
                                    </div>
                                }
                            </div>
                        </div>

                        <div className="col">
                            <div className="form-group row ml-2">
                                <label htmlFor="last_name"
                                       className="col-form-label col-form-label-sm">LastName</label>
                                <input type="text" className="form-control" style={this.input_style} id="last_name"
                                       onChange={this.handleChange} value={this.state.last_name} required/>
                                {
                                    'last_name' in this.state.errors &&
                                    <div style={this.error_style}>
                                        {this.state.errors['last_name']}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                        <div className="form-group row m-2">
                        <label htmlFor="birthday" className="col-form-label col-form-label-sm">birthday</label>
                        <input type="date" className="form-control" id="birthday" style={this.input_style}
                               onChange={this.handleChange} value={this.state.birthday} required/>
                        {
                            'birthday' in this.state.errors &&
                            <div style={this.error_style}>
                                {this.state.errors['birthday']}
                            </div>
                        }
                        </div>
                        <div className="form-group row m-2">
                        <label htmlFor="phone" className="col-form-label col-form-label-sm">Phone</label>
                        <input type="text" className="form-control" id="phone" style={this.input_style}
                               onChange={this.handleChange} value={this.state.phone} required/>
                        {
                            'phone' in this.state.errors &&
                            <div style={this.error_style}>
                                {this.state.errors['phone']}
                            </div>
                        }
                        </div>
                        <div className="form-group row m-2">
                        <label htmlFor="address" className="col-form-label col-form-label-sm">Address</label>
                        <textarea rows={2} className="form-control" id="address" style={this.input_style}
                               onChange={this.handleChange} value={this.state.address} required/>
                        {
                            'address' in this.state.errors &&
                            <div style={this.error_style}>
                                {this.state.errors['address']}
                            </div>
                        }
                        </div>
                        <div className="custom-control custom-radio custom-control-inline mt-2 mb-2">
                            <input type="radio" id="customRadioInline1" name="customRadioInline1"
                                   className="custom-control-input" defaultChecked={this.state.maleCheck}
                                   onChange={this.handleChange}/>
                                <label className="custom-control-label" htmlFor="customRadioInline1">male</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadioInline2" name="customRadioInline1"
                                   className="custom-control-input" defaultChecked={this.state.femaleCheck}
                                   onChange={this.handleChange}/>
                                <label className="custom-control-label" htmlFor="customRadioInline2">female</label>
                        </div>
                        <br/>
                        <button className="btn btn-dark m-2" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
    async handleSubmit(event){
        event.preventDefault();
        await this.setState({errors: {}})

        var data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            address: this.state.address,
            gender: this.state.gender,
            birthday: this.state.birthday,
            phone: this.state.phone,
        }

        if (this.props.update){
            console.log("update")
           await axios.put(`${this.baseUrl}${this.pk}/`, data).then((response) => {
               this.setState({showSuccess:true, successMsg: 'The user updated successfully'})
               setTimeout(() => {this.setState({showSuccess:false})}, 3000);
               window.location.reload()
               console.log(response.data);
        }, (error) => {
            console.log('error', Object.assign({}, error.response.data));
            this.setState({errors: error.response.data})
        });

        }else {
            await axios.post(`${this.baseUrl}`, data).then((response) => {
                // localStorage.setItem('user_id', response.data.id);
                // localStorage.setItem('token', response.data.token);
                this.setState({showSuccess: true, successMsg: 'The user added successfully'})
                setTimeout(() => {
                    this.setState({showSuccess: false})
                },  3000);
                console.log(response.data);
                window.location.reload()
            }, (error) => {
                console.log('error', Object.assign({}, error.response.data));
                this.setState({errors: error.response.data})
            });
        }

    }

    async handleChange(event) {
        const newState = {}
        if (event.target.id === 'customRadioInline2' && event.target.value === 'on'){
            await this.setState({'gender': 'female'})
        }else if(event.target.id === 'customRadioInline1' && event.target.value === 'on'){
            await this.setState({'gender': 'male'})
        }
        else {
            const newState = {}
            newState[event.target.id] = event.target.value
            await this.setState(newState);
        }
        await this.setState(newState);
        console.log(this.state)
    }
}



export default UserForm;