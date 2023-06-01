const fs =require('fs/promises');

// const objeto= {
//     name: "pepe",
//     surname:"perez",
//     age:20,
// };

// fs.writeFile('ejercicio1.json',JSON.stringify(objeto))
// .then(()=>
// {
//     return fs.readFile('ejercicio1.json', "utf8")
// })
// .then((data)=>
// {
//     console.log(JSON.parse(data))
// })
// .catch((error)=>
// {
//     console.log(error)
// })


async function escribirLeer(objeto){
try{

await fs.writeFile('ejercicio2.json',JSON.stringify(objeto)) //le paso el archivo y lo que tiene que escribir//

let nuevo = await fs.readFile('ejercicio2.json', "utf8");
    console.log(JSON.parse(nuevo));
}
catch(error){
    console.log(error)
}
}
const objeto= {
    name: "pepe",
    surname:"perez",
    age:20,
};
escribirLeer(objeto)