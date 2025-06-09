const audio = document.getElementById("audio");
const playBtn = document.getElementById("play-btn");
const progressBar = document.getElementById("progress-bar");
const progressFilled = document.getElementById("progress-filled");
const trackTitle = document.querySelector(".track-info h2");
const trackArtist = document.querySelector(".track-info p");
const coverImg = document.getElementById("cover-img");
const lyricsPanel = document.getElementById("lyrics-panel");
const lyricsText = document.getElementById("lyrics-text");
const toggleLyricsBtn = document.getElementById("toggle-lyrics");
const closeLyricsBtn = document.getElementById("close-lyrics");

const playlist = [
  {
    title: "A New Kind Of Love",
    artist: "Demo",
    file: "A New Kind Of Love (Demo).mp3",
    lyrics: "A new kind of love, Genetically altered, Enough of Love Lite",
    cover: "✰.jpg"
  },
  {
    title: "Tek It",
    artist: "Cafune",
    file: "Cafuné - Tek It (I Watch The Moon) [Official Video].mp3",
    lyrics: `If you wanna run away with me, I know a galaxy
And I can take you for a ride...`,
    cover: "download (1).jpg"
  },
  {
    title: "Consume",
    artist: "Chase Atlantic",
    file: "Chase Atlantic - Consume feat. Goon Des Garcons (Official Audio).mp3",
    lyrics: `I do the same thing I told you that I never would
I told you I'd change, even when I knew I never could...`,
    cover: "download (2).jpg"
  },
  {
    title: "Get You",
    artist: "Daniel Cashia",
    file: "Get You (feat. Kali Uchis).mp3",
    lyrics: `I do the same thing I told you that I never would
I told you I'd change, even when I knew I never could...`,
    cover: "download.jpg"
  },
  {
    title: "LDR",
    artist: "Shoti",
    file: "Shoti - LDR (Official Music Video).mp3",
    lyrics: `I do the same thing I told you that I never would
I told you I'd change, even when I knew I never could...`,
    cover: "7a222fc4-c0b8-4770-8a82-2a01dd94c9a9.jpg"
  },
  {
    title: "Tio Toe",
    artist: "Don't know",
    file: "Tip Toe.mp3",
    lyrics: `I do the same thing I told you that I never would
I told you I'd change, even when I knew I never could...`,
    cover: "download (2).jpg"
  },
];

let currentTrack = 0;

function loadTrack(index) {
  const track = playlist[index];
  audio.src = track.file;
  trackTitle.textContent = track.title;
  trackArtist.textContent = track.artist;
  lyricsText.textContent = track.lyrics;
  coverImg.src = track.cover;
  lyricsPanel.classList.remove("active");
  progressFilled.style.width = "0%";
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerHTML = "&#10073;&#10073;";
  } else {
    audio.pause();
    playBtn.innerHTML = "&#9658;";
  }
});

audio.addEventListener("timeupdate", () => {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressFilled.style.width = `${percent}%`;
});

progressBar.addEventListener("click", (e) => {
  const width = progressBar.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
});

toggleLyricsBtn.addEventListener("click", () => {
  lyricsPanel.classList.add("active");
});

closeLyricsBtn.addEventListener("click", () => {
  lyricsPanel.classList.remove("active");
});

document.querySelectorAll(".btn")[0].addEventListener("click", () => {
  currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrack);
  audio.play();
});

document.querySelectorAll(".btn")[2].addEventListener("click", () => {
  currentTrack = (currentTrack + 1) % playlist.length;
  loadTrack(currentTrack);
  audio.play();
});

loadTrack(currentTrack);
