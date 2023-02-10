import { Component } from "react";
import {
    HashRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

let session = {
    isLogedIn : true
}

// import Home from "./component/Home";  
// import About from "./component/About";
// import Contact from "./component/Contact";
import Template from "./pages/Template";
import TemplateLogin  from "./templates/login/TemplateLogin";
function App(){
    let TemplateApp;
    if(session.isLogedIn){
        TemplateApp = Template
    }else{
        TemplateApp = TemplateLogin
    }
    return (
        <TemplateApp/>
    );
} 
export default App;