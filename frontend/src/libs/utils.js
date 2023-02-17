export const Prx = {
    

    getJson : (url,callback)=>{
        fetch(url,{headers:{'ngrok-skip-browser-warning':1}})
            .then(r=>{
                try{
                    return r.json()
                }catch(e){
                    return {}
                }
            })
            .then(r=>callback(r))
            .catch(e=>{return {}})
    } 
}
export function getServerEndpoint(serverCfg){
    // console.log(serverCfg.service_map)
    let url = "";
    try{
        if(serverCfg.service_map.backend == "bore"){
            url = `http://bore.pub:${serverCfg.config.bore_port}`;
        }
        else if(serverCfg.service_map.backend == "ngrok"){
            url = `${serverCfg.config.ngrok_url}`;
        }
        else if(serverCfg.service_map.backend == "localtonet"){
            url = `https://${serverCfg.config.localtonet_host}`;
        }
    }catch(e){
        // console.log(e)
    }
    return url;
}
export function formatBytes(bytes, incBytes=0,decimals = 2) {
    if (!+bytes) return '0 Bytes'
    const k = 1024
    if(incBytes){
        bytes *= k;
    }    
    
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}