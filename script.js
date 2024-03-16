let audioelement = new Audio();
let songindex= 0;
let masterplay = document.getElementById('masterplay')
let myprogressbar = document.getElementById("myprogressbar")
let songitem=  Array.from(document.querySelectorAll('.songitem'))
let songs= [
    {
        songname: "Nakhrewali",
        filepath: "nakhrewali.mp3",
        cover:""

    } , {
        songname: "kinni kinni",
        filepath: "kinni kinni.mp3",
        cover:""

    } , {
        songname: "Raja tu",
        filepath: "raja tu.mp3",
        cover:""

    } , {
        songname: "one love",
        filepath: "one love.mp3",
        cover:""

    } , {
        songname: "obbesed",
        filepath: "obbesed.mp3",
        cover:""

    } , {
        songname: "maahi ve",
        filepath: "maahi ve.mp3",
        cover:""

    }  ,{
        songname: "has has",
        filepath: "has has.mp3",
        cover:""

    },  {
        songname: "tere hawale",
        filepath: "tere hawale.mp3",
        cover:""

    } 
]
 songitem.forEach((element, i) => 
{


    element.getElementsByTagName('img')[0].src= songs[i].coverpath;
    element.getElementsByClassName('songname')
 })

masterplay.addEventListener("click", ()=>{
    if(audioelement.paused || audioelement.currentTime <=0){
        audioelement.play();
        masterplay.classList.remove("ri-play-circle-line");
         masterplay.classList.add("ri-pause-circle-line");
        
    }else{
        audioelement.pause();
        masterplay.classList.add("ri-play-circle-line");
        masterplay.classList.remove("ri-pause-circle-line");
    }

})

 audioelement.addEventListener("timeupdate", ()=>{
   progress = parseInt((audioelement.currentTime/ audioelement.duration)*100)
   myprogressbar.value = progress;
 })
 myprogressbar.addEventListener('input', () => {
    audioelement.currentTime = myprogressbar.value * audioelement.duration / 100;
});

const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove("ri-pause-circle-line")
        element.classList.add("ri-play-circle-line") 

    })

}








  Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeallplays();
       let index= parseInt(e.target.id);
     e.target.classList.remove("ri-play-circle-line")  
     e.target.classList.add("ri-pause-circle-line")
     audioelement.src = songs[index].filepath;
     audioelement.currentTime= 0;
     audioelement.play();
     masterplay.classList.remove("ri-play-circle-line")  
    masterplay.classList.add("ri-pause-circle-line")
    })
  })