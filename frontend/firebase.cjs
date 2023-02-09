const firebase = require('firebase');


const firebaseConfig = {
  apiKey: "AIzaSyBpBE9bWyRzaJP8g1cjgGEuciTrvKJDBrE",
  authDomain: "cristminix-c5687.firebaseapp.com",
  projectId: "cristminix-c5687",
  storageBucket: "cristminix-c5687.appspot.com",
  messagingSenderId: "7808653581",
  appId: "1:7808653581:web:688ab1ce82143a73d0f844",
  measurementId: "G-T5KWSRLVM2"
};
const db = firebase.initializeApp(firebaseConfig);
const firestore = db.firestore();

async function main(){  

  try {
        await firestore.collection('config').doc().set({server_ip:'127.0.0.1'});
        const configs = await firestore.collection('configs');
        const data = await configs.get();
        const configsArray = [];
        if(data.empty) {
            console.log('data empty');
        }else {
            data.forEach(doc => {
                
                configsArray.push(doc.data());
            });
            console.log(configsArray);

        }
    } catch (error) {
        console.log(error.message);
    }

  process.exit(0);
}

main()