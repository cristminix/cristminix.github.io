import React,{Component} from "react";
import db from "../../../../../libs/db";
import socket from "../../../../../libs/socket";
export default class ServerInfo extends React.Component{
    state = {
        configsArray : []
    }
    async getConfigs(){
        try {
          // await firestore.collection('config').doc().set({server_ip:'127.0.0.1'});
          const configs = await db.collection('configs');
          const data = await configs.get();
          const configsArray = [];
          if(data.empty) {
              console.log('data empty');
          }else {
              data.forEach(doc => {
                  
                  configsArray.push(doc.data());
              });
              console.log(configsArray);
              this.setState({configsArray})
  
          }
        } catch (error) {
            console.log(error.message);
        }
  
    }
    initSocket(){
        socket.on("connect",()=>{
            console.log("socket connected");
        })
        socket.on("configServer",(r)=>{
            console.log("configServer changed");
            this.getConfigs();
        })
    }
    async componentDidMount(){
        this.initSocket();
        this.getConfigs();
    }
    render(){
            
        let serverInfoTag = (<tr><td>No Results</td></tr>);
        if(this.state.configsArray){
           serverInfoTag = this.state.configsArray.map((row,index)=>{
                return Object.keys(row).map((prop=>{
                    return (
                        <>
                        <tr key={prop}><td>{prop}</td><td>{row[prop]}</td></tr>
                        </>
                    )
                })) 
                
            })
        }
        return(
            <>
            <div className="col-xl-6 mt-2">
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
    
}