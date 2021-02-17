const d= document;

export function relojDigital(reloj,btnInicio,btnParar, idPapa) {
    //como se estan trabajando con intervalos, con esta variable se resetea. 
   let clockTempo;
    let nuevoRelojVacio = d.createElement("h5");
     let  textoNuevo = d.createTextNode("Aqui estaba el reloj");  
    nuevoRelojVacio.appendChild(textoNuevo);

    d.addEventListener("click", e=>{
        if(e.target.matches(btnInicio)){
            setInterval(() => {
                let relojj = new Date().toLocaleTimeString();
                d.querySelector(reloj).innerHTML=`<h3>${relojj}</h3>`
            }, 1000); 
            e.target.disabled= true;
        }

        if (e.target.matches(btnParar)){
            //aca se resetea el intervalo 
        clearInterval(clockTempo);

        d.querySelector(reloj).innerHTML=null;
        
        
        idPapa.replaceChild(nuevoRelojVacio,reloj);
      
        e.target.disabled=true;
        d.querySelector(btnInicio).disabled=false;
        }
    }) ;
}

export function alarma(alarma, btnIniciar, btnPararAlarma) {
     let alarmaTemporal;
    const $alarmaSonora= d.createElement("audio");
        $alarmaSonora.src= alarma;
        $alarmaSonora.id="hola";

    d.addEventListener("click", e=>{
        if(e.target.matches(btnIniciar)){
            
            //se debe guardar en una varible para despues manipular y poder parar
            alarmaTemporal = setTimeout(()=>{
              
            $alarmaSonora.play();
            },1000) 
           
        }

        if (e.target.matches(btnPararAlarma)){
            console.log("entro al dos");
          clearTimeout(alarmaTemporal);
          $alarmaSonora.pause();
          $alarmaSonora.currentTime=0;
        }
    }) ;  
}
