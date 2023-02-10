import React from "react";

import Aside from "./components/Aside"
import Wrapper from "./components/Wrapper";
export default function Dashboard(){
        return(
<>
    <div className="page d-flex flex-row flex-column-fluid">
        <Aside/>
        <Wrapper/>
    </div>
</>
        )
}