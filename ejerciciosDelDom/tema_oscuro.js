const d =document;
const ls= localStorage;
export default function cambiarTema(btn,clasesFondos){
   const  $themaBtn = d.querySelector(btn);
       const   $selectores= d.querySelectorAll("[cambio-color]");
          

          let sun="☀️";
           let  moon= "🌙";

           //como al cargar la pagina debe ejecutar en que modo esta, por 
           // esto se saco del if else
            const ligMode= ()=>{
                $selectores.forEach(el => el.classList.remove(clasesFondos));
                $themaBtn.texContent=moon
                ls.setItem("theme","light");
            }
            const darkMode=()=>{
                $selectores.forEach(el => el.classList.add(clasesFondos));
                $themaBtn.texContent=sun;
                ls.setItem("theme","dark");   
            }

    d.addEventListener("click", e=>{
       if(e.target.matches(btn)){
           if($themaBtn.texContent===moon){
            darkMode();
           }else{
            
            ligMode();
           }
       }
    });

  //esto se ejecuta cada que carga el documento
    d.addEventListener("DOMContentLoaded",(e)=>{
       
        if (ls.getItem("theme")===null){
            ligMode();
        }
         if (ls.getItem("theme")==="light"){
            darkMode();
        }
    })
}