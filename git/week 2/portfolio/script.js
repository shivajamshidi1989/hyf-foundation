const colorButton = document.querySelector("#color-button");

colorButton.addEventListener("click", () => {
  const purpleColors = ["#170D20", "#1E0F2B", "#24102F", "#2B153A"];
  const randomColor = purpleColors[Math.floor(Math.random() * purpleColors.length)];
  document.body.style.backgroundColor = randomColor;
});