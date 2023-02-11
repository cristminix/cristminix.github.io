import React from "react";
import { useBetween } from "use-between";

// import socketClient from "../../../../../libs/socketClient";
import useSocketState from "./useSocketState";
const useSharedSocketState = () => useBetween(useSocketState);
let dontRunTwice = 1;
export default function SocketClientInfo(){

   

        const {socketConnected} = useSharedSocketState();
        
    return(
        <>
        <div className="col-xl-full col-md-6 mt-2">
        <div className="card card-h-100">
            <div className="card-body">
                <div className="row">
                    <span className="text-muted mb-3 d-block text-truncate">Socket Client Status</span>
                </div>
                <div className="row">
                    <div>
                        {
                            socketConnected 
                                ? (<i style={{fontSize:"2em",color:"green"}} className="fas fa-toggle-on"></i>)
                                : (<i style={{fontSize:"2em",color:"red"}} className="fas fa-toggle-off"></i>)
                        }
                    
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}