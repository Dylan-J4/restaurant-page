import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";
import "../src/styles.css";

const content = document.getElementById("content");

function switchTab(loadFunction) {
    content.innerHTML = "";
    content.appendChild(loadFunction());
}

document.addEventListener("DOMContentLoaded", () => {
    switchTab(loadHome);

    document.getElementById("home-btn").addEventListener("click", () => switchTab(loadHome));
    document.getElementById("menu-btn").addEventListener("click", () => switchTab(loadMenu));
    document.getElementById("contact-btn").addEventListener("click", () => switchTab(loadContact));
});