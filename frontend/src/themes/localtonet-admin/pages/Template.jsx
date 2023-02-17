import React,{ useState,useEffect} from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Aside from "./components/Aside"
import DashboardContent from "./components/DashboardContent";
import ServicesContent from "./components/ServicesContent";
import { getServerEndpoint } from "../../../libs/utils";
import { getTunnelConfig } from "../../../libs/supabaseDb";
import socketClient from "../../../libs/socketClient";


import { useBetween } from "use-between";
import useSocketState from "../shared/useSocketState";
import useServerCfgState from "../shared/useServerCfgState";

const useSharedServerCfgState = () => useBetween(useServerCfgState);
const useSharedSocketState = () => useBetween(useSocketState);


import "../assets/css/style.bundle.css";
import "../assets/css/admin.css"

export default function Template(){
    const {serverCfg,setServerCfg} = useSharedServerCfgState();
    const {setSocketConnected} = useSharedSocketState();

    const getServerConfig = async () => {
        console.log(`getServerConfig`);
        try {
            const tunnelConfig = await getTunnelConfig();
            if(tunnelConfig) {
                setServerCfg(tunnelConfig);
                // SET SOCKET VAR
                initSocket();
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    const initSocket = ()=>{
        let url = getServerEndpoint(serverCfg);
        
        if(socketClient.url != url){
            console.log(`initSocket ${url}`)
            socketClient.changeUrl(url);
            socketClient.instance.on("connect",()=>{
                setSocketConnected(true);
                socketClient.instance.on("disconnect",()=>{
                    setSocketConnected(false);
                });
            });
        }

    }
    useEffect(() => {
        const timer = setInterval(()=>{
            getServerConfig().then(dummy=>{});
        },5000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    document.title = "Dashboard";
        return(
<>
    <div className="page d-flex flex-row flex-column-fluid">
        <Router>
            <Aside/>
            <Routes>
                <Route exac path="/" element={<DashboardContent/>}></Route>
                <Route exac path="/dashboard" element={<DashboardContent/>}></Route>
                <Route exac path="/services" element={<ServicesContent/>}></Route>
            </Routes>
            
        </Router>
    </div>
</>
        )
}