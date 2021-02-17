const d = document; 


export default function testerResponsivo(form){
    const $formm = d.getElementById(form);
    let tester; 
    d.addEventListener("submit", (e)=>{
        //aca no esta tomando el del nombre del hijo del form por eso lo dejo sin
        //$formm.probar, pero igual funciona
        if(e.target===$formm){
            e.preventDefault();
            console.log("entro aqui"); 
            tester = window.open($formm.direccion.value,"tester",`innerWidth=${$formm.ancho.value}, innerHeight=${$formm.alto.value}`);
        }
    });
    d.addEventListener("click", (e)=>{
         if (e.target===$formm.cerrar){
             console.log("Aca entro");
             tester.close();
         }
    })
}
