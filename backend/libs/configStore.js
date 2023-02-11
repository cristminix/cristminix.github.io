// const firebase = require('firebase');


// const firebaseConfig = {
//   apiKey: "AIzaSyBpBE9bWyRzaJP8g1cjgGEuciTrvKJDBrE",
//   authDomain: "cristminix-c5687.firebaseapp.com",
//   projectId: "cristminix-c5687",
//   storageBucket: "cristminix-c5687.appspot.com",
//   messagingSenderId: "7808653581",
//   appId: "1:7808653581:web:688ab1ce82143a73d0f844",
//   measurementId: "G-T5KWSRLVM2"
// };
// const db = firebase.initializeApp(firebaseConfig);
// const firestore = db.firestore();

const firebase = require('../db');
// const Student = require('../models/student');
const firestore = firebase.firestore();


const configStore = {
  data : null,
  key: null,
  instance : null,
  getInstance : async ()=>{
    if(configStore.instance){
      return configStore.instance;
    }
    configStore.instance = await firestore.collection('configs');
    console.log("configStore.getInstance");

    return configStore.instance;

  },
  getKey : async()=>{
    if(configStore.key){
      return configStore.key;
    }
    await configStore.getData();
    console.log(`configStore.getKey:${configStore.key}`);
    return configStore.key;
  },
  
  getData : async()=>{
    if(configStore.instance){
      const tmpData = await configStore.instance.get();
      const configsArray = [];
      if(tmpData.empty) {
          console.log('data empty');
          configStore.initData();
      }else {
          tmpData.forEach(doc => {
              // console.log(doc.id);
              let data = doc.data();
              data.__key__ = doc.id;
              configsArray.push(data);
          });
      }
      if(configsArray){
        configStore.data = configsArray[0];
        configStore.key = configStore.data.__key__;
        delete configStore.data.__key__;
      }
      console.log("configStore.getData");

    }

  },
  updateData : async(newData)=>{
    for(let prop in newData){
      configStore.data[prop] = newData[prop];
    }
    
    await configStore.instance.doc(configStore.key).update(configStore.data);
    return configStore.data;
    console.log("configStore.updateData");
  },
  initData : async()=>{
    const configData = {
      bore_port : null,
      server_ip : null,
      server_port : 8088
    }
    configStore.data = configData;
    await configStore.instance.doc(configStore.key).update(configStore.data);
    configStore.init();

  },
  init : async() => {
    await configStore.getInstance();
    await configStore.getKey();
  }
}

module.exports = {configStore};