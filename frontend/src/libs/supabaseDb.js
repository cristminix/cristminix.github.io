import { createClient } from '@supabase/supabase-js'

const supabase = createClient("https://iorbwclbyciwepqurori.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvcmJ3Y2xieWNpd2VwcXVyb3JpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NzY1MTIsImV4cCI6MTk5MjA1MjUxMn0.ZMdiyphm-5319LuB37tu2tWxUQBG4Rfcun61hLOak3A")

async function getTunnelConfig() {
    const serverConfig = await supabase.from('tunnel_config').select()
    return serverConfig.data[0];
}

export {
    getTunnelConfig
}