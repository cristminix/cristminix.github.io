import io from "socket.io-client"

const wsServer = "http://localhost:8088";

const socketClient = {
    instance : null,
    url : "http://localhost:8088",
    callbacks : {
        connect : [()=>{
            console.log(`socketClient connected at ${socketClient.url}`);
        }],
        disconnect : [()=>{
            console.log(`socketClient disconnected at ${socketClient.url}`);
        }],
        serverInfo : [()=>{
            console.log(`socketClient serverInfo at ${socketClient.url}`);
        }],
    },
    callbackFn:{
        connect : ()=>{
            socketClient.callbacks.connect.map(callback=>{
                callback();
            })
        },
        disconnect : ()=>{
            socketClient.callbacks.disconnect.map(callback=>{
                callback();
            })
        },
        serverInfo : (data)=>{
            socketClient.callbacks.serverInfo.map(callback=>{
                callback(data);
            })
        }
    },
    destroy : ()=>{
        console.log("socketClient.destroy()")

        try{

            socketClient.instance.off("connect", socketClient.callbackFn.connect);
            socketClient.instance.off("disconnect", socketClient.callbackFn.disconnect);
            socketClient.instance.off("serverInfo", socketClient.callbackFn.serverInfo);
            socketClient.instance.close();
            delete socketClient.instance;
            socketClient.instance = null;

        }catch(e){
            console.log(e);
        }
    },
    setup:(url)=>{
        console.log("socketClient.setup()")
        socketClient.url = url;
        socketClient.init();
    },
    changeUrl:(url)=>{
        console.log("socketClient.changeUrl()")

        socketClient.url = url;
        socketClient.destroy();
        socketClient.init();
    },
    setUrl:(url)=>{
        socketClient.url = url;
    },
    init : ()=>{
        socketClient.instance = io(socketClient.url,{
            reconnection: false,
            extraHeaders: {
            'ngrok-skip-browser-warning':1
            }
        });
        socketClient.instance.on("connect",()=>{
            socketClient.callbackFn.connect();
            socketClient.instance.on("disconnect",socketClient.callbackFn.disconnect);
            socketClient.instance.on("serverInfo", socketClient.callbackFn.serverInfo);
        });
        

    }

};

export default socketClient;