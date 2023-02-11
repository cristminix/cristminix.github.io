const firebase = require('../db');
const firestore = firebase.firestore();
async function getFirestoreData(collectionName, key){
    try {
        let doc; 
        key = key || false;
        if(key){
            doc = await firestore.collection(collectionName).doc(key);
        }else{
            doc = await firestore.collection(collectionName);
        }   
        const data = await doc.get();
        if(key){
            if(!data.exists) {
                return 'norecord';
            }else {
                return data.data();
            }
        }else{
            if(data.empty) {
                return 'norecord';
            }else {
                const list = [];
                data.forEach(doc => {
                    list.push(doc.data());
                });
                return list;
            }
        }
        
    } catch (error) {
        return error.message;
    }
}

async function updateFirestoreData(collectionName,key,obj){
    try{
        let oldData = await getFirestoreData(collectionName,key);
        for(let prop in obj){
            oldData[prop] = obj[prop];
        }
        await firestore.collection(collectionName).doc(key).update(oldData);
        return oldData;
    }catch(e){
        return e.message;
    }
    
}
module.exports = {getFirestoreData,updateFirestoreData};