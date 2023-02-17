import { getServerEndpoint } from "../../../../../libs/utils";
import useServerCfgState from "../../../shared/useServerCfgState";
import { useBetween } from "use-between";

const useSharedServerCfgState = () => useBetween(useServerCfgState);


export default function ServerInfo (){
    const {serverCfg} = useSharedServerCfgState();
    
    let serverInfoTag = (<tr><td>No Results</td></tr>);
    if(serverCfg.config){
            let serverUrl = getServerEndpoint(serverCfg);
            serverInfoTag = (<>
                <tr>
                    <th>API Url</th><td><a target="_blank" href={serverUrl}>{serverUrl}</a></td>
                </tr>
                <tr>    
                    <th>Server IP</th><td>{serverCfg.config.server_ip}</td>
                </tr>
                </>
            )
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