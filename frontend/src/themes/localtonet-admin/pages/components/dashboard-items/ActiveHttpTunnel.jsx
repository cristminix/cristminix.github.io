import React from "react";

export default function ActiveHttpTunnel(){

    return(
        <>
        <div className="col-xl-6 mt-2">
        <div className="card card-flush">
            <div className="card-header border-0 pt-0">
                <div className="card-title">
                    <div className="d-flex align-items-center position-relative my-1">
                        Active HTTP Tunnels
                    </div>
                </div>
                <div className="card-toolbar">
                </div>
            </div>
            <div className="card-body pt-0">
                <div className="hover-scroll-overlay-y pe-6 me-n6" style={{maxHeight: "415px"}}>
                    <table className="table align-middle table-row-dashed fs-6 gy-5 mb-0">
                        <tbody className="fw-semibold text-gray-600">
                                <tr><td>No Results</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}