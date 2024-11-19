function toggleMode() {
  const html = document.documentElement
  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  */
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Tales Porto sorrindo, usando camisa preta, óculos de sol, barba e no fundo uma casa amarela.")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Tales Porto sorrindo, usando blusa de frio, barba e no fundo uma lagoa.")
  }
}
