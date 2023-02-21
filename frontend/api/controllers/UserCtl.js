class UserCtl {
	model = null
	constructor(model){
		this.model = model;
	}
	list(req, res){

	  const records = this.model.getList();	
	  res.json({ cmd: "list" , records});
	}
	create(req, res){
	  res.json({ cmd: "create" });
	}
	update(req, res){
	  res.json({ cmd: "update" });
	}
	delete(req, res){
	  res.json({ cmd: "delete" });
	}
	view(req, res){
	  res.json({ cmd: "view" });
	}
	validation(req, res){
	  const isNew = req.query.isNew || false;	
	  res.json({ cmd: "validation" , isNew});
	}
}

export default UserCtl;