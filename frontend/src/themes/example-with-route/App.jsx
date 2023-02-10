import { Component } from "react";
import {
    HashRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
import Home from "./component/Home";  
import About from "./component/About";
import Contact from "./component/Contact";

class App extends Component {
    render() {
      return (
        <>
         <Router>
             <div className="App">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route exac path="/" element={<Home/>}></Route>
                <Route exac path="/about" element={<About/>}></Route>
                <Route exac path="/contact" element={<Contact/>}></Route>
            </Routes>
         </Router>
         
         </>
     );
    }
  }

  export default App;