const {getFirestoreData,updateFirestoreData} = require("./firestoreData");

const TunnelConf = {
    getConfig : async()=>{
        return await getFirestoreData('tunnel_config','config');
    },
    getServiceMap : async()=>{
        return await getFirestoreData('tunnel_config','service_map');
    },
    getServiceToken : async()=>{
        return await getFirestoreData('tunnel_config','service_token');
    },
    getPredefineConfig : async()=>{
        return await getFirestoreData('predefine_config');
    },
    updateConfig : async(obj)=>{
        return await updateFirestoreData('tunnel_config','config',obj);
    }
}

module.exports = TunnelConf;