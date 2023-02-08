import React from "react"
import Dashboard from "./Dashboard"
export default class Main extends React.Component{

    render(){
        return(
            <>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Dashboard/>
            </main>
            </>
        )
    }
}