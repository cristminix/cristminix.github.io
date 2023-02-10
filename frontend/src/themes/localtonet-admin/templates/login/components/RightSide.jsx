import React from "react";
import logoPng from "../../../assets/media/logos/logo.png"
export default function RightSide(props){

    return(
<>
<div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2" style={{backgroundColor: "#1e1e2d"}}>
    <div className="d-flex flex-column flex-center py-7 py-lg-15 px-5 px-md-15 w-100">
        <a href="/" className="mb-0 mb-lg-12">
            <img alt="Logo" src={logoPng} className="h-100px logo theme-light-show" />
            <img alt="Logo" src={logoPng} className="h-100px logo theme-dark-show" />
        </a>
    </div>
</div>
</>
    )
}