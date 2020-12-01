const panels = document.querySelectorAll(".panel");

function handlePanelClick(e: Event) {
  console.log(e.target);
  if (e.target) {
    const divTarget = <HTMLDivElement>e.target;

    if (divTarget.classList.contains("open")) {
      divTarget.classList.remove("open");
    } else {
      divTarget.classList.add("open");
    }
  }
}

panels.forEach((panel) => {
  panel.addEventListener("click", handlePanelClick);
});

console.log(panels);
