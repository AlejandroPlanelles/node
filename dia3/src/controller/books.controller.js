const Book = require("../models/book");

let libros=[]

let libro = null;

function getBooks(request, response)
{   let respuesta;
    
    if(libros!=null){
        // console.log(libros);
        respuesta ={error:true, codigo:200, message:"libro encontrado", data: libros}
    }
   else {
    respuesta = {error:true, codigo:200, message:"el libro no existe", data :null}
}
response.send(respuesta)
}


function getIdBooks(request,response)
{
    
    let id_libro = request.query.id_book;
    let respuesta;

    let find_libro = libros.find((x) =>
        x.id_book = id_libro
    )
    console.log('***********************');
    console.log(find_libro);

    if(find_libro!=null)
    {
        respuesta= {error:false, codigo:200, data:find_libro}
    }
    else
    {
        respuesta = {error:true, codigo:200, mensaje:"el libro no existe"}
    }
    response.send(respuesta)
}

function postBooks(request, response)
{
let respuesta;
// console.log(request.body)
    // console.log(request.body)
        let nuevo_libro = new Book(request.body.title, request.body.type,request.body.author,request.body.price, request.body.photo, request.body.id_book, request.body.id_user)
        libros.push(nuevo_libro)
        respuesta = {error:false, codigo:200, message:"libro añadido", data:nuevo_libro}
        console.log(respuesta);



    response.send(respuesta)
}

function putBooks(request, response)
{
    let id_libro = request.body.id_book;
    let find_libro = libros.find((x) =>
        x.id_book == id_libro
    )
    let respuesta;
   
    if( find_libro)
    {
        find_libro.title = request.body.title
        find_libro.type = request.body.type
        find_libro.author = request.body.author
        find_libro.price = request.body.price
        find_libro.photo = request.body.photo
        find_libro.id_book = request.body.id_book
        find_libro.id_user = request.body.id_user
        console.log(find_libro)
        respuesta = {error:false, codigo:200, message:"libro modificado", data:find_libro}
        console.log(respuesta);
    }
    else
    {
        respuesta = {error:true, codigo:200, message:"no se ha podido modificar"}
    }

    response.send(respuesta)
}
function deleteBooks(request, response)
{
     
    let id_libro = request.body.id_book;
    let respuesta;

    let borrar_libro = libros.filter((x) =>
        x.id_book != id_libro
    )  
    console.log("este es el consolelog")
     console.log(borrar_libro)

    if(borrar_libro!=null)
    {
       
        respuesta= {error:false, codigo:200, message:"el libro se ha borrado",data:borrar_libro}
    }
    else
    {
        respuesta={error:true, codigo:200, message:"no existia el libro" , data:libro}
    }
    response.send(respuesta)
}


module.exports={getBooks,getIdBooks,postBooks,putBooks,deleteBooks}