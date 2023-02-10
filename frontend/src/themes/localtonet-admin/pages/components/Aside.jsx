import React from "react";
import Logo from "./Logo";
import SideMenu from "./SideMenu";
import SideFooter from "./SideFooter";
export default class Aside extends React.Component{

    render(){
        return(
            <>

<div id="kt_aside" className="aside pt-7 pb-4 pb-lg-7 pt-lg-17" data-kt-drawer="true" data-kt-drawer-name="aside" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_aside_toggle">
                <Logo/>
                <SideMenu/>
                <SideFooter/>
            </div>
            </>
        )
    }
}