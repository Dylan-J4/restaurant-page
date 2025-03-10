export function loadHome() {
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("tab-content");

    const heading = document.createElement("h3");
    heading.textContent = "Welcome to Dyl's Delicious Diner!";
    heading.style.fontSize = "30px"

    const description = document.createElement("p");
    description.textContent = "Enjoy the finest meals crafted with love and passion";

    homeDiv.appendChild(heading);
    homeDiv.appendChild(description);

    return homeDiv;
}