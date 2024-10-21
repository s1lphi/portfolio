const youtube = document.querySelector("#youtube");
const instagram = document.querySelector("#instagram");
const telegram = document.querySelector("#telegram");

youtube.addEventListener("click", function() {
    location.href = "https://youtube.com/@morgueofurexes";
});

instagram.addEventListener("click", function() {
    location.href = "https://instagram.com/morgueofurexes?igshid=ZDdkNTZiNTM=";
});

telegram.addEventListener("click", function() {
    location.href = "https://t.me/morgueofurexes_music";
});