const fs = require("fs");
const path = require("path");
const logFile = path.resolve(__dirname, "../logs/ngrok.log");
if(fs.existsSync(logFile)){
	fs.readFile(logFile, (err, data) => {
	  if (!err && data) {
	  	let content = data.toString().split(" ").join("\n");
        let regex = /(http[s]?:\/\/.*\.ngrok\.io)/g
        let matches = content.match(regex)

	  	if(matches.length > 0){
            const ngrokUrl = matches[0];
            console.log( ngrokUrl);	
	  	}
	  }
	})
}