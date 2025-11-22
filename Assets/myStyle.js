document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".btn, .accordion-button");
  buttons.forEach(btn => {
    btn.addEventListener("mousedown", () => {
      btn.style.transform = "scale(0.97)";
    });
    btn.addEventListener("mouseup", () => {
      btn.style.transform = "scale(1)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
    });
  });
});
