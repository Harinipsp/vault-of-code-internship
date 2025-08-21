// Ingredient toggle
document.getElementById("toggle-ingredients").addEventListener("click", function() {
  let list = document.getElementById("ingredients");
  list.classList.toggle("hidden");
  this.textContent = list.classList.contains("hidden") ? "Show Ingredients" : "Hide Ingredients";
});

// Steps toggle
document.getElementById("toggle-steps").addEventListener("click", function() {
  let list = document.getElementById("steps");
  list.classList.toggle("hidden");
  this.textContent = list.classList.contains("hidden") ? "Show Steps" : "Hide Steps";
});

// Cooking sequence
let steps = document.querySelectorAll("#steps li");
let currentStep = -1;
let progress = document.querySelector(".progress-bar");

document.getElementById("start").addEventListener("click", function() {
  steps.forEach(step => step.classList.remove("active-step"));
  currentStep = 0;
  steps[currentStep].classList.add("active-step");
  document.getElementById("next").disabled = false;
  progress.style.width = (100 / steps.length) * (currentStep + 1) + "%";
});

document.getElementById("next").addEventListener("click", function() {
  if (currentStep < steps.length - 1) {
    steps[currentStep].classList.remove("active-step");
    currentStep++;
    steps[currentStep].classList.add("active-step");
    progress.style.width = (100 / steps.length) * (currentStep + 1) + "%";
  } else {
    alert("Recipe Completed! Enjoy your Chocolate Cake!");
    this.disabled = true;
  }
});
