const video = document.querySelector("#video");
const playBtn = document.querySelector("#play-btn");

playBtn.onclick = function() {
  video.play();
  document.querySelector("#play-btn").style.opacity = 0;
  
  video.onended = function() {
    document.querySelector(".fnsh-video").classList.toggle("open");
    document.querySelector(".yt-btn").classList.toggle("open");
  };
}

const youtubeBtn = document.querySelector(".yt-btn");

youtubeBtn.addEventListener("click", function() {
    location.href = "https://youtu.be/MX01U3ajiLY";
});