const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");

let yesScale = 1;
let noScale = 1;

const yesGrowth = 0.15;
const noShrink = 0.10;

const loveSong = document.getElementById("loveSong");

function softHeartBurst() {
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = Math.random() > 0.5 ? "💖" : "💗";

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight + "px";

        document.body.appendChild(heart);

        // Remove heart after animation finishes
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}

noBtn.addEventListener("mouseover", () => {

    // Move NO button randomly
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

    // Grow YES button
    yesScale += yesGrowth;
    yesScale = Math.min(yesScale, 3);
    yesBtn.style.transform = `scale(${yesScale})`;

    // Shrink NO button
    noScale -= noShrink;
    noScale = Math.max(noScale, 0.4);
    noBtn.style.transform = `scale(${noScale})`;
});

yesBtn.addEventListener("click", () => {

    // 🎶 Fade in music
    loveSong.volume = 0;
    loveSong.play();

    let fadeAudio = setInterval(() => {
        if (loveSong.volume < 1) {
            loveSong.volume += 0.05;
        } else {
            clearInterval(fadeAudio);
        }
    }, 100);

    // 💖 Background fade
    document.body.classList.add("romantic");

    // 🌸 Reset buttons
    yesScale = 1;
    noScale = 1;
    yesBtn.style.transform = "scale(1)";
    noBtn.style.transform = "scale(1)";
    noBtn.style.display = "none";

    // 💌 Show result
    result.textContent = "You just made me the happiest person alive 💘";
    result.classList.add("show", "glow");

    // 💖 Start eternal heart rain
    setInterval(softHeartBurst, 600);
});