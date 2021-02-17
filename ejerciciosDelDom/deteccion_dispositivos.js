const d = document; 
const n= navigator; 
//este me trae toda la informacion de sistema opetarivo, navegador etc
const ua= n.userAgent;

export default function informacionDeDispositivos(id) {
const  $id= d.getElementById(id);
const isMobile= {
    android:()=> ua.match(/android/i),
    ios: ()=>ua.match(/iphone|ipad|ipod/i),
    windows:()=>ua.match(/windows phone/i),
    any: function () {
       return this.android() || this.ios() || this.windows(); 
    },
};
const isDesktop={
    linux:()=> ua.match(/linux/i),
    mac:()=>ua.match(/mac os/i),
    windows:()=> ua.match(/windows nt/i),
    any: function () {
        return this.linux() || this.mac() || this.windows();
    },
};
const isBowser= {
    chrome:()=>ua.match(/chrome/i),
    safari:()=>ua.match(/safari/i),
    firefox:()=>ua.match(/firefox/i),
    opera:() =>ua.match(/opera|opera mini/i),
    ie:()=>ua.match(/msie|iemobile/i),
    edge:()=>ua.match(/edge/i),
    any: function () {
       return this.ie() || this.chrome() || this.safari() || this.opera() || this.firefox(); 
    }
};

$id.innerHTML=`
<ul>
  <li>User Agent: <b>${ua}</b> </li>
  <li>User Agent: <b>${isMobile.any()?isMobile.any():isDesktop.any()}</b> </li>
</ul>
`
//mensajes en pantalla

if(isBowser.chrome()) {
    $id.innerHTML+= `<p>Ese contenido solo se ve en chrome</p>` 
}
if(isBowser.firefox()){
    $id.innerHTML+= `<p>Ese contenido solo se ve en firefox</p>`
} 
if(isMobile.android()) {
    $id.innerHTML+= `<p>Ese contenido solo se ve en android</p>` 
    
}


}