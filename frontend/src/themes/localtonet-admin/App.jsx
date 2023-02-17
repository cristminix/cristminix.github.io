import { Component } from "react";
import { useBetween } from "use-between";
import useSessionState from "./shared/useSessionState";
const useSharedSessionState = () => useBetween(useSessionState);

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
    const {isLogedIn,setIsLogedIn} = useSharedSessionState();
    let TemplateApp;
    setIsLogedIn(localStorage['isLogedIn']);

    
    if(isLogedIn == "true"){
        TemplateApp = Template
    }else{
        TemplateApp = TemplateLogin
    }
    return (
        <TemplateApp/>
    );
} 
export default App;