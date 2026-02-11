const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");
const message = document.getElementById("message");

let lvl = 1;

let yesScale = 1;
let noScale = 1;

const yesGrowth = 0.15;
const noShrink = 0.10;

const loveSong = document.getElementById("loveSong");

const escalationMessages = [
    "Please just click YES 💖",
    "Are you sure you don't want to be my Valentine? 😢",
    "Try clicking the super large button, you can't miss it! 😏",
    "I promise it will make me the happiest person alive 💘",
    "The hearts are watching you… 💌",
    "Just one little click… for love 🌸",
    "Don't make me beg… 😇",
    "Your destiny is to say YES! ✨",
    "Think of all the fun we could have together 💕",
    "This button is magically irresistible… 💞",
    "I'll buy you a burger if you click YES 🍔"
];

let escalationIndex = 0;

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
    if (lvl == 3) {
        // Move NO button randomly
        const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

        noBtn.style.position = "absolute";
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";

        // Grow YES button
        if (yesScale < 3) {
            yesScale += yesGrowth;
            yesScale = Math.min(yesScale, 3);
            yesBtn.style.transform = `scale(${yesScale})`;
        } else {
            message.textContent = escalationMessages[escalationIndex];
            escalationIndex = (escalationIndex + 1) % escalationMessages.length;
        }

        // Shrink NO button
        noScale -= noShrink;
        noScale = Math.max(noScale, 0.4);
        noBtn.style.transform = `scale(${noScale})`;
    }
});

noBtn.addEventListener("click", () => {
    if (lvl == 2) {
        message.textContent = "Are you free on February 14th?";
        lvl--;
        noBtn.style.filter = "grayscale(100%)";
    }
})

yesBtn.addEventListener("click", () => {
    if (lvl == 1) {
        message.textContent = "Are you sure???";
        lvl++;
        noBtn.style.filter = "grayscale(0%)";
    } else if (lvl == 2) {
        message.textContent = "Brie, will you be my Valentine?";
        lvl++;
    } else {
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
        yesBtn.style.display = "none";
        noBtn.style.transform = "scale(1)";
        noBtn.style.display = "none";
        message.style.display = "none";

        // 💌 Show result
        result.textContent = "You just made me the happiest person alive 💘";
        result.classList.add("show", "glow");

        // 💖 Start eternal heart rain
        setInterval(softHeartBurst, 600);
    }
});