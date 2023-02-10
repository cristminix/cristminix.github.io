import React from "react";

export default function MyApiKey(){

    return(
        <>
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
        </>
    )
}