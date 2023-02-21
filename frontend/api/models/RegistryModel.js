const {BaseModel} = require("./BaseModel")
class RegistryModel extends BaseModel{
	columns = {
		id : {type: "int", pk : true},
		key : {type: "string", validatiion_rules:{required:true}},
		value : {type: "string", validatiion_rules: {required:true}} 
	}
}
