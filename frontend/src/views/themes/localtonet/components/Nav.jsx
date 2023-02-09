import React from "react";
import logoBlue from "../assets/homepage/logoblue.png"
import logo from "../assets/homepage/logo.png"
export default class HomePage extends React.Component{

    render(){
        return(
            <>
    <nav id="topnav" className="defaultscroll is-sticky">
        <div className="container">
            <a className="logo pl-0" href="/">
                <img src={logoBlue} className="inline-block dark:hidden" alt="" width="80px" />
                <img src={logo} className="hidden dark:inline-block" alt="" width="80px" />
            </a>

            <div className="menu-extras">
                <div className="menu-item">
                    <a className="navbar-toggle" id="isToggle" onClick={()=>{return "toggleMenu()"}}>
                        <div className="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </a>
                </div>
            </div>

            <ul className="buy-button list-none mb-0">
                <li className="inline mb-0">
                    <a title="Dashboard" className="btn btn-icon rounded-full bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600" style={{display:"contents"}} href="/Dashboard"><i title="Dashboard" className="uil uil-dashboard align-middle"></i> Dashboard</a>
                </li>
            </ul>

            <div id="navigation">
                <ul className="navigation-menu">
                    <li><a href="/" className="sub-menu-item">Home</a></li>
                    <li><a href="/documents" className="sub-menu-item">Documents</a></li>
                    <li><a className="sub-menu-item scroll-a" href="/#pricing">Pricing</a></li>
                    <li><a href="/download" className="sub-menu-item">Downloads</a></li>
                    <li><a href="/blog" className="sub-menu-item">Blog</a></li>
                    <li><a href="/contact" className="sub-menu-item">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
            </>
        )
    }
}