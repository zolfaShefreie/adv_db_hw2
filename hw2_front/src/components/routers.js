import React, { useEffect } from 'react';
import { Route, Routes, useHistory, BrowserRouter } from 'react-router-dom';
import UserForm from "./userForm";
import Users from "./userList"


export default function Routers() {
    return (

        <Routes>
            <Route exact path="/user-form/" element={<UserForm update={false}/>}/>
            <Route exact path="/user-update/" element={<UserForm update={true}/>}/>
            <Route exact path="/user-list/" element={ <Users/>}/>
        </Routes>
    );
}