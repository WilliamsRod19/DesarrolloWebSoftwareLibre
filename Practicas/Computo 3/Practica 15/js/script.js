const songs = [
    {title : '', artist : '', src : '', cover : ''},
    {title : '', artist : '', src : '', cover : ''},
    {title : '', artist : '', src : '', cover : ''},
    {title : '', artist : '', src : '', cover : ''},
    {title : '', artist : '', src : '', cover : ''}
]

let currentSongIndex = 0;

let isPlaying = false

let audio

function playCurrentSong(){
    if (audio){
        audio.stop()
    }

    audio = new Howl({
        src: [songs[currentSongIndex].src],
        autoplay: isPlaying,
        volume: volumeSlider.value,
        onend: function () {
            playNextSong()
        }
    });

    updateSongInfo();
}

const playbutton = document.getElementById('play')
const pauseButton = document.getElementById('pause')
const nextButton = document.getElementById('next')
const prevButton = document.getElementById('prev')
const volumeSlider = document.getElementById('volume')
const songTitle = document.getElementById('songTitle')
const songArtist = document.getElementById('songArtist')
const albumCover = document.getElementById('.card-img-top')

playbutton.addEventListener('click', () => {
    isPlaying = true
    playCurrentSong()
})

pauseButton.addEventListener('click', () => {
    isPlaying = false
    audio.pause()
})

nextButton.addEventListener('click', () => {
    playNextSong()
})

prevButton.addEventListener('click', () => {
    if(audio.seek() > 5){
        audio.seek(0)
    } else {
        currentSongIndex = (currentSongIndex -1 + songs.length) % songs.length
        playCurrentSong()
    }
})

volumeSlider.addEventListener('input', () => {
    audio.volume(volumeSlider.value)
})

function updateSongInfo(){
    songTitle.textContent = songs[currentSongIndex].title,
    songArtist.textContent = songs[currentSongIndex].artist,
    albumCover.src = songs[currentSongIndex].cover
}

function playNextSong(){
    currentSongIndex = (currentSongIndex + 1) % songs.length
    playCurrentSong()
}

playCurrentSong()