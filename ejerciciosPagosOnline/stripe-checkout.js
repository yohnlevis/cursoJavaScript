//Se puede llamar en mayus ya que es una constante que no va a variar
//y como esta por defecto y sin nombre en el otro archivo, lo puedo nombrar
//de cualquier forma. 
import STRIPE_KEYS from "./stripe-keys.js";

const d= document, 
$tacos =d.getElementById("tacos"),
$template= d.getElementById("taco-template").content, 

$fragment= d.createDocumentFragment(),
fetchOptions = {
    headers: {
        Authorization: `Bearer ${STRIPE_KEYS.secret}`
    },


};

let products, prices; 

const moneyFormat= num=> `$${num.slice(0,-2)}`

Promise.all([
    fetch("https://api.stripe.com/v1/products",fetchOptions),
    fetch("https://api.stripe.com/v1/prices",fetchOptions),
]) //metodo map de los arreglos
.then((responses)=>Promise.all(responses.map((res)=> res.json())))
.then(json=>{
 console.log(json); 
  products = json[0].data;
  prices= json[1].data; 
  prices.forEach(el =>{
      let productData = products.filter((product)=> product.id === el.product);
      $template.querySelector(".taco").setAttribute("data-price",el.id) ;
      $template.querySelector("img").src= productData[0].images[0];
      $template.querySelector("img").alt= productData[0].name;
      $template.querySelector("figcaption").innerHTML= `
       ${productData[0].name}  
       <br>
        ${moneyFormat(el.unit_amount_decimal)}   ${el.currency}
       `
      let $clone = d.importNode($template,true);
      $fragment.appendChild($clone);
  });
  $tacos.appendChild($fragment);
})
.catch((err) =>{
    console.log("hay un error")
    
    let message= err.statusText || "Ocurrio un error al conectar con el api"
    $tacos.innerHTML= `<p>Error ${err.status}: ${message}</p>`;   
});

d.addEventListener("click", (e)=>{
    //importante colocar aca el * en el .taco* ya que dice que le 
    //aplique el evento click a todo lo de img, que seria el caption y
    //la img
  if (e.target.matches(".taco *")){
      let price= e.target.parentElement.getAttribute("data-price");
      console.log(price);
      //con esto se envia a la api de Stripe para solicitar el producto
      Stripe(STRIPE_KEYS.public).redirectToCheckout({
          //estos parametros estan en la documentacion de la api, se debe enviar asi para que 
          //ella identifique que es una compra
          lineItems: [{price, quantity: 1}],
          mode: "subscription",
          successUrl: "http://127.0.0.1:5500/stripe-success.html",
          cancelUrl: "http://127.0.0.1:5500/stripe-success.html"
      })
      .then(res => {

          if(res.error){
              $tacos.insertAdjacentElement("afterend",res.error.message);
          }
      })
  }
}) 
