document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const articleName = document.getElementById('article-name').value;
    const price = document.getElementById('price').value;
    const location = document.getElementById('location').value;
    const color = document.getElementById('color').value;
    const payment = document.getElementById('payment').value;

    // Store the form data in localStorage
    localStorage.setItem('orderData', JSON.stringify({
        name,
        phone,
        articleName,
        price,
        location,
        color,
        payment
    }));

    // Redirect to the "Thank You" page
    window.location.href = 'thanks.html';
});
