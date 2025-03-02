// Task 1 - Created Revenue Metric Card

// Grabbing the dashboard element in two ways
const dashboard = document.getElementById("dashboard"); 
const dashboardSelector = document.querySelector("#dashboard"); 

// Making a new card for revenue and setting its properties
const revenueCard = document.createElement("div");
revenueCard.setAttribute("class", "metric-card"); // Give it a class for styling
revenueCard.setAttribute("id", "revenueCard"); // Unique ID to target it later
revenueCard.textContent = "Revenue: $0"; // Start at zero revenue

dashboard.appendChild(revenueCard); // Add the card to the dashboard

// Function to update the revenue dynamically
function updateRevenue(amount) {
    let currentRevenue = parseInt(revenueCard.textContent.replace("Revenue: $", "")) || 0;
    currentRevenue += amount;
    revenueCard.textContent = `Revenue: $${currentRevenue}`;
}

// Task 2 - Updated Metric Cards via Array Conversion

// Get all metric cards and turn them into an array
const metricCardList = document.querySelectorAll(".metric-card");
const metricCardArray = Array.from(metricCardList);

// Loop through each card and update its text and background color
metricCardArray.forEach(card => {
    card.textContent += " - Updated"; // Append "Updated" to the text
    card.style.backgroundColor = "greenyellow"; // Change background for visibility
});

// Task 3 - Implemented Dynamic Inventory List

const inventoryList = document.getElementById("inventoryList");

// Function to add a new item to the inventory list
function addInventoryItem(product) {
    let newLi = document.createElement("li");
    newLi.setAttribute("class", "product-item");
    newLi.setAttribute("data-product", product);
    newLi.textContent = product;

    // Clicking the item removes it and increases revenue
    newLi.addEventListener("click", function () {
        removeInventoryItem(newLi);
        updateRevenue(100); // Add $100 when an item is removed (sold)
    });

    inventoryList.appendChild(newLi);
}

// Function to remove an inventory item
function removeInventoryItem(item) {
    inventoryList.removeChild(item);
}

// Adding test inventory items
addInventoryItem("Laptop");
addInventoryItem("Smartphone");

// Task 4 - Demonstrated Event Bubbling in Customer Section

const customerSection = document.getElementById("customerSection");

// Function to create and display customer cards
function addCustomer(name) {
    let customerCard = document.createElement("div");
    customerCard.setAttribute("class", "customer-card");
    customerCard.textContent = name;

    // Clicking the card logs it and prevents bubbling
    customerCard.addEventListener("click", function (event) {
        console.log(`Customer clicked: ${name}`);
        alert(`Customer: ${name} clicked!`);
        event.stopPropagation(); // Stop the click from affecting the parent container
    });

    customerSection.appendChild(customerCard);
}

// If the customer section itself is clicked, log it
customerSection.addEventListener("click", () => {
    console.log("Customer section clicked.");
    alert("You clicked the customer section!");
});

// Add some example customers
addCustomer("Alice Johnson");
addCustomer("John Doe");
addCustomer("Emma Smith");