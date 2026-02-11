const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");

// Make the NO button run away when hovered
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// Handle YES click
yesBtn.addEventListener("click", () => {
    result.textContent = "💘 They said YES! 💘";
    yesBtn.disabled = true;
    noBtn.style.display = "none";
});
