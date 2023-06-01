const fs =require('fs/promises');
const readline =require(`readline`);

function pregunta(pregunta){
    const question = new Promise((resolve,reject)=>{
    const rl= readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question(pregunta,(respuesta)=>{
        resolve(respuesta);
        rl.close();
    });
});
return question;
}
const objeto= {
    name: "pepe",
    surname:"perez",
    age:20,
};

function questionario(){
pregunta("como te llamas?")
.then((nombre)=>{
    objeto.name=nombre;
    return pregunta("cual es tu apellido?")
    .then((apellido)=>{
        objeto.surname=apellido;
        return pregunta("cuantos años tienes?")
        .then((edad)=>{
            objeto.age=edad;

        })
    }
    )
}
)
            fs.writeFile('ejercicio1.json',JSON.stringify(objeto))
            .then(()=>
            {
                return fs.readFile('ejercicio1.json', "utf8")
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
async function escribirLeer(objeto){
    try{
        const obj= {
            name: "",
            surname:"",
            age:"",
        };
        let nombre=await pregunta("cual es tu nombre?")
        obj.name=nombre;
        
            let apellido=await pregunta("cual es tu apellido?")
            obj.surname=apellido;
    
                let edad= await pregunta("cual es tu edad?")
                obj.age=edad;


                await fs.writeFile("path.json",JSON.stringify(obj))
                let nuevo = await fs.readFile("path.json")
                console.log(JSON.parse(nuevo))



    }
    catch(error){
        console.log(error)
    }
}

// escribirLeer(objeto)

module.exports={questionario,escribirLeer}