const d = document, 
    $table= d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form");
    $title = d.querySelector(".crud-title"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();


(()=>{
   
   const getALL= async()=>{
       try{
           //al no especificar que tipo de peticion es, el la toma por defecto con GET 
         let res= await fetch("http://localhost:3000/santos/"),
              json= await res.json();
              //para actulizar la interfaz en el html, muy importante
              
             if(!res.ok) throw {status:res.status, statusTex: res.statusText}
               json.forEach((el)=>{
                
                      $template.querySelector(".name").textContent = el.nombre; 
                      $template.querySelector(".constellation").textContent= el.constelacion;
                     
                      $template.querySelector(".edit").dataset.id=el.id;
                      $template.querySelector(".edit").dataset.nombre= el.nombre;
                      $template.querySelector(".edit").dataset.constelacion= el.constelacion;
                      $template.querySelector(".delete").dataset.id = el.id; 
                      $template.querySelector(".delete").dataset.nombre = el.nombre; 
                      //se copia la estructura del nodo creado y se le coloca en true para copiar tambien los datos
            //para luego esto enviarlo al html. 
        let $clone = d.importNode($template,true);
        $fragment.appendChild($clone);
            console.log($template)
               })
           $table.querySelector("tbody").appendChild($fragment);

       }catch(error){
         let message= error.statusTex || "ocurrio un error"; 
         $table.insertAdjacentHTML("afterend",`<p><cb>Error ${error.status}: ${message} </b></p>` );        
     }
   }

  d.addEventListener("DOMContentLoaded", getALL);
  
  d.addEventListener("submit",async e =>{
      if(e.target ===$form){
 // Se inabilita el comportamiento del formulario para ser 
 //manipulado completamente por ajax
          e.preventDefault();
          //si no trae id es porque es un POST
         if (!e.target.id.value){
           try{

            let options= {
              method: "POST",
              headers: {
                  "Content-type": "application/json;charset=utf-8"
              },
              body: JSON.stringify({
                  nombre:e.target.nombre.value,
                  constelacion: e.target.constelacion.value
              })
                   
               
            }, 
            res= await fetch (`http://localhost:3000/santos/`, options),
            json = await res.json();

            if (!res.ok)throw {status:res.status,statusTex: res.statusText};
            location.reload();
           }catch (error){
             
            let message= error.statusTex || "ocurrio un error"; 
         $form.insertAdjacentHTML("afterend",`<p><cb>Error ${error.status}: ${message} </b></p>` );

           }


        }//Si trae el id es una actualizacion  PUT
        else{
              
            try{

                let options= {
                  method: "PUT",
                  headers: {
                      "Content-type": "application/json;charset=utf-8"
                  },
                  body: JSON.stringify({
                      nombre:e.target.nombre.value,
                      constelacion: e.target.constelacion.value
                  })
                       
                   
                }, 
                res= await fetch (`http://localhost:3000/santos/${e.target.id.value}`, options),
                json = await res.json();
                //para actualizar, recargar la interfaz del html
                
                if (!res.ok)throw {status:res.status,statusTex: res.statusText};
                location.reload();
               }catch (error){
                 
                let message= error.statusTex || "ocurrio un error"; 
             $form.insertAdjacentHTML("afterend",`<p><cb>Error ${error.status}: ${message} </b></p>` );
    
               }
        }
      }
  });
d.addEventListener("click", async e=>{
    if (e.target.matches(".edit")){
        console.log()
        $title.textContent = "Editar Santo"; 
        $form.nombre.value = e.target.dataset.nombre; 
        $form.constelacion.value = e.target.dataset.constelacion; 
        $form.id.value = e.target.dataset.id; 

    }

    if (e.target.matches(".delete")){
        let isDelete = confirm(`¿Estas segudo de eliminar a ${e.target.dataset.nombre}`)
        if (isDelete){
            try{

                let options= {
                  method: "DELETE",
                  headers: {
                      "Content-type": "application/json;charset=utf-8"
                  }   //aca se puede quitar el cuerpo ya que para eliminar solo requiere el id  
                },
                res= await fetch (`http://localhost:3000/santos/${e.target.dataset.id}`, options),
                json = await res.json();
                //para actualizar, recargar la interfaz del html
                
                if (!res.ok)throw {status:res.status,statusTex: res.statusText};
                //para actualizar pagina
                location.reload();
               }catch (error){
                 
                let message= error.statusTex || "ocurrio un error"; 
                  alert (`Error ${error.status}: ${error.message}`)
    
               }
        }
    }


})


})();
