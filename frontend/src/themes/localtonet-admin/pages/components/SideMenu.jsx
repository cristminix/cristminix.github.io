import React from "react";
import MenuItem from "./MenuItem";
import {
    HashRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
export default class SideMenu extends React.Component{

    render(){
        return(<>

<div className="aside-menu flex-column-fluid ps-3 ps-lg-5 pe-1 mb-9" id="kt_aside_menu">
    <div className="w-100 hover-scroll-overlay-y pe-2 me-2" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_user, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu, #kt_aside_menu_wrapper" data-kt-scroll-offset="0">
        <div className="menu menu-column menu-rounded menu-sub-indention menu-active-bg fw-semibold" id="#kt_aside_menu" data-kt-menu="true">
            <MenuItem link="/dashboard" caption="Dashboard" icon="dashboard"/>
            <MenuItem link="/services" caption="Services" icon="subscription"/>
            {/* <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                <MenuItem hasChild={true} caption="My Tunnels" icon="tunnel"/>
                <div className="menu-sub menu-sub-accordion not-show">
                    <MenuItem bullet={true} link="#tunnel/http" caption="HTTP"/>
                    <MenuItem bullet={true} link="#tunnel/tcpudp" caption="TCP - UDP"/>
                    <MenuItem bullet={true} link="#tunnel/fileserver" caption="File Server"/>
                    <MenuItem bullet={true} link="#tunnel/proxyserver" caption="Proxy Server"/>
                </div>
            </div>
            <MenuItem link="#subscription/usersubscriptions" icon="subscription" caption="My Subscription"/>
            <MenuItem link="#usertoken" icon="token" caption="My Token"/>
            <MenuItem link="#subscription" icon="browsePlan" caption="Browse Plan"/>
            <MenuItem link="#order" icon="history" caption="Order History"/>
             */}
        </div>
    </div>
</div>  
</>)
    }
}