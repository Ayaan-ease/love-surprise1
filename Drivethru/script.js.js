const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let yesScale = 1;

// NO runs away + YES grows
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  yesScale += 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;
});

// Screen switching
function showScreen(num) {
  document.querySelectorAll(".screen").forEach(screen =>
    screen.classList.remove("active")
  );
  document.getElementById(`screen${num}`).classList.add("active");
}

// YES → Screen 2
yesBtn.addEventListener("click", () => {
  showScreen(2);
});

// Handle "May I?" answer
document.getElementById("submitBtn").addEventListener("click", () => {
  const answer = document.getElementById("answer").value.toLowerCase();
  const hint = document.getElementById("hint");

  if (
    answer.includes("yes") ||
    answer.includes("okay") ||
    answer.includes("sure") ||
    answer.includes("ha") ||
    answer.includes("ok")
  ) {
    showScreen(3);
    document.getElementById("song").play();
  } else {
    hint.innerText = "Hehe… think again 😌💗";
  }
});
