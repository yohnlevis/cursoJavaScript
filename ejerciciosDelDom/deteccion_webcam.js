const d= document; 
const  n= navigator;

export default function webcam(id) {
    const $video= d.getElementById(id);
    if(n.mediaDevices.getUserMedia){
        //esto es una promesa
        n.mediaDevices.getUserMedia({video:true, audio:false})
        .then((stream)=>{
            console.log(stream)
            $video.srcObject = stream; 
            $video.play();
        })
        .catch((err)=>{
            $video.insertAdjacentHTML("afterbegin",`<p>Sucedio el siguiente error<mark>${err}</mark> <p>`)
            
        })
    }
}