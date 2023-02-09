import React from "react"
import NavSideBarMenu from "./NavSideBarMenu"
import Main from "./Main"
export default class Container extends React.Component{

    render(){
        return(
            <>
            <div className="container-fluid">
                <div className="row">
                    <NavSideBarMenu/>
                    <Main/>
                </div>
            </div>
            </>
        )
    }
}