import React, { useState , useEffect} from "react";
import { useBetween } from "use-between";
import { getServerEndpoint,formatBytes } from "../../../../../libs/utils";
import useServerCfgState from "./useServerCfgState";
const useSharedServerCfgState = () => useBetween(useServerCfgState);

export default function SysInfo(){
    const {serverCfg,setServerCfg} = useSharedServerCfgState();

    const [du,setDu] = useState("");
   
    let serverEndpoint;
    serverEndpoint = getServerEndpoint(serverCfg);
    function updateDiskInfo(){
        fetch(`${serverEndpoint}/api/sysinfo/getBasicInfo?t=disk`,{headers:{'ngrok-skip-browser-warning':1}})
            .then(r=>{
                try{
                    return r.json()
                }catch(e){
                    return {}
                }
            })
            .then(r=>setDu(r));
    }
    useEffect(() => {

        const timer = setInterval(()=>{
            updateDiskInfo()
        },5000);

        return () => {
            clearInterval(timer);
        }
    }, [serverEndpoint]);
    /*
    {"data":[{"fs":"C:","type":"NTFS","size":128033222656,"used":85794418688,"available":42238803968,"use":67.01,"mount":"C:","rw":true}]}
    df
    [
    {
        "Filesystem": "/dev/sda1",
        "1K-blocks": "10253588",
        "Used": "7971516",
        "Available": "1741504",
        "Use%": "83%",
        "Mounted": "/"
    }
]
    */
    let diskSize=0,diskFree=0,diskUsage=0,diskPctg,diskFs="";
    try{
        const data = du[0];
        diskFs = data["Filesystem"];
        diskSize = data["1K-blocks"];
        diskFree=data.Available;
        diskUsage=data.Used;
        diskPctg=data["Use%"];
    }catch(e){

    }
    return(
        <>
        <div className="col-xl-4 col-md-6 mt-2">
        <div className="card card-h-100">
            <div className="card-body">
                <div className="row">
                    <span className="text-muted mb-3 d-block text-truncate">System Info</span>
                </div>
                <div className="row">
                    <div className="max-w-7xl mx-auto grid grid-cols-12 ">
                         <div className="col-span-2 row-span-2 text-center pt-0"><i className="fas fa-hdd" style={{fontSize:"1em"}}></i></div>
                         <div className="col-span-10">
                            <div>{diskFs}</div>
                            <div className="w-full bg-gray-200 h-1">
                              <div className="bg-blue-600 h-1" style={{width: diskPctg}}></div>
                            </div>
                            <div>{formatBytes(diskFree,true,1)} free of {formatBytes(diskSize,true,0)}</div>

                        </div> 
                   </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}