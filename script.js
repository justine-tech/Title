let mmusic = document.getElementById("mmusic");
let vvideo = document.getElementById("vvideo");
let ddsp = document.querySelector(".main");
let ddspp = document.querySelector(".main2");
let fafa = document.getElementById("fafa");
let kiki = document.getElementById("kiki");
let ily = document.querySelector(".ppp");
listm = "m2.mp3";
listv = "v2.mp4";
view.onclick = function(){
    mmusic.src = "m1.mp3";
    mmusic.play();
    ddsp.style.display = "none";
    vvideo.playbackRate = 0.5;
    ddspp.style.display = "inline-block";
    fafa.style.display = "block";
}

fafa.onclick = function(){
    vvideo.src = listv;
    mmusic.src = listm;
    vvideo.playbackRate = 0.5;
    mmusic.play();
    vvideo.style.display = "inline-block";
    fafa.style.display = "none";
    kiki.style.display = "none";
    ily.style.display = "none";
}
