const fs = require("fs");
const path = require("path");
const logFile = path.resolve(__dirname, "logs/bore.log");
if(fs.existsSync(logFile)){
	fs.readFile(logFile, (err, data) => {
	  if (!err && data) {
	  	let content = data.toString();
	  	let matches = content.match(/listening\ at\ bore.pub\:(\d+)/g);
	  	if(matches.length > 0){
	  		const listenInfo = matches[0];
	  		matches = listenInfo.match(/(\d+)/);
	  		if(matches.length > 0){
	  			const borePort = matches[0];
	  			console.log(borePort);
	  		}
	  		
	  	}
	    
	    
	  }
	})
}