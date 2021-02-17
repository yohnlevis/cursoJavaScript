const d = document;
 const w = window;

 export default function responsiveMedia(idElemento,mq,contenidoMovil,contenidoEscritorio) {
    let ruptura= w.matchMedia(mq); 
     
    const responsive= (e)=>{
         if(e.matches){
             d.getElementById(idElemento).innerHTML=contenidoEscritorio;
         }else{
            d.getElementById(idElemento).innerHTML=contenidoMovil;
          
         }

       
    }
    ruptura.addListener(responsive);
   // responsiveMedia(ruptura);
}