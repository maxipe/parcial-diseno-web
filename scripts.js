document.addEventListener("DOMContentLoaded", () => {
  const modoInicial = localStorage.getItem("modo-noche");

  if (!modoInicial) {
    localStorage.setItem("modo-noche", false);
  }

  if (modoInicial === "true") {
    const itemsACambiar = document.querySelectorAll(".cambia-color");

    itemsACambiar.forEach((i) => {
      i.classList.toggle("dark");
    });
  }

  togglemodo = () => {
    const itemsACambiar = document.querySelectorAll(".cambia-color");

    itemsACambiar.forEach((i) => {
      i.classList.toggle("dark");
    });
    console.log("test")
  };
});
