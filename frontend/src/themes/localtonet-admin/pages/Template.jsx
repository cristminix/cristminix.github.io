import React,{ useEffect} from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Aside from "./components/Aside"
import DashboardContent from "./components/DashboardContent";
import ServicesContent from "./components/ServicesContent";
import { getServerEndpoint } from "../../../libs/utils";
import { getTunnelConfig } from "../../../libs/supabaseDb";
import { io } from "socket.io-client";

import { useBetween } from "use-between";
import useSocketClient from "../shared/useSocketClient";
import useSocketState from "../shared/useSocketState";
import useServerCfgState from "../shared/useServerCfgState";

const useSharedServerCfgState = () => useBetween(useServerCfgState);
const useSharedSocketState = () => useBetween(useSocketState);
const useSharedSocketClient = () => useBetween(useSocketClient)

import "../assets/css/style.bundle.css";
import "../assets/css/admin.css"

export default function Template(){
    const {serverCfg,setServerCfg} = useSharedServerCfgState();
    const {socketConnected,setSocketConnected} = useSharedSocketState();
    const {socketClient,setSocketClient} = useSharedSocketClient();
    let socketReconnecting = false;
    let socket = null;
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
    const createSocket = ()=>{
        const url = getServerEndpoint(serverCfg);
        if(!url){
            console.log("skip initSocket: url empty")
        }
        console.log(`initSocket ${url}`)
        socket = io(url,{
            reconnection: false,
            extraHeaders: {
                'ngrok-skip-browser-warning':1
            }
        });
        socket.on("connect",() => {
            setSocketConnected(true);

            socket.on("disconnect",()=>{
                console.log("socket disconnect")
                setSocketConnected(false);
                // socketClient.changeUrl(url);
                reconnectSocket();

            });
        });

        setSocketClient(socket);
    }
    
    const reconnectSocket = ()=>{
        setTimeout(()=>{
            console.log("reconnecting in 5 second");
            createSocket();
        },5000);
    }
    const initSocket = ()=>{
        // console.log(socketClient);
        
        let socketMustBeCreated = false;

        if(!socketClient){
            socketMustBeCreated = true;
        }
        else if(typeof socketClient == "object"){
            setSocketConnected(socketClient.connected);

            if(!socketClient.connected){
                socketMustBeCreated = true;
            }
        }
        if(socketMustBeCreated){
            if(socketReconnecting){
                console.log("skip initSoket: caused reconnecting");
                return;
            }
            
            createSocket();
        }

    }
    useEffect(() => {
        const timer = setInterval(()=>{
            getServerConfig().then(dummy=>{});
        },5000);

        return () => {
            clearInterval(timer);
        }
    }, [serverCfg,socket,socketClient]);

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