import DataTable from 'react-data-table-component';
import React, { useState , useEffect} from "react";
import { useBetween } from "use-between";
import { Prx, getServerEndpoint,formatBytes } from "../../../../../libs/utils";
import useServerCfgState from "../../../shared/useServerCfgState";
const useSharedServerCfgState = () => useBetween(useServerCfgState);




function MyComponent() {
    const {serverCfg} = useSharedServerCfgState();
    const serverEndpoint = getServerEndpoint(serverCfg);
    const fetchData = (url,callback)=>{
        if(serverEndpoint){
            Prx.getJson(url,callback);
        }
    }
    const queryService = (t,cb) => fetchData(`${serverEndpoint}/api/service?t=${t}`,cb);
    const columns = [
        {
            name: 'Service Name',
            selector: row => row.service,
        },
        {
            name: 'Status',
            selector: row => row.status,
        },
        ,
        {
            name: 'Info',
            selector: row => row.info,
        },
    ];
    const [data,setData] = useState(
        [
            {
                id: 1,
                service: 'ssh',
                status: "idle",
                info: 'n/a',
            },
            {
                id: 2,
                service: 'api',
                status: 'idle',
                info:"n/a"
            },
        ]
    );
    // const tmpData = 

    useEffect(()=>{
        // if(!data)
        //     setData(tmpData);

        queryService('ssh',(r)=>{
            let _data = data;
            _data[0].status = "running";
            _data[0].info = `${r.host}:${r.port}`;
            setData(_data);
            // console.log(r);
        });
        queryService('api',(r)=>{
            let _data = data;
            _data[1].status = "running";
            _data[1].info = `${r.api_url}:${r.server_api}`;
            setData(_data);
            // console.log(r);
        })

        // return true;

    },[serverCfg,data])
    return (
        <DataTable
            columns={columns}
            data={data}
        />
    );
};
export default function Overview(){

   
    return(
        <>
        <div className="col-xl col-md-12 mt-2">
        <div className="card card-h-100">
            <div className="card-body">
                <div className="row">
                    <span className="text-muted mb-3 d-block text-truncate">Overview</span>
                </div>
                <div className="row">
                    
                    <MyComponent/>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}