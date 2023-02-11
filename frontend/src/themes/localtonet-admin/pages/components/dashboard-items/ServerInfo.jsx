import React,{Component, useState} from "react";
import { useBetween } from "use-between";

import db from "../../../../../libs/db";
import socketClient from "../../../../../libs/socketClient";
import useSocketState from "./useSocketState";
const useSharedSocketState = () => useBetween(useSocketState);



let dontRunTwice = true;
export default function ServerInfo (){
    const [configsArray,setConfigsArray] = useState("");


    const {socketConnected,setSocketConnected} = useSharedSocketState();
    async function getConfigs(){

        console.log("GET CONFIG")
        try {
          const configs = await db.collection('configs');
          const data = await configs.get();
          const _configsArray = [];
          if(data.empty) {
              console.log('data empty');
          }else {
              data.forEach(doc => {
                  _configsArray.push(doc.data());
              });
              
              initSocket(_configsArray);
   
              setConfigsArray(_configsArray);

              setTimeout(()=>{
                async function updateConfig(){
                    await getConfigs();
                }

                updateConfig().then(r=>{});
              },5000);
          }
        } catch (error) {
            console.log(error.message);
        }
  
    }
    function initSocket(_configArray){
        
        const serverInfo = _configArray[0];
        const url = `ws://bore.pub:${serverInfo.bore_port}`;
        
        // console.log(`initSocket ${url} == ${socketClient.url}`)
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
    async function componentDidMount(){

        
        if(dontRunTwice){
            console.log(`please ${dontRunTwice}`);
            await getConfigs()
           
            socketClient.setup(socketClient.url);
            // console.log(socketClient)

        }
        dontRunTwice = false;
    }
    
    componentDidMount().then(r=>{
        console.log(r)
    })
    
    let serverInfoTag = (<tr><td>No Results</td></tr>);
    if(configsArray){
        serverInfoTag = configsArray.map((row)=>{
            const serverUrl = socketConnected ? `http://bore.pub:${row.bore_port}` : "N/A";
            return (
                <tr>
                    <th>API Url</th><td><a target="_blank" href={serverUrl}>{serverUrl}</a></td>
                    <th>Server IP</th><td>{row.server_ip}</td>
                </tr>
            )
            // return Object.keys(row).map(((prop,index)=>{
            //     return (
            //         <tr key={index}>
            //             <th key={index}>{prop}</th><td>{row[prop]}</td>
            //         </tr>
            //     )
            // })) 
            
        })
    }
    return(
        <>
        <div className="col-xl mt-2">
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