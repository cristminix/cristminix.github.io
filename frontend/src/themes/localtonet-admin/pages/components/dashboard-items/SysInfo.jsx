import React, { useState , useEffect} from "react";
import { useBetween } from "use-between";
import { getServerEndpoint,formatBytes } from "../../../../../libs/utils";
import useServerCfgState from "./useServerCfgState";
const useSharedServerCfgState = () => useBetween(useServerCfgState);
import AppleSvgIcon from "../svg-icons/AppleSvgIcon";
import UbuntuSvgIcon from "../svg-icons/UbuntuSvgIcon";
import LinuxSvgIcon from "../svg-icons/LinuxSvgIcon";
import WindowsSvgIcon from "../svg-icons/WindowsSvgIcon";

const osIcons = {
    apple : AppleSvgIcon,
    darwin : AppleSvgIcon,
    ubuntu : UbuntuSvgIcon,
    linux : LinuxSvgIcon,
    windows : WindowsSvgIcon,
    debian : LinuxSvgIcon,
    redhat : LinuxSvgIcon,
    centos : LinuxSvgIcon
}
export default function SysInfo(){
    const {serverCfg,setServerCfg} = useSharedServerCfgState();

    const [uptime,setUptime] = useState("");
    const [du,setDu] = useState("");
    const [mem,setMem] = useState("");
    const [cpu,setCpu] = useState("");
    const [osInfo,setOsInfo] = useState("");
   
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
    function updateOsInfo(){
        fetch(`${serverEndpoint}/api/sysinfo/getBasicInfo?t=os`,{headers:{'ngrok-skip-browser-warning':1}})
            .then(r=>{
                try{
                    return r.json()
                }catch(e){
                    return {}
                }
            })
            .then(r=>setOsInfo(r));
    }
    function updateCpuInfo(){
        fetch(`${serverEndpoint}/api/sysinfo/getBasicInfo?t=cpu`,{headers:{'ngrok-skip-browser-warning':1}})
            .then(r=>{
                try{
                    return r.json()
                }catch(e){
                    return {}
                }
            })
            .then(r=>setCpu(r));
    }
    function updateMemInfo(){
        fetch(`${serverEndpoint}/api/sysinfo/getBasicInfo?t=mem`,{headers:{'ngrok-skip-browser-warning':1}})
            .then(r=>{
                try{
                    return r.json()
                }catch(e){
                    return {}
                }
            })
            .then(r=>setMem(r));
    }
    function updateUptime(){
        fetch(`${serverEndpoint}/api/sysinfo/getBasicInfo?t=uptime`,{headers:{'ngrok-skip-browser-warning':1}})
            .then(r=>{
                try{
                    return r.json()
                }catch(e){
                    return {}
                }
            })
            .then(r=>setUptime(r));
    }
    useEffect(() => {

        const timer = setInterval(()=>{
            updateDiskInfo()
            updateMemInfo()
            updateCpuInfo()
            updateUptime()

        },5000);

        return () => {
            clearInterval(timer);
        }
    }, [serverEndpoint]);

    useEffect(()=>{
        updateOsInfo()

        const timer = setInterval(()=>{
            updateOsInfo()
            
        },15000*2);

        return () => {
            clearInterval(timer);
        }
    }, [serverEndpoint]);
    
    let diskSize=0,diskFree=0,diskUsage=0,diskPctg,diskFs="";
    try{
        const data = du[0];
        diskFs = data["Filesystem"];
        diskSize = data["1K-blocks"];
        diskFree=data.Available;
        diskUsage=data.Used;
        diskPctg=data["Use%"];
    }catch(e){}

    let memSize,memFree,memPctg;
    try{
        memSize = mem.MemTotal;
        memFree = mem.MemFree;
        memPctg = Math.ceil(memFree/memSize * 100);
    }catch(e){}

    let cpuModel,cpuSpeed,cpuLoad,cpuCore;
    try{
        cpuModel = cpu.model;
        cpuLoad = cpu.load;
        cpuCore = cpu.core;
        cpuSpeed = cpu.speed * 1024;
    }catch(e){}
    let osDistro,osLogo,osPlatform,osArch,osHost,osKernel,OsSvgIcon="",osSvgIcon;
    try{
        const data = osInfo.data;
        osDistro = data.distro;
        osArch = data.arch;
        osHost = data.hostname;
        osKernel = data.kernel;
        osLogo = data.logofile;

        if(typeof osIcons[osLogo] != "undefined"){
            const OsSvgIcon = osIcons[osLogo];
            osSvgIcon = (<OsSvgIcon viewBox="0 0 28 28" width={18} style={{marginLeft:"8px"}} fill="#aaa"/>); 
        }
    }catch(e){}
    return(
        <>
        <div className="col-xl-4 col-md-6 mt-2">
        <div className="card card-h-100">
            <div className="card-body">
                <div className="row">
                    <span className="text-muted mb-3 d-block text-truncate">System Info</span>
                </div>
                <div className="row mb-1">
                    <div className="max-w-7xl mx-auto grid grid-cols-12 ">
                         <div className="col-span-2 row-span-2 text-center pt-0">{osSvgIcon}</div>
                         <div className="col-span-10">
                            <div>{osPlatform}</div>
                              <div>{osDistro} {osArch}</div>
                            <div>{osHost} {osKernel}</div>

                        </div> 
                   </div>
                </div>

                <div className="row mb-1">
                    <div className="max-w-7xl mx-auto grid grid-cols-12 ">
                         <div className="col-span-2 row-span-2 text-center pt-0"><i className="fas fa-microchip" style={{fontSize:"1em"}}></i></div>
                         <div className="col-span-10">
                            <div>{cpuModel}</div>
                            <div className="w-full bg-gray-200 h-1">
                              <div className="bg-blue-600 h-1" style={{width: cpuLoad}}></div>
                            </div>
                            <div>{formatBytes(cpuSpeed,true,1).replace(/GB/,'Ghz')} Core: {cpuCore}</div>

                        </div> 
                   </div>
                </div>
                <div className="row mb-1">
                    <div className="max-w-7xl mx-auto grid grid-cols-12 ">
                         <div className="col-span-2 row-span-2 text-center pt-0"><i className="fas fa-memory" style={{fontSize:"1em"}}></i></div>
                         <div className="col-span-10">
                            <div>{'RAM'}</div>
                            <div className="w-full bg-gray-200 h-1">
                              <div className="bg-blue-600 h-1" style={{width: `${memPctg}%`}}></div>
                            </div>
                            <div>{formatBytes(memFree,true,1)} free of {formatBytes(memSize,true,0)}</div>

                        </div> 
                   </div>
                </div>
                <div className="row">
                    <div className="max-w-7xl mx-auto grid grid-cols-12 ">
                         <div className="col-span-2 row-span-2 text-center pt-0"><i className="fas fa-hdd" style={{fontSize:"1em"}}></i></div>
                         <div className="col-span-10">
                            <div>HDD {diskFs}</div>
                            <div className="w-full bg-gray-200 h-1">
                              <div className="bg-blue-600 h-1" style={{width: diskPctg}}></div>
                            </div>
                            <div>{formatBytes(diskFree,true,1)} free of {formatBytes(diskSize,true,0)}</div>

                        </div> 
                   </div>
                </div>
                
                <div className="row mb-1">
                    <div className="max-w-7xl mx-auto grid grid-cols-12 ">
                         <div className="col-span-2 row-span-2 text-center pt-0"><i className={`fas fa-hourglass-2`} style={{fontSize:"1em"}}></i></div>
                         <div className="col-span-10">
                            <div>UP {uptime.ut_hour} hr {uptime.ut_min} min {uptime.ut_sec} sec</div>

                        </div> 
                   </div>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}