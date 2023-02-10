import React from "react";
import FormFooter from "./components/FormFooter";
import FormLogin from "./components/FormLogin";
export default function LeftSide(props){

    return(
<>
<div class="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
    <FormLogin/>
    <FormFooter/>
</div>
</>
    )
}