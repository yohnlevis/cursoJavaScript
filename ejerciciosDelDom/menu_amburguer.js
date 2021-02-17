export default function menuHamburguesa(panelBtn,panel, menuLink){


    //como todo lo del dom inicia con document, se guardó en una variable 
    //para utilizarlo muchas veces. 
    const d= document; 
  //delegacion de eventos. 
    d.addEventListener("click", (e) =>{
        //Aca se debio colocar el || panel del boton porque en el centro del boton las span que es lo que en este caso pinto
        //las lineas del centro del boton y si le doy click en estas lineas no funciona, y para que funcione le digo 
        //al boton que es todo lo del panel boton con el *
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
           d.querySelector(panel).classList.toggle("is-active");
           d.querySelector(panelBtn).classList.toggle("is-active");

        }
        if (e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    });


}


