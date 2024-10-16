const navbar=document.getElementById("navbar");

fetch("navbar.html")
.then( Response =>{
    if(!Response.ok){
        throw new Error("error al cargar el archivo navbar.html" )
    }
    return Response.text();
}
).then(
    Response =>{
        console.log(Response)
       navbar.innerHTML = Response;
    }
) .catch(error => console.error('Error al cargar HTML:', error));


