const Book = require('../models/book');


let libro = null;

function getBook(request, response)
{   let respuesta;

    if(libro!=null){
        console.log(libro);
        respuesta ={error:true, codigo:200, message:"libro encontrado", data: libro}
    }
   else {
    respuesta = {error:true, codigo:200, message:"el libro no existe", data :null}
}
response.send(respuesta)
}


function postBook(request, response)
{
let respuesta;
// console.log(request.body)

    if(libro === null){
        
        libro = new Book (request.body.title, request.body.type,request.body.author,request.body.price, request.body.photo, request.body.id_book, request.body.id_user)
        
        respuesta = {error:false, codigo:200, message:"libro añadido"}
        console.log(respuesta);
    }
    else
    {
        respuesta = {error:true, codigo:200, message:"no se ha podido añadir"}
    }

    response.send(respuesta)
}
function putBook(request,response)
{
let respuesta;

    if( libro!= null)
    {
        libro = new Book (request.body.title, request.body.type,request.body.author,request.body.price, request.body.photo, request.body.id_book, request.body.id_user)
        
        respuesta = {error:false, codigo:200, message:"libro modificado", data:libro}
        console.log(respuesta);
    }
    else
    {
        respuesta = {error:true, codigo:200, message:"no se ha podido modificar"}
    }

    response.send(respuesta)
}

function deleteBook(request, response)
{
let respuesta;
    if(libro!=null)
    {
        libro=null;
        respuesta= {error:false, codigo:200, message:"el libro se ha borrado",daata: libro}
    }
    else
    {
        respuesta={error:true, codigo:200, message:"no existia el libro" , data:libro}
    }
    response.send(respuesta)
}

module.exports={getBook,postBook,putBook,deleteBook}


