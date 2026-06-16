// 1- //
const getFileDir = () => {
return {  Dir: __dirname , File: __filename }
}
console.log(getFileDir());

// ***************************************************** *//

// 2- // 
const path = require("node:path")
const resolvedPath = path.resolve("index.js")
const getFileName = (filepath) => {
     return path.basename(filepath)   
}
console.log(getFileName(resolvedPath));

// ***************************************************** *//

// 3- //
const pathObject = {
    dir: "\\Folder",
    name: "app",
    ext: ".js"
}
const buildPath = (obj) => {
    return path.format(obj)
}
console.log(buildPath(pathObject));

// ***************************************************** *//

// 4- //
const getFileExt = (filepath) => {
     return path.extname(filepath)   
}
console.log(getFileExt(resolvedPath));

// ***************************************************** *//

// 5- //
const parsePath = (filepath) => {
    const parsed = path.parse(filepath)
    let { name, ext } = parsed
    return { name, ext }
    
}
console.log(parsePath(resolvedPath));

// ***************************************************** *//

// 6- //
const chkPath = (mypath) => {
    return path.isAbsolute(mypath)
}
console.log(chkPath(resolvedPath));

// ***************************************************** *//

// 7- //
const joinPath = (...paths) => {
    return path.join(...paths)
}
console.log(joinPath("src","components", "App.js"));

// ***************************************************** *//

// 8- //
const resPath = (mypath) => {
    return path.resolve(mypath)
}
console.log(resPath("\index.js"));

// ***************************************************** *//


   
   
