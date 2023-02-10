import React from "react";

export default function FormFooter(props){

    return(
<>
<div className="d-flex flex-center flex-wrap px-5">
    <div className="d-flex fw-semibold text-primary fs-base">
        <a href="#terms" className="px-5" target="_blank">Ketentuan Layanan</a>
        <a href="#privacy" className="px-5" target="_blank">Kebijakan Privasi</a>
        <a href="#contact" className="px-5" target="_blank">Kontak Kami</a>
    </div>
</div>
</>
    )
}