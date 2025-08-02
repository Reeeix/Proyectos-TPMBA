import './header.css'

const headerTemplate = () => {
  return `
  <button id="logo"><img src="src/components/assets/logo.png" alt="logo-pinterest"></button>
  <input type="text" placeholder="Search" id="searchinput"/>
  <button id="searchbtn"><img src="src/components/assets/buscar.png" alt="Search icon"/></button>
  <button id="darkmodebtn"><img src="src/components/assets/luna.png" alt="Dark mode icon"/ id="darkmodeicon"></button>
  <img
    src="src/components/assets/usuario.png"
    alt="Profile image"
    class="profileimg"
  />
    `;
};

const themeSwitch = () => {
  document.body.classList.toggle("dark");
};

const listeners = () => {
  const darkmodebtn = document.querySelector("#darkmodebtn");
  darkmodebtn.addEventListener("click", () => {
    themeSwitch();
    const theme = document.body.classList.contains("dark");
    if (theme) {
      document.querySelector("#darkmodeicon").src = "src/components/assets/sol.png";
    } else {
      document.querySelector("#darkmodeicon").src = "./assets/luna.png";
    }
  });
};

const printHeaderTemplate = () => {
  document.querySelector("header").innerHTML = headerTemplate();
  listeners();
};



export default printHeaderTemplate;