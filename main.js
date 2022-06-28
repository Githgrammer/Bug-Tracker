let desc_title =document.getElementById("issue_title");
let description =document.getElementById("issue");
let send= document.getElementById("boton");
let id= [];
let botonBorrar="";
let divi= document.getElementById("list");
let seve= document.getElementById("issueSeverity");
let delegado= document.getElementById("dele");



send.addEventListener("click",()=>{
/*let text={
    title:desc_title.value,
    issue:description.value,
    severity:seve.value,
    dele:delegado.value
}*/

if(description.value === "" || desc_title.value === "" || delegado.value === ""){
    alert("escribe algo")
}
else{

    let Issue= new Divs(desc_title.value,description.value,seve.value,delegado.value)
    
    divi.innerHTML+= `
    <div class="issue_container">
    <h1 class="titulo_issue" >${Issue.titulo}</h1>
    <p class= "id_issue">Id: ${Issue.id}</p>
    <p class= "parrafo_issue">${Issue.descripcion}</p>
    <p class= "parrafo_issue">Severity: ${Issue.severity}</p>
    <p class= "parrafo_issue">Delegated to: ${Issue.delegado}</p>
    <input id="boton_resuelto" class="boton_solved" type="button" value="Solved">
    </div>
    `
    desc_title.value="";
    description.value="";
    dele.value="";
    return send= id.push(Issue.id), botonBorrar=document.getElementById("boton_resuelto");
    /*FALTA RETORNAR ID Y BOTON PARA PODER BORRAR */
  
}


/*if(text.severity ==="Low"){
divi.style.color="green"
}*/

})


/*id.addEventListener("click", (id)=>{
    let borraId= divi[id];
 deleteId();   
})*/





class Divs{
    static contador= 0+1;
    constructor(titulo,descripcion,severity,delegado){
          this._titulo= titulo;
          this._descripcion= descripcion;
          this._severity= severity;
          this._delegado= delegado;
          this._id= Divs.contador++;
        
    }


    get titulo(){
        return this._titulo;
    }

    get descripcion(){
        return this._descripcion;
    }
    
    get severity(){
        return this._severity;
    }

    get delegado(){
        return this._delegado;
    }

   get id(){
    return this._id;
   }

}



/*FUNCION PARA BORRAR UN ISSUE*/


