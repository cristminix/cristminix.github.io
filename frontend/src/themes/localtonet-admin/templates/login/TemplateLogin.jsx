import React from "react";

import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

export function TemplateLogin(){

    return(
        <>
<div class="d-flex flex-column flex-root">
    <div class="d-flex flex-column flex-lg-row flex-column-fluid">
        <LeftSide/>
        <RightSide/>
    </div>
</div>
        </>
    )
}