import React from "react";
import DashboardSvgIcon from "./svg-icons/DashboardSvgIcon";
import BrowsePlanSvgIcon from "./svg-icons/BrowsePlanSvgIcon";
import HistorySvgIcon from "./svg-icons/HistorySvgIcon";
import MySubcriptionSvgIcon from "./svg-icons/MySubscriptionSvgIcon";
import MyTokenSvgIcon from "./svg-icons/MyTokenSvgIcon";
import MyTunnelSvgIcon from "./svg-icons/MyTunnelSvgIcon";

export default class SideMenu extends React.Component{

    render(){
        return(
            <>
<div className="aside-menu flex-column-fluid ps-3 ps-lg-5 pe-1 mb-9" id="kt_aside_menu">
                    <div className="w-100 hover-scroll-overlay-y pe-2 me-2" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_user, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside, #kt_aside_menu, #kt_aside_menu_wrapper" data-kt-scroll-offset="0">
                        <div className="menu menu-column menu-rounded menu-sub-indention menu-active-bg fw-semibold" id="#kt_aside_menu" data-kt-menu="true">
                            <div className="menu-item">
                                <a className="menu-link" href="/Dashboard">
                                    <span className="menu-icon">
                                        <span className="svg-icon svg-icon-2">
                                        <DashboardSvgIcon viewBox="0 0 24 24"/>
                                        </span>
                                    </span>
                                    <span className="menu-title">Dashboard</span>
                                </a>
                            </div>
                            <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
                                <span className="menu-link">
                                    <span className="menu-icon">
                                        <span className="svg-icon svg-icon-2">
                                            <MyTunnelSvgIcon viewBox="0 0 24 24"/>
                                        </span>
                                    </span>
                                    <span className="menu-title">My Tunnels</span>
                                    <span className="menu-arrow"></span>
                                </span>
                                <div className="menu-sub menu-sub-accordion">
                                    <div className="menu-item">
                                        <a className="menu-link" href="/tunnel/http">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">HTTP</span>
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a className="menu-link" href="/tunnel/tcpudp">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">TCP - UDP</span>
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a className="menu-link" href="/tunnel/fileserver">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">File Server</span>
                                        </a>
                                    </div>
                                    <div className="menu-item">
                                        <a className="menu-link" href="/tunnel/proxyserver">
                                            <span className="menu-bullet">
                                                <span className="bullet bullet-dot"></span>
                                            </span>
                                            <span className="menu-title">Proxy Server</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-item">
                                <a className="menu-link" href="/subscription/usersubscriptions">
                                    <span className="menu-icon">
                                        <span className="svg-icon svg-icon-2">
                                            <MySubcriptionSvgIcon viewBox="0 0 24 24"/>
                                        </span>
                                    </span>
                                    <span className="menu-title">My Subscriptions</span>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a className="menu-link" href="/usertoken">
                                    <span className="menu-icon">
                                        <span className="svg-icon svg-icon-2">
                                            <MyTokenSvgIcon viewBox="0 0 24 24"/>
                                        </span>
                                    </span>
                                    <span className="menu-title">Token Saya</span>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a className="menu-link" href="/subscription">
                                    <span className="menu-icon">
                                        <span className="svg-icon svg-icon-2">
                                            <BrowsePlanSvgIcon viewBox="0 0 24 24"/>
                                        </span>
                                    </span>
                                    <span className="menu-title">Browse Plan</span>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a className="menu-link" href="/Order">
                                    <span className="menu-icon">
                                        <span className="svg-icon svg-icon-2">
                                            <HistorySvgIcon viewBox="0 0 24 24"/>
                                        </span>
                                    </span>
                                    <span className="menu-title">Order History</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>            
            </>
        )
    }
}