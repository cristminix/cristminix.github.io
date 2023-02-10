import React from "react";
import LightSvgIcon from "./svg-icons/LightSvgIcon";
import DarkSvgIcon from "./svg-icons/DarkSvgIcon";
import SystemSvgIcon from "./svg-icons/SystemSvgIcon";
export default function ThemeMenuMode(){

    return(
        <>
<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-color fw-semibold py-4 fs-base w-175px" data-kt-menu="true" data-kt-element="theme-mode-menu">
    <div className="menu-item px-3 my-0">
        <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="light">
            <span className="menu-icon" data-kt-element="icon">
                <span className="svg-icon svg-icon-3">
                    <LightSvgIcon viewBox="0 0 24 24"/>
                </span>
            </span>
            <span className="menu-title">Light</span>
        </a>
    </div>
    <div className="menu-item px-3 my-0">
        <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark">
            <span className="menu-icon" data-kt-element="icon">
                <span className="svg-icon svg-icon-3">
                    <DarkSvgIcon viewBox="0 0 24 24"/>
                </span>
            </span>
            <span className="menu-title">Dark</span>
        </a>
    </div>
    <div className="menu-item px-3 my-0">
        <a href="#" className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="system">
            <span className="menu-icon" data-kt-element="icon">
                <span className="svg-icon svg-icon-3">
                    <SystemSvgIcon viewBox="0 0 24 24"/>
                </span>
            </span>
            <span className="menu-title">System</span>
        </a>
    </div>
</div>        
        </>
    )
}