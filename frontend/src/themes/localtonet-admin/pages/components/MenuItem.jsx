import React from "react";

import DashboardSvgIcon from "./svg-icons/DashboardSvgIcon";
import BrowsePlanSvgIcon from "./svg-icons/BrowsePlanSvgIcon";
import HistorySvgIcon from "./svg-icons/HistorySvgIcon";
import MySubcriptionSvgIcon from "./svg-icons/MySubscriptionSvgIcon";
import MyTokenSvgIcon from "./svg-icons/MyTokenSvgIcon";
import MyTunnelSvgIcon from "./svg-icons/MyTunnelSvgIcon";

const icons = {
    dashboard : DashboardSvgIcon,
    browsePlan : BrowsePlanSvgIcon,
    history : HistorySvgIcon,
    subscription : MySubcriptionSvgIcon,
    token : MyTokenSvgIcon,
    tunnel : MyTunnelSvgIcon
} 

export default function MenuItem(props){
    const link = props.link;
    const icon = props.icon;
    const caption = props.caption;
    
    const hasIcon = typeof icons[icon] != "undefined" ? true : false;
    const hasBullet = props.bullet || false;
    const hasChild = props.hasChild || false;
    const arrow = "";
    
    let iconTag = "";
    let Icon;
    let bulletTag = "";
    if(hasBullet){
        bulletTag = (
            <span className="menu-bullet">
                <span className="bullet bullet-dot"></span>
            </span>
        )
    }
    if(hasIcon){
        Icon = icons[icon];
        iconTag = (<span className="menu-icon">
                    <span className="svg-icon svg-icon-2">
                        <Icon viewBox="0 0 24 24"/>
                    </span>
                </span>)
    }


    if(hasChild){
        return (
            <>
            <span className="menu-link">
                    {bulletTag}
                    {iconTag}
                    <span className="menu-title">{caption}</span>
                    <span className="menu-arrow"></span>
                </span>
            </>
        )
    }
    return (
        <>
        <div className="menu-item">
            <a className="menu-link" href={link}>
                {bulletTag}
                {iconTag}
                <span className="menu-title">{caption}</span>
            </a>
        </div>
        {arrow}
        </>
    )
}