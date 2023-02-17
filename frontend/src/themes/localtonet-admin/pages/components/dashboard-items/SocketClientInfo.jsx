import React from "react";
import { useBetween } from "use-between";

import useSocketState from "../../../shared/useSocketState";
import useSocketClient from "../../../shared/useSocketClient";
const useSharedSocketState = () => useBetween(useSocketState);
const useSharedSocketClient = () => useBetween(useSocketClient)

let dontRunTwice = 1;
export default function SocketClientInfo(){
    const {socketConnected} = useSharedSocketState();
    const {socketClient} = useSharedSocketClient();    
    return(
        <>
        <div className="col-xl-4 col-md-6 mt-2">
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
                    <div>{socketClient.id}</div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}