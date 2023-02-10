import React from "react";
import LogOutSvgIcon from "./svg-icons/LogOutSvgIcon"
export default class SideFooter extends React.Component{

    render(){
        return(
            <>
            <div className="aside-footer flex-column-auto px-6 px-lg-9" id="kt_aside_footer">
                    <div className="d-flex flex-stack ms-7">
                        <a className="btn btn-sm btn-icon btn-active-color-primary btn-icon-gray-600 btn-text-gray-600" href="/logout">
                            <span className="svg-icon svg-icon-1 me-2">
                                <LogOutSvgIcon/>
                            </span>
                            <span className="d-flex flex-shrink-0 fw-bold">Keluar</span>
                        </a>
                    </div>
                </div>
            </>
        )
    }
}