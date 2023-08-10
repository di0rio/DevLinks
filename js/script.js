var toggleMod = () => {
  const html = document.documentElement;
  html.classList.toggle("light");

  const isLight = html.classList.contains("light");
  const srcValue = isLight ? "../img/imagemFundoBranco.jpg": "../img/motinha.jpg";
  const altValue = isLight ? "Imagem de perfil no modo claro com um rosto perto, com ohos grandes (foto tirada de cima)": "Imagem com uma pessoa na moto de uma criança";

  document.querySelector("#profile img").setAttribute("src", srcValue);
  document.querySelector("#profile img").setAttribute("alt", altValue);
};
