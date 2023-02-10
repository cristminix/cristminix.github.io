const fs = require('fs-extra');
const path = require('path');

let index_content = fs.readFileSync(path.resolve(__dirname,"../index.html")).toString();

let lines = index_content.split("\n");
const regex = new RegExp(/\.\/src\/themes\/localtonet\-admin\/assets/);
const regexJsx = new RegExp(/\<script type=\"module\" crossorigin src=\"\/assets\/index\-[0-9_a-z]+\.js\"\>/);

function getUnresolvedScripts(lines,writeBuffer){
    let returnValues = {
        jsxLine : 0,
        jsxSource: "",
        unresolveLastLine : 0,
        unresolveSources : []
    };
    let lastLineFound = 0;
    let linenum = 0;
    let buffers = [];
    for(let currentLine in lines){
        let line = lines[currentLine];
        const matchesJsx = line.match(regexJsx);
        if(matchesJsx){
            console.log(line);
            returnValues.jsxLine = currentLine; 

            const jsxSrc = line.match(/src=\"(.*)\"/);
            if(jsxSrc){
                if(jsxSrc.length > 1){
                    returnValues.jsxSource = jsxSrc[1];
                }
            }
            continue;
            // return;
        }
        const matches = line.match(regex);
        if(matches){
            if(matches.length > 0){
                let src = line.match(/src=\"(.*)\"/);
                if(src){
                    if(src.length>1){
                        let source = src[1].replace(/.\/src\//,"frontend/src/");
                        returnValues.unresolveSources.push([src[1],source])

                        line = `<script type="text/javascript" src="${source}"></script>`
                        lastLineFound = currentLine
                    }
                }else{
                    src = line.match(/image\:/);
                    if(src.length > 0){
                        line = line.replace(/.\/src\//,"frontend/src/");
                    }
                }
            }
        }
        // if(writeBuffer){
            // buffers.push(`<!-- ${linenum} -->${line}`);
            buffers.push(`${line}`);
        // }
        linenum += 1;
    }
    if(writeBuffer){
        return buffers;
    }
    buffers.splice(parseInt(lastLineFound), 0, `<script type="module" crossorigin src="${returnValues.jsxSource}"></script>`);
    returnValues.buffers = buffers;
    returnValues.unresolveLastLine = lastLineFound;
    return returnValues;
}


const returnValues = getUnresolvedScripts(lines,false);
console.log("updating index.html")
fs.writeFileSync(path.resolve(__dirname,"../index.html"),returnValues.buffers.join("\n"));
// console.log(returnValues);