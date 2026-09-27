const colorButton = document.querySelector("#color-button");

colorButton.addEventListener("click", () => {
  const creamColors = ["#f7f0df", "#f2e8d0", "#eee3c8", "#faf4e8"];
  const randomColor = creamColors[Math.floor(Math.random() * creamColors.length)];
  document.body.style.backgroundColor = randomColor;
});