import { Component } from "react";
// import {
//     HashRouter as Router,
//     Routes,
//     Route,
//     Link
//   } from 'react-router-dom';
// import Home from "./component/Home";  
// import About from "./component/About";
// import Contact from "./component/Contact";
import Dashboard from "./pages/Dashboard";
/*
<link href="./src/themes/localtonet-admin/" rel="stylesheet" type="text/css" />
    <link href="./src/themes/localtonet-admin/" rel="stylesheet" type="text/css" />
    <link href="./src/themes/localtonet-admin/" rel="stylesheet" type="text/css" />
    <link href="./src/themes/localtonet-admin/" rel="stylesheet" type="text/css" />
    <link href="./src/themes/localtonet-admin/" rel="stylesheet" type="text/css">
    <link href='./src/themes/localtonet-admin/' rel='stylesheet' type='text/css' />
    <link href='./src/themes/localtonet-admin/' rel='stylesheet' type='text/css' />
    
*/
import "./assets/plugins/custom/fullcalendar/fullcalendar.bundle.css";
import "./assets/plugins/custom/datatables/datatables.bundle.css";
import "./assets/plugins/global/plugins.bundle.css";
import "./assets/css/style.bundle.css";
import "./assets/plugins/global/jquery-confirm/css/jquery-confirm.min.css";
import "./assets/plugins/custom/froala/froala_editor.pkgd.min.css";
import "./assets/plugins/custom/top-notification-bar-topper/css/topper.css";
import "./assets/css/admin.css"
function App(){
      return (
<>
<Dashboard/>
</>
);
} 
export default App;