let song_image = document.getElementById("cover_photo")
let song_title = document.getElementById("title")
let song_singer = document.getElementById("singer")
let song_play = document.getElementById("play")
let song_prev = document.getElementById("prev")
let song_next = document.getElementById("next")



console.log(song_play)

let songs_list = [
    {
        name : 'Jaan Nisaar',
        Image : 'images/Jaannisar.webp',
        Song : 'music/Jaan Nisaar.mp3',
        Singer : 'ArjitSingh'
    },
    {
        name : 'Night Changes',
        Image : 'images/NightChanges.jpeg',
        Song : 'music/Night Changes.mp3',
        Singer : 'One-Direction'
    },
    {
        name : 'Lokiverse-2.O',
        Image : 'images/LokiVerse2.o.jpg',
        Song : 'music/Lokiverse-2.0.mp3',
        Singer : 'Anirudh Ravichandran'
    },
    {
        name : 'Senorita',
        Image : 'images/SenoritaImage.jpeg',
        Song : 'music/Senorita.mp3',
        Singer : 'ShawnMendes'
    }
]

let i=0;
let flag=false;

var audio = new Audio(songs_list[i].Song);
song_image.src = songs_list[i].Image
song_title.innerHTML = songs_list[i].name
song_singer.innerHTML = songs_list[i].Singer

song_play.addEventListener("click", function(){

    if(flag ===false){
        audio.play()
        flag=true;
        song_play.innerHTML = '<i class="fa fa-pause-circle fa-3x"></i>';
        console.log(flag)
    }
    else{
        audio.pause()
        flag=false;
        song_play.innerHTML = '<i class="fas fa-play fa-3x prev"></i>';
        console.log(flag)
    }
})

song_next.addEventListener("click", function(){
    
    audio.pause()
    flag = false;
    song_play.innerHTML = '<i class="fas fa-play fa-3x prev"></i>';
    i = i+1;
    if(i>=songs_list.length){
        
        i=0;
    }
    console.log(i)
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    audio = new Audio(songs_list[i].Song)
    if(flag ===false){
        audio.play()
        flag=true;
        song_play.innerHTML = '<i class="fa fa-pause-circle fa-3x"></i>';
        console.log(flag)
    }
    
})

song_prev.addEventListener("click", function(){
    
    audio.pause()
    flag = false;
    song_play.innerHTML = '<i class="fas fa-play fa-3x prev"></i>';
    i = i-1;
    if(i<=0){
        i=songs_list.length-1;
        console.log(i)
    }
    song_image.src = songs_list[i].Image
    song_singer.innerHTML = songs_list[i].Singer
    song_title.innerHTML = songs_list[i].name
    audio = new Audio(songs_list[i].Song)
    if(flag ===false){
        audio.play()
        flag=true;
        song_play.innerHTML = '<i class="fa fa-pause-circle fa-3x"></i>';
        console.log(flag)
    }
    
    
})