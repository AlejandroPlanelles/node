const fs =require('fs');



function writeAndRead(x, y){
    const metodo1 = JSON.stringify(y);
    
    fs.writeFile(x, metodo1, () => {

        fs.readFile(x,(err,data1) => { 
            const objeto1 = JSON.parse(data1)
          console.log(objeto1);
          
        })
      });
}
  writeAndRead('miFichero1.json', {name:"pepe",apellido:"perez",edad:30})

module.exports={writeAndRead};