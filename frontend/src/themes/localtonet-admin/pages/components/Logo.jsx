import React from "react";
import logoPng from "../../assets/media/logos/logo.png"
export default class Logo extends React.Component{

    render(){
        return(
            <>
            <div className="aside-logo flex-column-auto px-9 mb-9 mb-lg-17 mx-auto" id="kt_aside_logo">
                    <a href="/">
                        <img alt="Logo" src={logoPng} className="h-80px logo theme-light-show" />
                        <img alt="Logo" src={logoPng} className="h-80px logo theme-dark-show" />
                    </a>
                </div>
            </>
        )
    }
}