// Task 1 - Created Revenue Metric Card

// Selecting the dashboard using two different methods
const dashboard = document.getElementById("dashboard");

// Creating a new metric card for revenue
const revenueCard = document.createElement("div");
revenueCard.setAttribute("class", "metric-card"); // Assign class
revenueCard.setAttribute("id", "revenueCard"); // Assign unique ID
revenueCard.textContent = "Revenue: $0"; // Initial placeholder text

// Function to update revenue dynamically
function updateRevenue(amount) {
    let currentRevenue = parseInt(revenueCard.textContent.replace("Revenue: $", "")) || 0;
    currentRevenue += amount;
    revenueCard.textContent = `Revenue: $${currentRevenue}`;
}

// Appending the revenue card to the dashboard
dashboard.appendChild(revenueCard);

// Task 2 - Updated Metric Cards via Array Conversion

// Selecting all metric cards
const metricCardList = document.querySelectorAll(".metric-card");

// Converting NodeList to an array and updating styles
Array.from(metricCardList).forEach(card => {
    card.textContent += " - Updated";
    card.style.backgroundColor = "greenyellow";
});

// Task 3 - Implemented Dynamic Inventory List

const inventoryList = document.getElementById("inventoryList");

// Function to add a new inventory item
function addInventoryItem(product) {
    let newItem = document.createElement("li");
    newItem.setAttribute("class", "product-item");
    newItem.textContent = product;

    // Attach event listener to remove item on click AND increase revenue
    newItem.addEventListener("click", function () {
        removeInventoryItem(newItem);
        updateRevenue(100); // Increase revenue when an item is sold
    });

    inventoryList.appendChild(newItem);
}

// Function to remove inventory item
function removeInventoryItem(item) {
    inventoryList.removeChild(item);
}

// Testing with sample items
addInventoryItem("Click to Remove");
addInventoryItem("Try Adding More");

// Task 4 - Demonstrated Event Bubbling in Customer Section

const customerSection = document.getElementById("customerSection");

// Function to create customer cards dynamically
function addCustomer(name) {
    let customerCard = document.createElement("div");
    customerCard.setAttribute("class", "customer-card");
    customerCard.textContent = name;

    // Prevent event bubbling and trigger alert
    customerCard.addEventListener("click", function (event) {
        console.log(`Customer clicked: ${name}`);
        alert(`Customer: ${name} clicked!`);
        event.stopPropagation(); // Prevent parent click from firing
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
