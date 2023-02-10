import React from "react";
import faviconIco from "../../assets/media/logos/favicon.ico"
import ThemeMenuMode from "./ThemeMenuMode";
import ToggleSvgIcon from "./svg-icons/ToggleSvgIcon";
import LightSvgIcon from "./svg-icons/LightSvgIcon";
import DarkSvgIcon from "./svg-icons/DarkSvgIcon";

export default function HeaderContent(props){
    const title = props.title;
    return(
        <>
<div id="kt_header" className="header">
    <div className="container-fluid d-flex align-items-center flex-wrap justify-content-between" id="kt_header_container">
        <div className="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-2 pb-5 pb-lg-0 pt-7 pt-lg-0" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_content_container', lg: '#kt_header_container'}">
            <h1 className="d-flex flex-column text-dark fw-bold my-0 fs-1">{title}</h1>
        </div>
        <div className="d-flex d-lg-none align-items-center ms-n3 me-2">
            <div className="btn btn-icon btn-active-icon-primary" id="kt_aside_toggle">
                <span className="svg-icon svg-icon-1 mt-1">
                    <ToggleSvgIcon viewBox="0 0 24 24"/>
                </span>
            </div>
            <a href="/" className="d-flex align-items-center">
                <img alt="Logo" src={faviconIco} className="h-30px" />
            </a>
        </div>
        <div className="d-flex align-items-center flex-shrink-0">
            <div className="d-flex align-items-center ms-3 ms-lg-4">
                <a href="#" className="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline w-40px h-40px" data-kt-menu-trigger="{default:'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                    <span className="svg-icon theme-light-show svg-icon-2">
                        <LightSvgIcon viewBox="0 0 24 24"/>
                    </span>
                    <span className="svg-icon theme-dark-show svg-icon-2">
                        <DarkSvgIcon viewBox="0 0 24 24"/>
                    </span>
                </a>
                <ThemeMenuMode/>
            </div>
        </div>
    </div>
</div>
        </>
    )
}