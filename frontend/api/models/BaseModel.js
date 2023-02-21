import DBDriverFactory from "./drivers/DBDriverFactory";

export default class BaseModel{
	db = null
	table = null
	columns = null
	constructor(config){
		this.db = DBDriverFactory.create(config);
	}
	getTable(){
		return this.table
	}
	setTable(table){
		this.table = table;
	}
	getColumns(){
		return this.columns;
	}

	getList(filter){
		if(filter){

		}
		// console.log(instanceof this.db )
		if(this.db){

		}
	}

	getCount(){

	}

	insert(row){

	}

	update(pk, row){

	}

	delete(pk){

	}

	loadFixtures(){

	}
} 
