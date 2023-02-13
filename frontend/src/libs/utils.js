export function getServerEndpoint(serverCfg){
    let url = "";
    try{
        if(serverCfg.serviceMap.backend == "bore"){
            url = `http://bore.pub:${serverCfg.config.bore_port}`;
        }
        else if(serverCfg.serviceMap.backend == "ngrok"){
            url = `${serverCfg.config.ngrok_url}`;
        }
        else if(serverCfg.serviceMap.backend == "localtonet"){
            url = `https://${serverCfg.config.localtonet_host}`;
        }
    }catch(e){}
    return url;
}
export function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return '0 Bytes'

    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}