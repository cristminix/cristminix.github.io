class ClusterModel {
	columns = {
		id : {type: "int", pk : "true"},
		name : {type: "string", validation_rule:{required: true}},
		model : {type: "enum", values:["gce","aws","azure","custom"], validation_rule:{required:true}},
		model_custom : {type: "string"},
		created: {type:"date"},
		updated: {type:"date"}
		created_by: {type: "int", ref:"UserModel"}
	}
}