const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Bug image
const bugImg = new Image();
bugImg.src = "images/bug.png";

let bug = { x: 100, y: 100, size: 50 };
let score = 0;
let speed = 1000;

// Draw bug
function drawBug() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.shadowColor = "black";
    ctx.shadowBlur = 10;

    ctx.drawImage(bugImg, bug.x, bug.y, bug.size, bug.size);
}

// Move bug randomly
function moveBug() {
    bug.x = Math.random() * (canvas.width - bug.size);
    bug.y = Math.random() * (canvas.height - bug.size);
    drawBug();
}

let interval = setInterval(moveBug, speed);

function hitBug(x, y) {
    if (
        x >= bug.x &&
        x <= bug.x + bug.size &&
        y >= bug.y &&
        y <= bug.y + bug.size
    ) {
        score++;
        document.getElementById("score").innerText = score;

        speed -= 50;
        if (speed < 200) speed = 200;

        clearInterval(interval);
        interval = setInterval(moveBug, speed);
    }
}

// Mouse click
canvas.addEventListener("click", function(e) {
    const rect = canvas.getBoundingClientRect();
    hitBug(e.clientX - rect.left, e.clientY - rect.top);
});

// Touch support
canvas.addEventListener("touchstart", function(e) {
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    hitBug(touch.clientX - rect.left, touch.clientY - rect.top);
});

// Pointer support
canvas.addEventListener("pointerdown", function(e) {
    const rect = canvas.getBoundingClientRect();
    hitBug(e.clientX - rect.left, e.clientY - rect.top);
});

// Reset score
function resetScore() {
    score = 0;
    document.getElementById("score").innerText = score;
}

// Reset speed
function resetSpeed() {
    speed = 1000;
    clearInterval(interval);
    interval = setInterval(moveBug, speed);
}


bugImg.onload = function() {
    drawBug();
};