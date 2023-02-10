import React from "react";

export default function Downloads(){

    return(
        <>
        <div className="col-xl-6 mt-2">
        <div className="card">
            <div className="card-header align-items-center d-flex">
                <h4 className="card-title mb-0 flex-grow-1">Downloads</h4>
                <div className="flex-shrink-0">
                </div>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-xl-4 col-md-6 col-lg-4 col-sm-6">
                        <a href="/download/localtonet-win-64.zip" className="btn btn-light-primary m-1" style={{width:"100%"}}>
                            Windows (64-bit)
                        </a>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4 col-sm-6">
                        <a href="/download/localtonet-win-32.zip" className="btn btn-light-primary m-1" style={{width:"100%"}}>
                            Windows (32-bit)
                        </a>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4 col-sm-6">
                        <a href="/download/localtonet-win-arm.zip" className="btn btn-light-primary m-1" style={{width:"100%"}}>
                            Windows (ARM)
                        </a>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4 col-sm-6">
                        <a href="/download/localtonet-win-arm64.zip" className="btn btn-light-primary m-1" style={{width:"100%"}}>
                            Windows (ARM-64)
                        </a>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4 col-sm-6">
                        <a href="/download/localtonet-osx-64.zip" className="btn btn-light-warning m-1" style={{width:"100%"}}>
                            MacOS (64-bit)
                        </a>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4 col-sm-6">
                        <a href="/download/localtonet-osx-arm64.zip" className="btn btn-light-warning m-1" style={{width:"100%"}}>
                            MacOS (ARM-64)
                        </a>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4 col-sm-6">
                        <a href="/download/localtonet-linux-x64.zip" className="btn btn-light-success m-1" style={{width:"100%"}}>
                            Linux (64-bit)
                        </a>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4 col-sm-6">
                        <a href="/download/localtonet-linux-arm.zip" className="btn btn-light-success m-1" style={{width:"100%"}}>
                            Linux (ARM)
                        </a>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4 col-sm-6">
                        <a href="/download/localtonet-linux-arm64.zip" className="btn btn-light-success m-1" style={{width:"100%"}}>
                            Linux (ARM-64)
                        </a>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4 col-sm-6">
                        <a target="_blank" href="https://hub.docker.com/r/localtonet/localtonet" className="btn btn-light-info m-1" style={{width:"100%"}}>
                            Docker
                        </a>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4 col-sm-6">
                        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.localtonet.localtonetapp" className="btn btn-light-danger m-1" style={{width:"100%"}}>
                            Android (Google Play)
                        </a>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4 col-sm-6">
                        <a target="_blank" href="https://apps.microsoft.com/store/detail/localtonet/9MZBMT85F2SB" className="btn btn-light-dark m-1" style={{width:"100%"}}>
                            Microsoft Store
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}