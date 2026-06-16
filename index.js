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


   
   
