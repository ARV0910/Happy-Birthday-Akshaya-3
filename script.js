function next(n){
    document.querySelectorAll('.screen')
        .forEach(s => s.classList.remove('active'));

    const nextScreen = document.getElementById('s' + n);
    nextScreen.classList.add('active');

    // 🔥 trigger bloom ONLY on final screen
    if(n === 5){
        setTimeout(() => {
            document.querySelector('.rose').classList.add('bloom');
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
