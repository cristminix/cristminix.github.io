class UserModel{
	columns = {
		id : {type: "int", pk: true},
		username : {type: "string", validation_rule:{required:true}},
		fullname : {type:"string",validation_rule:{required:true}},
		email: {type:"string",validation_rule:{required:true, email:true}}
		password: {type:"string",validation_rule:{required:true}}
	}
}