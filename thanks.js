document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the stored data from localStorage
    const orderData = JSON.parse(localStorage.getItem('orderData'));

    if (orderData) {
        // Display the order data on the "Thank You" page
        const thankYouMessage = document.querySelector('.thank-you-message');

        // Create and append a summary of the order
        const summary = document.createElement('div');
        summary.innerHTML = `
            <h2>Order Summary</h2>
            <p><strong>Name:</strong> ${orderData.name}</p>
            <p><strong>Phone:</strong> ${orderData.phone}</p>
            <p><strong>Article:</strong> ${orderData.articleName}</p>
            <p><strong>Price:</strong> ${orderData.price} DA</p>
            <p><strong>Color:</strong> ${orderData.color}</p>
            <p><strong>Location:</strong> ${orderData.location}</p>
            <p><strong>Payment Method:</strong> ${orderData.payment}</p>
        `;
        thankYouMessage.appendChild(summary);

        // Optionally, clear the stored data
        localStorage.removeItem('orderData');
    }
});
