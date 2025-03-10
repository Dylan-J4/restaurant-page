export function loadMenu() {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("tab-content");

    const heading = document.createElement("h2");
    heading.textContent = "Menu";

    const menuList = document.createElement("ul");
    const items = ["Pizza", "Pasta", "Salad", "Burger"];

    items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        menuList.appendChild(listItem);
    });

    menuDiv.appendChild(heading);
    menuDiv.appendChild(menuList);

    return menuDiv;
}
