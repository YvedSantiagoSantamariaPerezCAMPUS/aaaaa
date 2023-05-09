const { log, Console } = require("console");

const usuario = `{
    "usuarios":[
        {
            "usuario":"sa123",
            "nombre":"santiago123", 
            "contraseña": 1097096617,
            "id": 1
        }
    ],
    "categorias":[
        {
            "usuario":"ed123",
            "nombre": "edgar",
            "contraseña": "12345",
            "id":2

    }
 ]
}`

const jsonData = JSON.parse (usuario);
console.log(typeof jsonData);

const recibeInfo = async () => {
    const nombre = document.querySelector('#nombreRegistro');
    const user = document.querySelector('#userRegistro');
    const password = document.querySelector('#passwordRegistro');
    const email = document.querySelector('#emailRegistro');
}



let btn=document.querySelector(`#myform`)

myform.addEventListener("submit", async(e)=>{
    e.preventDefault();
    let accion= e.submitter.dataset.accion;
    if(accion=="listar"){
        let peticion= await fetch("http://localhost:3001/usuarios");
        let datos= await peticion.json();
        console.log(datos)
    }
    })

