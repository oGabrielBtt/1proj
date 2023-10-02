function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //subtituir a img
  if (html.classList.contains("light")) {
    //mode light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //mode dark
    img.setAttribute("src", "./assets/avatar.png")
  }
}
