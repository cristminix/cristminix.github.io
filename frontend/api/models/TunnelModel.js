const {BaseModel} = require("./BaseModel")
class TunnelModel extends BaseModel{
	columns = {
		id : {type: "int", pk: true},
		name : {type: "string", validation_rules:{requires:true}},
		model: {type: "enum", values:["ngrok","bore","localtonet"]}
	}
}