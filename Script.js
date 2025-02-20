// Function to validate the input
function validateInput(location) {
    return location && location.trim().length > 0;
}

// Fetching deals based on user input (mocking API request for simplicity)
async function fetchDeals(location) {
    const mockDeals = [
        {
            name: "Restaurant ABC",
            description: "Enjoy 20% off your first meal!",
            image: "https://via.placeholder.com/300x200",
            discount: "20%",
        },
        {
            name: "Store XYZ",
            description: "50% off on selected items!",
            image: "https://via.placeholder.com/300x200",
            discount: "50%",
        },
        {
            name: "Cafe 123",
            description: "Get a free drink with your order!",
            image: "https://via.placeholder.com/300x200",
            discount: "Free Drink",
        }
    ];

    // Simulating an API response delay
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockDeals), 1000);
    });
}

// Displaying the fetched deals
function displayDeals(deals) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    if (deals.length === 0) {
        resultsContainer.innerHTML = "<p class='text-center text-gray-500'>No deals found.</p>";
        return;
    }

    deals.forEach(deal => {
        const dealCard = document.createElement('div');
        dealCard.classList.add('card');

        dealCard.innerHTML = `
            <img src="${deal.image}" alt="${deal.name}">
            <h3>${deal.name}</h3>
            <p>${deal.description}</p>
            <p class="font-bold text-blue-500">${deal.discount}</p>
        `;
        
        resultsContainer.appendChild(dealCard);
    });
}

// Event handler for the search button
document.getElementById('searchButton').addEventListener('click', async () => {
    const location = document.getElementById('location').value;
    const errorMessage = document.getElementById('errorMessage');

    if (!validateInput(location)) {
        errorMessage.textContent = "Please enter a valid location!";
        errorMessage.classList.remove('hidden');
        return;
    }

    errorMessage.classList.add('hidden');

    // Fetching deals based on location
    const deals = await fetchDeals(location);
    displayDeals(deals);
});
