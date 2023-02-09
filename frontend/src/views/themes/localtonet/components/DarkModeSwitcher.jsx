import React from "react";

export default class DarkModeSwitcher extends React.Component{
    state = {
        defaultThemeMode : "light",
        themeMode : ""
    }
    componentDidMount(){
        var themeMode = this.getCurrThemeMode();
        this.changeThemeMode(themeMode);
    }
    changeThemeMode(themeMode){
        try{
            document.getElementById("app-instance").setAttribute("class", themeMode);

        }catch(e){}
    }
    getCurrThemeMode(){
        var defaultThemeMode = "light";

        var themeMode;
        // if (document.documentElement) {
        if (localStorage.getItem("data-theme") !== null) {
            themeMode = localStorage.getItem("data-theme");
        }
        else {
            themeMode = defaultThemeMode;
        }
        return themeMode;
    }
    tgThemeMode(){
        var themeMode = this.getCurrThemeMode();
        if(themeMode == "light"){
            themeMode = "dark";
        }
        if(themeMode == "dark"){
            themeMode = "light";
        }
        console.log(themeMode)
        this.changeThemeMode(themeMode);
    }
    render(){
        return(
            <>

<div className="fixed top-1/4 -right-2 z-50">
    <span className="relative inline-block rotate-90">
        <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" onClick={this.tgThemeMode} />
        <label className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" htmlFor="chk">
            <i className="uil uil-moon text-[20px] text-yellow-500"></i>
            <i className="uil uil-sun text-[20px] text-yellow-500"></i>
            <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span>
        </label>
    </span>
</div>
            </>
        )
    }
}