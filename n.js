const fs =require('fs');
const readline = require('readline');


// reto 2/////

const objeto= {
    name: "pepe",
    surname:"perez",
    age:20,
};

 const metodo = JSON.stringify(objeto);
    
    // fs.writeFile('metodo.json', metodo, () => {

    //     fs.readFile('metodo.json', (err,data) => { 
    //         const objeto = JSON.parse(data)
    //       console.log(objeto);
    //     })
    //   });
  
    
//// reto3////

// const rl = readline.createInterface(
// 		process.stdin, process.stdout);

// rl.question("como te llamas?: ",(name)=>{
//     rl.question("como te apellidas?: ",(surname)=>{
//         rl.question("cuantos años tienes?: ",(age)=>{
//             const objeto1= {
//                 name: name,
//                 surname:surname,
//                 age:parseInt(age)
//             };
//             const metodo1 = JSON.stringify(objeto1);
    
//     fs.writeFile('metodo1.json', metodo1, () => {

//         fs.readFile('metodo1.json', (err,data1) => { 
//             const objeto1 = JSON.parse(data1)
//           console.log(objeto1);
//           rl.close();
//         })
//       });
//         })
//     })
// })







