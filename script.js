let audioelement = new Audio();
let songindex= 0;
let masterplay = document.getElementById('masterplay')
let myprogressbar = document.getElementById("myprogressbar")
let songinfo=document.querySelector('.songinfo')
let songitem=  Array.from(document.querySelectorAll('.songitem'))
let songs= [
    {
        songname: "Nakhrewali",
        filepath: "nakhrewali.mp3",
        cover: "nakhrewali.jpg"

    } , {
        songname: "kinni kinni",
        filepath: "kinni kinni.mp3",
        cover:"kinni kinni.jpg"

    } , {
        songname: "Raja tu",
        filepath: "raja tu.mp3",
        cover:"raja tu.jpg"

    } , {
        songname: "one love",
        filepath: "one love.mp3",
        cover:"onelove1.jpg"

    } , {
        songname: "obbesed",
        filepath: "obbesed.mp3",
        cover:"Obsessed2.jpg"

    } , {
        songname: "maahi ve",
        filepath: "maahi ve.mp3",
        cover:"O-Maahi.jpg"

    }  ,{
        songname: "has has",
        filepath: "has has.mp3",
        cover:"has has.jpg"

    },  {
        songname: "tere hawale",
        filepath: "tere hawale.mp3",
        cover:"tere hawale.jpg"

    } 
]
 songitem.forEach((element, i) => 
{


    element.getElementsByTagName('img')[0].src= songs[i].cover;
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








Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeallplays();
        const clickedIndex = parseInt(e.target.id);
        if (clickedIndex === songindex && !audioelement.paused) {
            // If the clicked song is already playing, pause it
            audioelement.pause();
            masterplay.classList.remove("ri-pause-circle-line");
            masterplay.classList.add("ri-play-circle-line");
        } else {
            // Play the clicked song
            songindex = clickedIndex;
            e.target.classList.remove("ri-play-circle-line");
            e.target.classList.add("ri-pause-circle-line");
            songinfo.innerText = songs[songindex].songname;
            audioelement.src = songs[songindex].filepath;
            audioelement.currentTime = 0;
            audioelement.play();
            masterplay.classList.remove("ri-play-circle-line");
            masterplay.classList.add("ri-pause-circle-line");
        }
    });
});



  document.getElementById("forward").addEventListener("click", () => {
    if (songindex < songs.length - 1) {
        songindex += 1;
    } else {
        songindex = 0;
    }
    audioelement.src = songs[songindex].filepath;
    songinfo.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove("ri-play-circle-line");
    masterplay.classList.add("ri-pause-circle-line");
});

document.getElementById("previous").addEventListener("click", () => {
    if (songindex > 0) {
        songindex -= 1;
    } else {
        songindex = songs.length - 1;
    }
    audioelement.src = songs[songindex].filepath;
    songinfo.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    masterplay.classList.remove("ri-play-circle-line");
    masterplay.classList.add("ri-pause-circle-line");
});


