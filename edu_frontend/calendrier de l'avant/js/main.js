/*
-Cliquer sur une case de mon calendrier
-Cette case doit avoir un  numéro inférieur à la date du jour
-si elle ne l'est pas il ne se passe rien
- si elle l'a  la suite se passe
- jouer de la musique
-afficher l'image de fond
*/
let jour
const dateTime = (() => {
  let today = new Date(Date.now());
  jour = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const hour = today.getHours();
  const minutes = today.getMinutes();
  const sec = today.getSeconds();
  const fullDate = new Date(year, month, jour, hour, minutes, sec);
  return fullDate.toString();
})();

document.addEventListener("DOMContentLoaded", function () {
const boxes = document.querySelectorAll(".js-box");
boxes.forEach((box) =>{
        box.addEventListener("click", () => {
            let boxNumber = box.textContent
            
            if(boxNumber <= jour ) {
              console.log("click")
              playSong()
            }
            else {
              setTimeout(() => {
                alert("attend un peu mon coco, ne soit pas si pressé !!!")
                box.textContent = "👿"
              },1000)
            }
        })
    })
  });
  
  const url= "../ajout/css/images/assets/audios/opening-song.mp3"
  const audio = new Audio(url)
const playSong = () => {
audio.play()
audio.paused()
}

const showImage = () => {

}