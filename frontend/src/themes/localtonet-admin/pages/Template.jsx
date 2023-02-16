import React from "react";

import Aside from "./components/Aside"
import DashboardContent from "./components/DashboardContent";
// import "../assets/plugins/custom/fullcalendar/fullcalendar.bundle.css";
// import "../assets/plugins/custom/datatables/datatables.bundle.css";
// import "../assets/plugins/global/plugins.bundle.css";
import "../assets/css/style.bundle.css";
// import "../assets/plugins/global/jquery-confirm/css/jquery-confirm.min.css";
// import "../assets/plugins/custom/froala/froala_editor.pkgd.min.css";
// import "../assets/plugins/custom/top-notification-bar-topper/css/topper.css";
import "../assets/css/admin.css"

export default function Template(){
    document.title = "Dashboard";
        return(
<>
    <div className="page d-flex flex-row flex-column-fluid">
        <Aside/>
        <DashboardContent/>
    </div>
</>
        )
}