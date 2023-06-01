const fs = require('fs/promises');


function writeAndRead(x,y){
    fs.writeFile(x,JSON.stringify(y))
    .then(()=>
    {
    return fs.readFile(x)
    })
    .then((data)=>
    {
    console.log(JSON.parse(data))
    })
    .catch((error)=>
    {
        console.log(error)
    })
    }
 

//  writeAndRead('miFichero1.json', {name:"pepe",apellido:"perez",edad:30})
 
async function writeAndRead1(path,objeto){
    try{
        await fs.writeFile(path,JSON.stringify(objeto))
        let nuevo = await fs.readFile(path)
        console.log(JSON.parse(nuevo))
}           
catch(error){
    console.log(error)
}
}

// writeAndRead1('miFichero3.json',{name:"juan",surname:"oz",age:40});

module.exports={writeAndRead,writeAndRead1}