const keys = document.querySelectorAll('.piano-keys');

const pianoSound = new Audio('./KeySounds/key01.mp3');

keys.forEach((key) =&gt; {
    key.addEventListener('click', (e) =&gt; {
        const clickedKey = e.target.dataset.list;
        pianoSound.src = `./KeySounds/key${clickedKey}.mp3`;
        pianoSound.play();
    })
})