function calculate() {

  let option1 = document.getElementById("option1").value;
  let option2 = document.getElementById("option2").value;

  let passion = parseInt(document.getElementById("passion").value) || 0;
  let stability = parseInt(document.getElementById("stability").value) || 0;
  let money = parseInt(document.getElementById("money").value) || 0;
  let risk = parseInt(document.getElementById("risk").value) || 0;

  let opt1Score =
    (passion * 5) +
    (stability * 5) +
    (money * 4) +
    (risk * 2);

  let opt2Score =
    (passion * 5) +
    (stability * 2) +
    (money * 3) +
    (risk * 5);

  let resultText = "";

  let difference = Math.abs(opt1Score - opt2Score);
  let total = opt1Score + opt2Score;
  let confidence = total === 0 ? 0 : Math.round((difference / total) * 100);

  if (opt1Score > opt2Score) {
    resultText = option1 + " is recommended.\nConfidence: " + confidence + "%";
  } else if (opt2Score > opt1Score) {
    resultText = option2 + " is recommended.\nConfidence: " + confidence + "%";
  } else {
    resultText = "This is a tough decision. Both are equally strong.";
  }

  resultText += "\n\nThis decision reflects your priorities.";

  let resultBox = document.getElementById("result");

  resultBox.style.opacity = 0;

  setTimeout(() => {
    resultBox.innerText = resultText;
    resultBox.style.opacity = 1;
  }, 150);
}


// 🌌 particles
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2 + 1,
    speedX: Math.random() * 0.5 - 0.25,
    speedY: Math.random() * 0.5 - 0.25
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(168, 85, 247, 0.7)";

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;
  });

  requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});


// 🖱️ cursor
const cursor = document.querySelector(".cursor");
const trail = document.querySelector(".cursor-trail");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

  trail.style.left = e.clientX + "px";
  trail.style.top = e.clientY + "px";
});

const button = document.querySelector("button");

button.addEventListener("mouseenter", () => {
  cursor.style.transform = "translate(-50%, -50%) scale(1.8)";
});

button.addEventListener("mouseleave", () => {
  cursor.style.transform = "translate(-50%, -50%) scale(1)";
});