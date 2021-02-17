const d =document;

export default function validarFormulario() {
    const $form = d.querySelector(".contact-form"),
  //importante dejar el espacio en este /.contact-form [required]/ entre form y [required]
          $inputs= d.querySelectorAll(".contact-form [required]")
      $inputs.forEach(input =>{
          const $spam= d.createElement("spam");
                $spam.id= input.name;
                $spam.textContent= input.title;
//con esto le adicionamos la clase de css para que salga en rojo y la clase none las
//dos estan en el archivo css
                $spam.classList.add("contact-form-error","none")
                input.insertAdjacentElement("afterend",$spam);
      }); 
    //con esta funcion se valida el error en el formulario a medida que el usuario va escribiendo 
      d.addEventListener("keyup", (e) =>{
        
          if (e.target.matches(".contact-form [required]")){
              //con el .pattern se accede al patron de los atributos. 
                let pattern = e.target.pattern || e.target.dataset.pattern;
           if(pattern && e.target.value!==""){
                let regex= new RegExp(pattern);
                return !regex.exec(e.target.value)
                ?d.getElementById(e.target.name).classList.add("is-active")
                :d.getElementById(e.target.name).classList.remove("is-active")
           if(!pattern){
            return e.target.value===""
            ?d.getElementById(e.target.name).classList.add("is-active")
            :d.getElementById(e.target.name).classList.remove("is-active")
           }
          }
        }
      });

     d.addEventListener("submit", (e) =>{
         e.preventDefault();
          const $loaderOvalEnHtml = d.querySelector(".contact-form-loader");
            const  $reponse= d.querySelector(".contact-form-response"); 
                $loaderOvalEnHtml.classList.remove("none");
                setTimeout(()=>{
                    $loaderOvalEnHtml.classList.add("none");
                       $form.reset();
                },3000)
     });
}




