// Task 1 - Created Revenue Metric Card

// Selecting the dashboard using two different methods
const dashboard = document.getElementById("dashboard");
const dashboardSelector = document.querySelector("#dashboard");

// Creating a new metric card for revenue
const revenueCard = document.createElement("div");
revenueCard.setAttribute("class", "metric-card"); // Assigning class
revenueCard.setAttribute("id", "revenueCard"); // Assigning unique ID
revenueCard.textContent = "Revenue: $0"; // Adding placeholder text

// Appending the new revenue card to the dashboard
dashboard.appendChild(revenueCard);

// Task 2 - Updated Metric Cards via Array Conversion

// Selecting all metric cards
const metricCardList = document.querySelectorAll(".metric-card");

// Converting NodeList to an array
const metricCardArray = [...metricCardList];

// Updating each card text and background color
metricCardArray.forEach(card => {
    card.textContent += " - Updated";
    card.style.backgroundColor = "greenyellow";
});

// Task 3 - Implemented Dynamic Inventory List

const inventoryList = document.getElementById("inventoryList");

// Function to add new inventory item
function addInventoryItem(product) {
    let newItem = document.createElement("li");
    newItem.setAttribute("class", "product-item");
    newItem.setAttribute("data-product", product);
    newItem.textContent = product;

    // Attach event to remove item when clicked
    newItem.addEventListener("click", () => removeInventoryItem(newItem));
    
    inventoryList.appendChild(newItem);
}

// Function to remove inventory item
function removeInventoryItem(item) {
    inventoryList.removeChild(item);
}

// Testing with sample items
addInventoryItem("Click to Remove");
addInventoryItem("Try Adding More");
