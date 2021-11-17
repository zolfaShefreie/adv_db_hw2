import React, { useEffect } from 'react';
import { Route, Routes, useHistory, BrowserRouter } from 'react-router-dom';
import UserForm from "./userForm";


export default function Routers() {
    return (

        <Routes>
            <Route exact path="/user-form/" element={<UserForm update={false}/>}/>
            {/*<Route exact path="/user-update/" element={<UserForm update={true}/>}/>*/}
            {/*<Route exact path="/user/list/" render={() => <SignUp/>}/>*/}
            {/*<Route exact path="/user/info/" render={() => <Info/>}/>*/}

        </Routes>
    );
}