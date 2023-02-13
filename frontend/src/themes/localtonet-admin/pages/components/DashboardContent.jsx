import React from "react";

import Subscription from "./dashboard-items/Subscription";
import MyToken from "./dashboard-items/MyToken";
import Bandwidth from "./dashboard-items/Bandwidth";
import MyApiKey from "./dashboard-items/MyApiKey";
import ActiveHttpTunnel from "./dashboard-items/ActiveHttpTunnel";
import ActiveTcpUdpTunnel from "./dashboard-items/ActiveTcpUdpTunnel";
import Documents from "./dashboard-items/Documents";
import Downloads from "./dashboard-items/Downloads";
import FooterContent from "./FooterContent";
import HeaderContent from "./HeaderContent";
import ServerInfo from "./dashboard-items/ServerInfo";
import SocketClientInfo from "./dashboard-items/SocketClientInfo";
import SysInfo from "./dashboard-items/SysInfo";

export default class DashboardContent extends React.Component{

    render(){
        return(
            <>
   <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                <HeaderContent title="Dashboard"/>

                <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                    <div className="container-fluid" id="kt_content_container">
                        <div className="row">
                            <Subscription/>
                            <SysInfo/>
                            <SocketClientInfo/>

                            <ServerInfo/>
                            {/* <MyToken/>
                            <Bandwidth/>
                            <MyApiKey/> */}
                        </div>
                        {/* <div className="row mt-3">
                            <ActiveHttpTunnel/>
                            <ActiveTcpUdpTunnel/>
                        </div>
                        <div className="row mt-3">
                            <Documents/>
                            <Downloads/>
                        </div> */}
                    </div>
                </div>
                <FooterContent/>
            </div>
            </>
        )
    }
}