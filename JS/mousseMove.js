const mouseMove = document.querySelector(".mouseMove");

window.addEventListener("mousemove", (e) => {
  mouseMove.style.left = e.pageX + "px";
  mouseMove.style.top = e.pageY + "px";
});

document.documentElement.style.cursor = "none";