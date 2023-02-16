import React,{Component, useState,useEffect} from "react";
import { useBetween } from "use-between";
import { getServerEndpoint } from "../../../../../libs/utils";
// import db from "../../../../../libs/db";
import socketClient from "../../../../../libs/socketClient";
import useServerCfgState from "./useServerCfgState";
import useSocketState from "./useSocketState";
const useSharedSocketState = () => useBetween(useSocketState);
const useSharedServerCfgState = () => useBetween(useServerCfgState);
import { createClient } from '@supabase/supabase-js'

const supabase = createClient("https://iorbwclbyciwepqurori.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvcmJ3Y2xieWNpd2VwcXVyb3JpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NzY1MTIsImV4cCI6MTk5MjA1MjUxMn0.ZMdiyphm-5319LuB37tu2tWxUQBG4Rfcun61hLOak3A")

async function getServerConfig() {
    const serverConfig = await supabase.from('tunnel_config').select()
    // console.log(countries)
    return serverConfig.data[0];
}
export default function ServerInfo (){
    const [serverConfig,setServerConfig] = useState("");
    const {serverCfg,setServerCfg} = useSharedServerCfgState();
    const {socketConnected,setSocketConnected} = useSharedSocketState();
    async function getServiceMap(){
        try{
            const configs = await db.collection('tunnel_config').doc('service_map');
            const data = await configs.get();
            if(data.exists){
                return data.data();
            }
        }catch(e){
    
        }
        return null;
    }
    // async function getTunnelConfig(){
    //     try{
    //         // const configs = await db.collection('tunnel_config').doc('config');
    //         // const data = await configs.get();
    //         // if(data.exists){
    //         //     return data.data();
    //         // }
    //         let tunnelConfig = await getTunnelConfig();
    //         return tunnelConfig;
    //     }catch(e){
    
    //     }
    //     return null;
    // }
    async function getConfigs(){
        
        console.log("GET CONFIG")
        try {
          const tunnelConfig = await getServerConfig();  
          const serviceMap = tunnelConfig.service_map;  
          const config = tunnelConfig.config;
        //   console.log(config,serviceMap)
          const _serverConfig = {config,serviceMap};
          if(config) {
              
              initSocket(_serverConfig);
   
              setServerConfig(_serverConfig);
              setServerCfg(_serverConfig);

          }
        } catch (error) {
            console.log(error.message);
        }
  
    }
    function initSocket(_serverConfig){
        let url = getServerEndpoint(_serverConfig);
        
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
            getConfigs().then(r=>{});
        },5000);

        return () => {
            clearInterval(timer);
        }
    }, []);

    
    let serverInfoTag = (<tr><td>No Results</td></tr>);
    if(serverConfig.config){
        // serverInfoTag = configsArray.map((row)=>{
            let serverUrl = getServerEndpoint(serverConfig);
            // serverUrl = socketConnected ? `http://bore.pub:${row.bore_port}` : "N/A";
            serverInfoTag = (<>
                <tr>
                    <th>API Url</th><td><a target="_blank" href={serverUrl}>{serverUrl}</a></td>
                </tr>
                <tr>    
                    <th>Server IP</th><td>{serverConfig.config.server_ip}</td>
                </tr>
                </>
            )
            // return Object.keys(row).map(((prop,index)=>{
            //     return (
            //         <tr key={index}>
            //             <th key={index}>{prop}</th><td>{row[prop]}</td>
            //         </tr>
            //     )
            // })) 
            
        // })
    }
    return(
        <>
        <div className="col-xl-12 mt-2">
        <div className="card card-flush">
            <div className="card-header border-0 pt-0">
                <div className="card-title">
                    <div className="d-flex align-items-center position-relative my-1">
                        Server Info
                    </div>
                </div>
                <div className="card-toolbar">
                </div>
            </div>
            <div className="card-body pt-0">
                <div className="hover-scroll-overlay-y pe-6 me-n6" style={{maxHeight: "415px"}}>
                    <table className="table align-middle table-row-dashed fs-6 gy-5 mb-0">
                        <tbody className="fw-semibold text-gray-600">
                            {serverInfoTag}   
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
        </>
    )
    
}