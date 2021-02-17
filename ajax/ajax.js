
//HACIENDO EL CONSUMO DE LA API CON HTTPrequest
//funcion anonima autoejecutable
  
/* (()=>{
const xhr= new XMLHttpRequest(),
      $xhr= document.getElementById("xhr"),
      $fragmen= document.createDocumentFragment();
  xhr.addEventListener("readystatechange", e=>{
     if(xhr.readyState!==4)return
     console.log(xhr);
     if(xhr.status>=200 && xhr.status<400){
       //console.log(xhr.responseText);
       //aca se guarda como arreglo javaScript en la varible json
       let json= JSON.parse(xhr.responseText);
       json.forEach(el =>  {
           const $li= document.createElement("li");
                 $li.innerHTML= `${el.name}--${el.email}--${el.phone}`;
                 $fragmen.appendChild($li);
                 
       });
       $xhr.appendChild($fragmen);

     }else{
         console.log("error");
         let message= xhr.statusText || "Ocurrio un error"; 
         $xhr.innerHTML= `Error ${xhr.status}: ${message}`;
     }
    
  });

  xhr.open("GET","https://jsonplaceholder.typicode.com/users");
   
  xhr.send();
}) (); */

//HACIENDO LA PETICION CON LA API DE FETCH + PROMESAS

/* (()=>{
    const $fetch = document.getElementById("fetch"),
    //con esto se crea un fragmento del archivo hml para luego 
      $fragment= document.createDocumentFragment();
      fetch ("https://jsonplaceholder.typicode.com/users")
      .then((res) =>{
          console.log(res);
     //tambien hay .blob y .text para convertir imagenes y texto (res.)
     //operador ternario    
       return  res.ok ? res.json(): Promise.reject(res);



      }).then((json)=>{
        json.forEach(el =>{
            const $li= document.createElement("li");
           
                  $li.innerHTML=`${el.name}--${el.email}--${el.phone}`;
                  $fragment.appendChild($li);
                  
        }) 

        console.log("aqui no")
        $fetch.appendChild($fragment); 
      }).catch((err)=>{
        
          let message = err.statusText || "Ocurrio un error";
          $fetch.innerHTML= `Error ${err.status} ${err.message}`
      }).finally(() =>{
           console.log("este se ejecuta de todas maneras ")
      })
})(); */

//HACIENDO LA PETICION CON LA API DE FETCH + FUNCION ASINCRONA

(()=>{
    const $fetchAsy = document.getElementById("fetch-async"),
    //con esto se crea un fragmento del archivo hml para cargarlo y luego enviarlo al html 
      $fragment= document.createDocumentFragment();
async function getData(){  
    try{
        //al no especificar que tipo de peticion es, el la toma por defecto con GET
      let respon = await fetch ("https://jsonplaceholder.typicode.com/users"),
          json = await respon.json(); 
          console.log(json) ;  
         console.log(respon);
         if (!respon.ok) throw {status:respon.status,statusTex:respon.estatuTex};
         json.forEach(el =>{
            const $li= document.createElement("li");
           
                  $li.innerHTML=`${el.name}--${el.email}--${el.phone}`;
                  $fragment.appendChild($li);            
        }) 
        $fetchAsy.appendChild($fragment);


    }catch(err){
    
    console.log(err.statusTex);
         let message= err.statusTex || "ocurrio un error" ; 
         $fetchAsy.innerHTML= `Error ${message} ${err.status}`;


    }finally{

    }
}    
 getData();     
})();


//HACIENDO LA PETICION CON LA API AXIOS, importante axios devuelve una promesa 


 /* (()=>{
     const $axios= document.getElementById("axios"),
           $fragmen = document.createDocumentFragment();
           //pilas axios es la libreria, no es una variable
           axios
           .get("https://jsonplaceholder.typicode.com/user")
           .then((res)=>{

            let json = res.data;
            console.log(res);
            json.forEach(el =>{    
                const $li= document.createElement("li"); 
                      $li.innerHTML=`${el.name}--${el.email}--${el.phone}`;
                       $fragmen.appendChild($li);            
            })
            $axios.appendChild($fragmen);
             
           })
           .catch((err)=>{
          //Para manipular el error se hace con la respuesta mas .status ojooo
            console.log(err.response.status);

              let message = err.response.statusTex || "ocurrio un error" ; 
            $axios.innerHTML= `Error ${message} ${err.response.status}`;         
           })
           .finally(() =>{
           })

 })()   */

        //HACIENDO LA PETICION CON AXIOS + ASYNC-AWAIT importante, axios devuelve una promesa

/*  (()=>{
    const $axiosAsyn= document.getElementById("axios-asyn"),
    $fragmen = document.createDocumentFragment();
    

    async function getData(){
        try {
            let respon = await axios.get("https://jsonplaceholder.typicode.com/user"),
            json = await respon.data;     
           
           json.forEach(el =>{    
            const $li= document.createElement("li"); 
                  $li.innerHTML=`${el.name}--${el.email}--${el.phone}`;
                   $fragmen.appendChild($li);            
        })
        $axiosAsyn.appendChild($fragmen);

        }catch(err){
            console.log(err.response)
            let message = err.response.statusTex || "ocurrio un error" ; 
            $axiosAsyn.innerHTML= `Error ${message} ${err.response.status}`;   
        }finally{
              console.log("aAl finally siempre entra")
        }
    }
    getData();
 })() */

