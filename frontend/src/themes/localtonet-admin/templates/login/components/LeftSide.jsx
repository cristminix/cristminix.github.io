import React from "react";
import FormFooter from "./FormFooter";
import FormLogin from "./FormLogin";
export default function LeftSide(props){

    return(
<>
<div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
    <FormLogin/>
    <FormFooter/>
</div>
</>
    )
}