function next(n){
    document.querySelectorAll('.screen')
        .forEach(s => s.classList.remove('active'));

    const nextScreen = document.getElementById('s' + n);
    nextScreen.classList.add('active');

    // 🔥 trigger bloom ONLY on final screen
    if (n === 4) {
    setTimeout(() => {
        createConfettiBurst();
    }, 200);
}

if (n === 5) {
    setTimeout(() => {
        document.querySelector(".rose").classList.add("bloom");
    }, 200);
}
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";

    // random horizontal position
    heart.style.left = Math.random() * 100 + "vw";

    // random size
    const size = Math.random() * 15 + 10;
    heart.style.fontSize = size + "px";

    // random duration
    const duration = Math.random() * 3 + 4;
    heart.style.animationDuration = duration + "s";

    document.querySelector(".hearts").appendChild(heart);

    // remove after animation
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// spawn continuously
setInterval(createHeart, 400);

function createConfettiBurst() {
    const container = document.querySelector(".confetti");

    for (let i = 0; i < 80; i++) {
        const piece = document.createElement("div");
        piece.classList.add("confetti-piece");

        // position (start just above screen)
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.top = "-10vh";

        // colors
        const colors = ["#ff4f9a", "#c77dff", "#ffd166", "#06d6a0", "#ffffff"];
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];

        // size
        piece.style.width = Math.random() * 6 + 4 + "px";
        piece.style.height = Math.random() * 10 + 6 + "px";

        // animation timing
        const duration = Math.random() * 2 + 3; // 3–5s
        piece.style.animationDuration = duration + "s";
        piece.style.animationTimingFunction = "linear";

        // slight delay for natural spread
        const delay = Math.random() * 1.5;
        piece.style.animationDelay = delay + "s";

        container.appendChild(piece);

        // remove AFTER it has gone off screen
        setTimeout(() => {
            piece.remove();
        }, (duration + delay + 0.5) * 1000);
    }
}
