export function loadContact() {
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("tab-content");

    const heading = document.createElement("h2");
    heading.textContent = "Contact Us";

    const contactEmail = document.createElement("p");
    contactEmail.textContent = "Email: contact@restaurant.com";

    const contactPhone = document.createElement("p");
    contactPhone.textContent = "Phone: 079-4422-0000";

    const contactAddress = document.createElement("p");
    contactAddress.textContent = "42 Diner Street, Pizza Town, United Ketchup"

    const contactDateTime = document.createElement("ul");
    const DateTimeItems = ["Mon: 2PM - 10PM", "Tue: 2PM - 10PM", "Wed: 2PM - 10PM"];

    DateTimeItems.forEach(item => {
        const Item = document.createElement("li");
        Item.textContent = item;
        contactDateTime.appendChild(Item);
    });

    
    contactDiv.append(heading, contactEmail, contactPhone, contactAddress, contactDateTime);
    return contactDiv;
}
