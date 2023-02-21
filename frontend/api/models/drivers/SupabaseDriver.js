import DBDriver from "./DBDriver"
const { createClient } = require('@supabase/supabase-js')
const mainSupabaseConfig = require("./main.supabase.config.josn")
const supabase = createClient(mainSupabaseConfig.url, mainSupabaseConfig.key);

class DBColumn{

}

class SupabaseDriver extend DBDriver{

}