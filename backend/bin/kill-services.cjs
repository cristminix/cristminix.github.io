const { exec } = require('child_process');
const { promisify } = require('util');
const execPromise = promisify(exec);
const si = require('systeminformation');
const os = require("os");

async function main(){

    const psCommand = "ps aux|grep dropbear";

    let load =  await execPromise()
}
main();