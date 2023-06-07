const fs =require('fs');
const readline = require('readline');

function readConsole(callback){
    const rl = readline.createInterface(
		process.stdin, process.stdout);

rl.question("como te llamas?: ",(name)=>{
    rl.question("como te apellidas?: ",(surname)=>{
        rl.question("cuantos años tienes?: ",(age)=>{
            const objeto1= {
                name: name,
                surname:surname,
                age:parseInt(age)
                };console.log(objeto1)
             rl.close();
             callback(objeto1)
        })
    })
})
}

module.exports = {readConsole};

