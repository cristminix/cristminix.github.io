import DBDriver from "./DBDriver"
export default class JsonDriver extends DBDriver{
	path = null
	// config = null
	constructor(config){
		super(config)
		// this.config = config;
		this.path = this.config.path;
	}
	getPath(){
		return this.path
	}
}

