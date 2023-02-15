import React from "react";
import logoPng from "../../../assets/media/logos/logo.png"
import LogoSvgIcon from "../../../pages/components/svg-icons/LogoSvgIcon"
export default function RightSide(props){

    return(
<>
<div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2" style={{backgroundColor: "#1e1e2d"}}>
    <div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
        <a href="/" className="mb-0 mb-lg-12">
            <LogoSvgIcon className="h-180px logo theme-light-show" viewBox="0 0 600 512"/>
            <LogoSvgIcon className="h-180px logo theme-dark-show" viewBox="0 0 600 512"/>
        </a>
    </div>
</div>
</>
    )
}