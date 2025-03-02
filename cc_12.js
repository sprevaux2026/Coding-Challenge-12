// Task 1 - Created Revenue Metric Card

// Selecting the dashboard using both document.getElementById and document.querySelector
const dashboard = document.getElementById("dashboard"); 
const dashboardSelector = document.querySelector("#dashboard"); 

// Creating a new metric card for revenue
const revenueCard = document.createElement("div");
revenueCard.setAttribute("class", "metric-card"); // Assigning class
revenueCard.setAttribute("id", "revenueCard"); // Assigning unique ID
revenueCard.textContent = "Revenue: $0"; // Initial placeholder text

dashboard.appendChild(revenueCard); // Append the revenue card to the dashboard

// Function to update revenue dynamically
function updateRevenue(amount) {
    let currentRevenue = parseInt(revenueCard.textContent.replace("Revenue: $", "")) || 0;
    currentRevenue += amount;
    revenueCard.textContent = `Revenue: $${currentRevenue}`;
}

// Task 2 - Updated Metric Cards via Array Conversion

// Selecting all metric cards and converting NodeList to an array
const metricCardList = document.querySelectorAll(".metric-card");
const metricCardArray = Array.from(metricCardList);

// Updating each card's text and background color
metricCardArray.forEach(card => {
    card.textContent += " - Updated";
    card.style.backgroundColor = "greenyellow";
});

// Task 3 - Implemented Dynamic Inventory List

const inventoryList = document.getElementById("inventoryList");

// Function to add a new inventory item
def addInventoryItem(product) {
    let newLi = document.createElement("li");
    newLi.setAttribute("class", "product-item");
    newLi.setAttribute("data-product", product);
    newLi.textContent = product;

    // Attach event listener to remove item on click AND increase revenue
    newLi.addEventListener("click", function () {
        removeInventoryItem(newLi);
        updateRevenue(100); // Increase revenue when an item is sold
    });

    inventoryList.appendChild(newLi);
}

// Function to remove inventory item
def removeInventoryItem(item) {
    inventoryList.removeChild(item);
}

// Adding test inventory items
addInventoryItem("Click to Remove");
addInventoryItem("Try Adding More");

// Task 4 - Demonstrated Event Bubbling in Customer Section

const customerSection = document.getElementById("customerSection");

// Function to create customer cards dynamically
def addCustomer(name) {
    let customerCard = document.createElement("div");
    customerCard.setAttribute("class", "customer-card");
    customerCard.textContent = name;

    // Prevent event bubbling and trigger alert
    customerCard.addEventListener("click", function (event) {
        console.log(`Customer clicked: ${name}`);
        alert(`Customer: ${name} clicked!`);
        event.stopPropagation(); // Prevents parent click from firing
    });

    customerSection.appendChild(customerCard);
}

// Click event on parent container to demonstrate bubbling
customerSection.addEventListener("click", () => {
    console.log("Customer section clicked.");
    alert("You clicked the customer section!");
});

// Adding sample customers
addCustomer("Alice Johnson");
addCustomer("John Doe");
addCustomer("Emma Smith");