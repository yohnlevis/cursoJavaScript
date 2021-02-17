const d = document, 
    $main= d.querySelector("main");


const getHTML = (options)=>{
     let {url,success,error}= options;
     const xhr= new XMLHttpRequest();
    
     xhr.addEventListener("readystatechange", e=>{
           if(xhr.readyState!==4) return;
           if (xhr.status>=200 && xhr.status < 300){
              let html = xhr.responseText;
              success(html);
           }else{
              let message= xhr.statusText || "Ocurrio un error"; 
              error(`Error ${xhr.status}: ${message}`)
           }
     });
xhr.open("GET", url);
xhr.setRequestHeader("Content-type", "text/html;charset= utf-8");
xhr.send();
}  

d.addEventListener("DOMContentLoaded", e =>{
    getHTML({
        url:"assets/home.html",
        success:(html)=>$main.innerHTML= html, 
        error: (err) => $main.innerHTML= `<h1> ${err} </h1>`
    })
})

d.addEventListener("click",e=>{
    if(e.target.matches(".menu a")){
        //con este le quitamos el comportamiento por defecto del html, como por ejemplo 
        //los enlaces hacia las otras paginas, para ser contralados directamente desde el 
        //ajax
        e.preventDefault();
        getHTML({
            url: e.target.href,
            success:(html)=>$main.innerHTML= html, 
            error: (err) => $main.innerHTML= `<h1> ${err} </h1>`
        })
    }
}) 



