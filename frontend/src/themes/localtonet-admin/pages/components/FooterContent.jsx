import React from "react";

export default function FooterContent(){

    return(
        <>
<div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
    <div className="container-fluid d-flex flex-column flex-md-row flex-stack">
        <div className="text-dark order-2 order-md-1">
            <span className="text-gray-400 fw-semibold me-1">Dibuat Oleh</span>
            <a href="#" target="_blank" className="text-muted text-hover-primary fw-semibold me-2 fs-6">{`cristminix <cristminix@gmail.com>`}</a>
        </div>
        <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
            <li className="menu-item">
                <a href="#documents" target="_blank" className="menu-link px-2">Dokumentasi</a>
            </li>
            <li className="menu-item">
                <a href="#" className="menu-link px-5"></a>
            </li>
        </ul>
    </div>
</div>
        </>
    )
}