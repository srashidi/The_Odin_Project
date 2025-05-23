import "../css/style.css"
import homePage from "./pages/home";
import menuPage from "./pages/menu";
import aboutPage from "./pages/about";

homePage();

const homeButton = document.getElementById('home-btn');
const menuButton = document.getElementById('menu-btn');
const aboutButton = document.getElementById('about-btn');

homeButton.addEventListener('click', () => {
    const content = document.getElementById('content');
    content.innerHTML = '';
    homePage();
});

menuButton.addEventListener('click', () => {
    const content = document.getElementById('content');
    content.innerHTML = '';
    menuPage();
});

aboutButton.addEventListener('click', () => {
    const content = document.getElementById('content');
    content.innerHTML = '';
    aboutPage();
});