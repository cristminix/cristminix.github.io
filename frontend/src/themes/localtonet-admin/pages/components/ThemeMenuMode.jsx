import React,{useEffect,useState} from "react";
import LightSvgIcon from "./svg-icons/LightSvgIcon";
import DarkSvgIcon from "./svg-icons/DarkSvgIcon";
import SystemSvgIcon from "./svg-icons/SystemSvgIcon";
export default function ThemeMenuMode(){
    var defaultThemeMode = "dark";
    const [themeMode,setThemeMode]=useState("");
    const changeThemeMode_ = (themeMode_)=>{
        if (document.documentElement) {
            
            if (themeMode_ === "system") {
                themeMode_ = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            }
            document.documentElement.setAttribute("data-theme", themeMode_);
            localStorage["data-theme"] = themeMode_;
        }
    }
    const initThemeMode = ()=>{
        let themeMode_;
        if (document.documentElement) {
            if (document.documentElement.hasAttribute("data-theme-mode")) {
                themeMode_ = document.documentElement.getAttribute("data-theme-mode");
            }
            else {
                if (localStorage.getItem("data-theme") !== null) {
                    themeMode_ = localStorage.getItem("data-theme");
                }
                else {
                    themeMode_ = defaultThemeMode;
                }
            }
            if (themeMode_ === "system") {
                themeMode_ = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            }

            changeThemeMode_(themeMode_);
        }
    }
    const changeThemeMode = (evt)=>{
        console.log(evt)
        let themeMode_ = localStorage["data-theme"];
        if (!themeMode_)
            themeMode_ = 'system'
        else if(themeMode_ == 'dark')
            themeMode_ = 'light'
        else if(themeMode_ == 'light')
            themeMode_ = 'dark'
        console.log(themeMode_)
        changeThemeMode_(themeMode_)
    }

    useEffect(()=>{
       initThemeMode(); 
    },[themeMode]);
    return(
        <>
<button onClick={changeThemeMode} className="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline w-40px h-40px" data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
    <span className="svg-icon theme-light-show svg-icon-2">
        <LightSvgIcon viewBox="0 0 24 24"/>
    </span>
    <span className="svg-icon theme-dark-show svg-icon-2">
        <DarkSvgIcon viewBox="0 0 24 24"/>
    </span>
</button>            
<div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-color fw-semibold py-4 fs-base w-175px" data-kt-menu="true" data-kt-element="theme-mode-menu">
    <div className="menu-item px-3 my-0">
        <button onClick={changeThemeMode}  className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="light">
            <span className="menu-icon" data-kt-element="icon">
                <span className="svg-icon svg-icon-3">
                    <LightSvgIcon viewBox="0 0 24 24"/>
                </span>
            </span>
            <span className="menu-title">Light</span>
        </button>
    </div>
    <div className="menu-item px-3 my-0">
        <button onClick={changeThemeMode}  className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="dark">
            <span className="menu-icon" data-kt-element="icon">
                <span className="svg-icon svg-icon-3">
                    <DarkSvgIcon viewBox="0 0 24 24"/>
                </span>
            </span>
            <span className="menu-title">Dark</span>
        </button>
    </div>
    <div className="menu-item px-3 my-0">
        <button onClick={changeThemeMode} className="menu-link px-3 py-2" data-kt-element="mode" data-kt-value="system">
            <span className="menu-icon" data-kt-element="icon">
                <span className="svg-icon svg-icon-3">
                    <SystemSvgIcon viewBox="0 0 24 24"/>
                </span>
            </span>
            <span className="menu-title">System</span>
        </button>
    </div>
</div>        
        </>
    )
}