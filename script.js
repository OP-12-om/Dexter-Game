
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const message = document.getElementById("message");

let gameStarted = false;
let step = 0;

document.addEventListener("keydown", handleKey);

function handleKey(e) {
    if (!gameStarted && e.key === " ") {
        startGame();
    } else if (gameStarted) {
        if (step === 0 && e.key === "1") {
            step++;
            message.textContent = "Type 4";
        } else if (step === 1 && e.key === "4") {
            step++;
            message.textContent = "Type 2";
        } else if (step === 2 && e.key === "2") {
            step++;
            message.textContent = "Now type 'holy shit'";
        } else if (step === 3 && e.key.toLowerCase() === "h") {
            step++;
            message.textContent = "Keep typing...";
        } else if (step === 4 && e.key.toLowerCase() === "o") {
            step++;
        } else if (step === 5 && e.key.toLowerCase() === "l") {
            step++;
        } else if (step === 6 && e.key.toLowerCase() === "y") {
            step++;
        } else if (step === 7 && e.key.toLowerCase() === " ") {
            step++;
        } else if (step === 8 && e.key.toLowerCase() === "s") {
            step++;
        } else if (step === 9 && e.key.toLowerCase() === "h") {
            step++;
        } else if (step === 10 && e.key.toLowerCase() === "i") {
            step++;
        } else if (step === 11 && e.key.toLowerCase() === "t") {
            step++;
            message.textContent = "Press all arrow keys!";
        } else if (step === 12 && ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
            step++;
            message.textContent = "Vent removed. Explore the room!";
            drawRoom();
        }
    }
}

function startGame() {
    gameStarted = true;
    message.textContent = "Type 1";
    drawStart();
}

function drawStart() {
    ctx.fillStyle = "#333";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.fillText("The Chancer is in the cage...", 300, 280);
}

function drawRoom() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#111";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.fillText("You can now move. Tasks will appear as you approach walls.", 150, 300);
}
