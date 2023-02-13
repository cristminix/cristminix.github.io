import React, { useState } from "react";
import { useBetween } from "use-between";
import { getServerEndpoint,formatBytes } from "../../../../../libs/utils";
import useServerCfgState from "./useServerCfgState";
const useSharedServerCfgState = () => useBetween(useServerCfgState);

export default function SysInfo(){
    const {serverCfg,setServerCfg} = useSharedServerCfgState();
    const serverEnpoint = getServerEndpoint(serverCfg);

    const [du,setDu] = useState("");
    fetch(`${serverEnpoint}/api/sysinfo/getBasicInfo?t=disk`,{headers:{'ngrok-skip-browser-warning':1}})
    .then(r=>{return r.json()})
    .then(r=>setDu(r));
    /*
    {"data":[{"fs":"C:","type":"NTFS","size":128033222656,"used":85794418688,"available":42238803968,"use":67.01,"mount":"C:","rw":true}]}
    */
    let diskSize=0,diskFree=0,diskUsage=0;
    try{
        const data = du.data[0];
        diskSize = data.size;
        diskFree=data.available;
        diskUsage=data.used;
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
                    <h4>
                        <div>Disk size : {formatBytes(diskSize)}</div>
                        <div>Usage:{formatBytes(diskUsage)}</div>
                        <div>Free:{formatBytes(diskFree)}</div>
                    </h4>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}