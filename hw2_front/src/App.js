import './App.css';
import Routers from "./components/routers"
import Navbar from "./components/navbar"
import {BrowserRouter } from 'react-router-dom';
import UserForm from "./components/userForm";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <Routers/>

            </BrowserRouter>
        </div>
    );
}

export default App;