import React from "react";
import logoPng from "../../assets/media/logos/logo.png"
import LogoSvgIcon from "./svg-icons/LogoSvgIcon"
import { Link } from 'react-router-dom';

export default class Logo extends React.Component{

    render(){
        return(
            <>
            <div className="aside-logo flex-column-auto px-9 mb-9 mb-lg-17 mx-auto" id="kt_aside_logo">
                    <Link to="/" className="-mt-8 p-0 h-120px block overflow-hidden">
                        <LogoSvgIcon className="h-120px logo theme-light-show" viewBox="0 0 600 512"/>
                        <LogoSvgIcon className="h-120px logo theme-dark-show"  viewBox="0 0 512 512"/>
                    </Link>
                </div>
            </>
        )
    }
}