import JsonDriver from "./JsonDriver"
export default class DBDriverFactory {

	static create(config){
		const profileName = config.connection_enabled;
		const profile = config.connection_available[profileName];
		// console.log(profile)

		if(profile.type == "json"){
			return new JsonDriver(profile);
		}
	}
}


