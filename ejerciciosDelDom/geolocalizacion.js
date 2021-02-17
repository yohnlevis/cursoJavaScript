const d = document; 
const n = navigator; 
export default function geolocalizar(id) {
     const $id= d.getElementById(id);
     const options= {
          enableHighAccuracy:true,
          timeout: 5000,
          maximumAge:0
     }

     const success =(position)=>{
         let coords= position.coords;
    
         //con el numero antes de la z le digo que tan cerca lo puedo ver, el maximo es 20 y luego de esto 
         //sigue dos intrucciones para que se abra en otra ventana y no en la que estoy yo. 
         $id.innerHTML= `
         <p>Tu posicion es: </p>
           <ul> 
              <li>Latitud: <b>${coords.latitude}</b></li>
              <li>Longitud: <b>${coords.longitude}</b></li>
              <li>Presicion: <b>${coords.accuracy}</b> Metros</li>
           </ul>
           <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="blank" rel="noopener">Ver en google maps</a>
         `
        
     };
     const error =(err) =>{
         $id.innerHTML= `<p><mark>Error: ${err.code} ${err.message}</mark> </p> `
        
     };
     n.geolocation.getCurrentPosition(success,error,options);
}