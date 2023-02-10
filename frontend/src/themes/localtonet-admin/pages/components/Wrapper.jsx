import React from "react";
import faviconIco from "../../assets/media/logos/favicon.ico"
import ToggleSvgIcon from "./svg-icons/ToggleSvgIcon";
import LightSvgIcon from "./svg-icons/LightSvgIcon";
import DarkSvgIcon from "./svg-icons/DarkSvgIcon";
import SystemSvgIcon from "./svg-icons/SystemSvgIcon";

export default class Wrapper extends React.Component{

    render(){
        return(
            <>
   <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                <div id="kt_header" className="header">
                    <div className="container-fluid d-flex align-items-center flex-wrap justify-content-between" id="kt_header_container">
                        <div className="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-2 pb-5 pb-lg-0 pt-7 pt-lg-0" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_content_container', lg: '#kt_header_container'}">
                            <h1 className="d-flex flex-column text-dark fw-bold my-0 fs-1">Dashboard</h1>
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
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                    <div className="container-fluid" id="kt_content_container">
                        

<div className="row">
    <div className="col-xl-2 col-md-6 mt-2">
        <div className="card card-h-100">
            <div className="card-body">
                <div className="row">
                    <span className="text-muted mb-3 d-block text-truncate">Subscription</span>
                </div>
                <div className="row">
                    <h4>
                        <span>Free</span>
                    </h4>
                </div>
            </div>
        </div>
    </div>
    <div className="col-xl-4 col-md-6 mt-2">
        <div className="card card-h-100">
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <span className="text-muted mb-3 d-block text-truncate">My Default AuthToken</span>
                    </div>
                    <div className="col-6">
                        <a href="/usertoken" className="link-info" style={{float: "right"}}>My Tokens</a>
                    </div>
                </div>
                <div className="row">
                    <h4>
                        <span style={{fontSize:"13px"}} id="authToken" onClick={()=>{copyToClipboard('#authToken')}}>PhYs0CTrqcEj4ovwzbRpOB83G5KLkl97Z <i className="fas fa-copy" title="Copy"></i></span>
                    </h4>
                </div>
            </div>
        </div>
    </div>
    <div className="col-xl-2 col-md-4 mt-2">
        <div className="card card-h-100">
            <div className="card-body">
                <div className="row">
                    <span className="text-muted mb-3 d-block text-truncate">Bandwidth Usage</span>
                </div>
                <div className="row">
                    <h4>
                        <span style={{fontSize:"13px"}}>23,77 Mb / 1024,00 Mb</span>
                    </h4>
                </div>
            </div>
        </div>
    </div>
    <div className="col-xl-4 col-md-8 mt-2">
        <div className="card card-h-100">
            <div className="card-body" id="apiKeyDiv">
                <div className="row">
                    <div className="col-sm-5 col-md-5 col-lg-6 col-5">
                        <span className="text-muted mb-3 d-block text-truncate">My Api Key</span>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-3 col-4">
                        <span id="apiKeyChange" onClick={()=>{changeApiKey()}} style={{float: "right", color: "green", cursor: "pointer", fontSize:"13px"}}>Change <i className="fas fa-sync" title="Sync"></i></span>
                    </div>
                    <div className="col-sm-3 col-md-3 col-lg-3 col-3">
                        <a href="/api" style={{float:"right"}} target="_blank">Go API</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h4>
                            <span style={{fontSize:"13px"}} id="apiKey" onClick={()=>{copyToClipboard('#apiKey')}}>p2lY3VRXZDSNyTsvWL9JB5cofU1Murbezk7qgwh6P4KCd <i className="fas fa-copy" title="Copy"></i></span>
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="row mt-3">
    <div className="col-xl-6 mt-2">
        <div className="card card-flush">
            <div className="card-header border-0 pt-0">
                <div className="card-title">
                    <div className="d-flex align-items-center position-relative my-1">
                        Active HTTP Tunnels
                    </div>
                </div>
                <div className="card-toolbar">
                </div>
            </div>
            <div className="card-body pt-0">
                <div className="hover-scroll-overlay-y pe-6 me-n6" style={{maxHeight: "415px"}}>
                    <table className="table align-middle table-row-dashed fs-6 gy-5 mb-0">
                        <tbody className="fw-semibold text-gray-600">
                                <tr><td>No Results</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div className="col-xl-6 mt-2">
        <div className="card card-flush">
            <div className="card-header border-0 pt-0">
                <div className="card-title">
                    <div className="d-flex align-items-center position-relative my-1">
                        Active TCP - UDP Tunnels
                    </div>
                </div>
                <div className="card-toolbar">
                </div>
            </div>
            <div className="card-body pt-0">
                <div className="hover-scroll-overlay-y pe-6 me-n6" style={{maxHeight: "415px"}}>
                    <table className="table align-middle table-row-dashed fs-6 gy-5 mb-0">
                        <tbody className="fw-semibold text-gray-600">
                                <tr><td>No Results</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="row mt-3">
    <div className="col-xl-6 mt-2">
        <div className="card">
            <div className="card-header align-items-center d-flex">
                <h4 className="card-title mb-0 flex-grow-1">Documents</h4>
                <div className="flex-shrink-0">
                </div>
            </div>
            <div className="card-body">
                <div className="row">
                    <span>
                        Run localtonet and write your token go dashboard and start tunnel.
                    </span>
                </div>
                <div className="row">
                    <span>
                        You can create <a href="/tunnel/http">HTTP</a>, <a href="/tunnel/tcpudp">UDP, TCP, UDP/TCP</a> tunnels.
                    </span>
                </div>
                <div className="row">
                    <span>
                        It is that simple.
                    </span>
                </div>
                <div className="row">
                    <span>
                        &nbsp;
                    </span>
                </div>
                <div className="row">
                    <span>
                        &nbsp;
                    </span>
                </div>
                <div className="row">
                    <span>
                        Localtonet API Link on Swagger:
                    </span>
                </div>
                <div className="row">
                    <span>
                        <a href="/api" target="_blank">Localtonet API</a>
                    </span>
                </div>
                <div className="row">
                    <span>
                        &nbsp;
                    </span>
                </div>
                <div className="row">
                    <span>
                        &nbsp;
                    </span>
                </div>
                <div className="row">
                    <span>
                        &nbsp;
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div className="col-xl-6 mt-2">
        <div className="card">
            <div className="card-header align-items-center d-flex">
                <h4 className="card-title mb-0 flex-grow-1">Downloads</h4>
                <div className="flex-shrink-0">
                </div>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-lg-4 col-sm-6">
                        <a href="/download/localtonet-win-64.zip" className="btn btn-light-primary m-1" style={{width:"100%"}}>
                            Windows (64-bit)
                        </a>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4 col-sm-6">
                        <a href="/download/localtonet-win-32.zip" className="btn btn-light-primary m-1" style={{width:"100%"}}>
                            Windows (32-bit)
                        </a>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4 col-sm-6">
                        <a href="/download/localtonet-win-arm.zip" className="btn btn-light-primary m-1" style={{width:"100%"}}>
                            Windows (ARM)
                        </a>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4 col-sm-6">
                        <a href="/download/localtonet-win-arm64.zip" className="btn btn-light-primary m-1" style={{width:"100%"}}>
                            Windows (ARM-64)
                        </a>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4 col-sm-6">
                        <a href="/download/localtonet-osx-64.zip" className="btn btn-light-warning m-1" style={{width:"100%"}}>
                            MacOS (64-bit)
                        </a>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4 col-sm-6">
                        <a href="/download/localtonet-osx-arm64.zip" className="btn btn-light-warning m-1" style={{width:"100%"}}>
                            MacOS (ARM-64)
                        </a>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4 col-sm-6">
                        <a href="/download/localtonet-linux-x64.zip" className="btn btn-light-success m-1" style={{width:"100%"}}>
                            Linux (64-bit)
                        </a>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4 col-sm-6">
                        <a href="/download/localtonet-linux-arm.zip" className="btn btn-light-success m-1" style={{width:"100%"}}>
                            Linux (ARM)
                        </a>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4 col-sm-6">
                        <a href="/download/localtonet-linux-arm64.zip" className="btn btn-light-success m-1" style={{width:"100%"}}>
                            Linux (ARM-64)
                        </a>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4 col-sm-6">
                        <a target="_blank" href="https://hub.docker.com/r/localtonet/localtonet" className="btn btn-light-info m-1" style={{width:"100%"}}>
                            Docker
                        </a>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4 col-sm-6">
                        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.localtonet.localtonetapp" className="btn btn-light-danger m-1" style={{width:"100%"}}>
                            Android (Google Play)
                        </a>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4 col-sm-6">
                        <a target="_blank" href="https://apps.microsoft.com/store/detail/localtonet/9MZBMT85F2SB" className="btn btn-light-dark m-1" style={{width:"100%"}}>
                            Microsoft Store
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

                    </div>
                </div>

                <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
                    <div className="container-fluid d-flex flex-column flex-md-row flex-stack">
                        <div className="text-dark order-2 order-md-1">
                            <span className="text-gray-400 fw-semibold me-1">Created by</span>
                            <a href="https://localtonet.com/" target="_blank" className="text-muted text-hover-primary fw-semibold me-2 fs-6">Localtonet</a>
                        </div>
                        <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                            <li className="menu-item">
                                <a href="/documents" target="_blank" className="menu-link px-2">Documents</a>
                            </li>
                            <li className="menu-item">
                                <a href="#" className="menu-link px-5"></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </>
        )
    }
}