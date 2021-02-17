 const d = document; 
 const w= window; 
 const n= navigator; 

export default function estadoDeRed() {
  
    const isOnline= ()=>{
        $div= d.createTextNode("div"); 
       if(n.onLine){
           console.log("por aca esta porque esta online")
           $div.textContent= "Conexion reestablecida";
           $div.classList.add("online"); 
           $div.classList.remove("offline"); 
       }else {
           $div.textContent= "Conexion Perdida";
           $div.textContent.add("offline");
           $div.textContent.remove("online"); 
       }
       
       d.body.insertAdjacentElement("afterbegin", $div);
    };
    w.addEventListener("online", e=> isOnline);
    w.addEventListener("offline", e=> isOnline);
}