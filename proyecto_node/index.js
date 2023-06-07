let funtion1= require("./writeAndReadObject");
let function2 = require("./readConsole");


function2.readConsole((objeto1)=>{
    funtion1.writeAndRead("metodo.json",objeto1);
});

