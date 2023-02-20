const { createClient } = require('@supabase/supabase-js')
const mainSupabaseConfig = require("./main.supabase.config.josn")
const supabase = createClient(mainSupabaseConfig.url, mainSupabaseConfig.key);

class DBColumn{

}



class BaseModel {
	db = null
	table = null
	columns = null
	getTable(){

	}
	setTable(table){
		this.table = table;
	}
	getColumns(){
		return this.columns;
	}
	select(){

	}
	query(){

	}
	limit(){

	}
	getAll(){

	}
	count(){

	}

}
module.exports = {
	BaseModel
}