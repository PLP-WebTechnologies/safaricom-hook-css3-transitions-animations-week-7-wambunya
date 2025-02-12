// Part 2: JavaScript Functions

// Function with Parameters and Return Values
function calculateArea(width, height) {
  return width * height;
}

document.getElementById("calculate-area").addEventListener("click", () => {
  const width = parseFloat(document.getElementById("width").value);
  const height = parseFloat(document.getElementById("height").value);
  if (isNaN(width) || isNaN(height)) {
      alert("Please enter valid numbers for width and height.");
  } else {
      const area = calculateArea(width, height);
      document.getElementById("area-result").textContent = `Area: ${area}`;
  }
});

// Function Demonstrating Scope
let globalVariable = "I'm global!";

function demonstrateScope() {
  let localVariable = "I'm local!";
  console.log(globalVariable); // Accessible
  console.log(localVariable); // Accessible
}

demonstrateScope();
// console.log(localVariable); // Uncommenting this will throw an error (localVariable is not defined)

// Function to Toggle a CSS Class
function toggleModal() {
  const modal = document.getElementById("modal");
  modal.classList.toggle("hidden");
}

document.getElementById("toggle-modal-button").addEventListener("click", toggleModal);

// Close modal when clicking outside
window.addEventListener("click", (event) => {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
      toggleModal();
  }
});

// Part 3: Combining CSS Animations with JavaScript
document.getElementById("animate-button").addEventListener("click", () => {
  const box = document.getElementById("animated-box");
  box.style.animation = "bounce 0.5s ease-in-out";
  // Reset animation after it ends
  box.addEventListener("animationend", () => {
      box.style.animation = "none";
  }, { once: true });
});