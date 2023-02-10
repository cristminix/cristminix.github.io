import React from "react";

import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

export default function TemplateLogin(){

    return(
        <>
<div className="d-flex flex-column flex-root">
    <div className="d-flex flex-column flex-lg-row flex-column-fluid">
        <LeftSide/>
        <RightSide/>
    </div>
</div>
        </>
    )
}