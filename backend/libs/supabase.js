const { createClient } = require('@supabase/supabase-js')
const supabase = createClient("https://iorbwclbyciwepqurori.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvcmJ3Y2xieWNpd2VwcXVyb3JpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NzY1MTIsImV4cCI6MTk5MjA1MjUxMn0.ZMdiyphm-5319LuB37tu2tWxUQBG4Rfcun61hLOak3A");

// supabase
//   .from('tunnel_config')
//   .select('*')
//   .limit(1)
//   .then(console.log)
//   .catch(console.error)

const supabaseDb = {
  getTunnelConfig : async  ()=>{
    try{
      const tunnelConfig = await supabase.from("tunnel_config").select("*").limit(1);
      return tunnelConfig.data[0];
    }catch(e){

    }
    return null;
  },  
  updateTunnelConfig : async  (key,obj,oldData)=>{
    try{
      let data;
      if(typeof oldData != "object"){
        data =  await supabaseDb.getTunnelConfig();
      }else{
        data = oldData;
      }
      if(typeof data[key] != "object"){
        data[key] = {};
      }

      for(let prop in obj){
        data[key][prop] = obj[prop];
      }
      // console.log(data);
      const { error } = await supabase
          .from('tunnel_config')
          .update(data)
          .eq('id', data.id);
      
      return data;
    }catch(e){
      console.log(e)
    }
    return null;
  } 
}
// async function main(){
//   let tunnelConfig = await getTunnelConfig();

//   console.log(tunnelConfig)
//   const ngrok_url = "https://egce.ngrok.io";
//   const server_ip = "192.168.0.1";
//   await updateTunnelConfig("config",{ngrok_url, server_ip});
//   tunnelConfig = await getTunnelConfig();

//   console.log(tunnelConfig)
// }

module.exports = {supabaseDb};

// main();