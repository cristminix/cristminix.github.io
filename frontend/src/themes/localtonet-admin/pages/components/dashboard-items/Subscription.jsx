import React from "react";
import { createClient } from '@supabase/supabase-js'

  const supabase = createClient("https://iorbwclbyciwepqurori.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvcmJ3Y2xieWNpd2VwcXVyb3JpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NzY1MTIsImV4cCI6MTk5MjA1MjUxMn0.ZMdiyphm-5319LuB37tu2tWxUQBG4Rfcun61hLOak3A")

  async function getServerConfig() {
    const serverConfig = await supabase.from('tunnel_config').select()
    // console.log(countries)
    return serverConfig;
  }

  
export default function Subscription(){

    getServerConfig().then(r=>{
        console.log(r)
    })
    return(
        <>
        <div className="col-xl-4 col-md-6 mt-2">
        <div className="card card-h-100">
            <div className="card-body">
                <div className="row">
                    <span className="text-muted mb-3 d-block text-truncate">Langganan</span>
                </div>
                <div className="row">
                    <h4>
                        <span>{'Gratis'}</span>
                    </h4>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}