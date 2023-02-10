import React from "react";

export default function Bandwidth(){

    return(
        <>
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
        </>
    )
}