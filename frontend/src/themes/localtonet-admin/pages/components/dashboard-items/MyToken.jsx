import React from "react";

export default function MyToken(){

    return(
        <>
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
        </>
    )
}