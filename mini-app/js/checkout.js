// Checkout Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Update time in status bar
    function updateTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const timeElement = document.querySelector('.time');
        
        if (timeElement) {
            timeElement.textContent = `${hours}:${minutes}`;
        }
    }
    
    updateTime();
    setInterval(updateTime, 60000);
});

function selectAddress() {
    alert('Address selection feature - coming soon!\\n\\nYou will be able to:\\n- Select saved addresses\\n- Add new address\\n- Set default delivery location');
}

function selectDeliveryTime() {
    alert('Delivery time selection - coming soon!\\n\\nOptions:\\n- Anytime\\n- Morning (9AM - 12PM)\\n- Afternoon (12PM - 6PM)\\n- Evening (6PM - 9PM)');
}

function submitOrder() {
    const deliveryAddress = document.querySelector('.delivery-address span').textContent;
    const productTitle = document.querySelector('.product-title').textContent;
    const totalValue = document.querySelector('.total-value').textContent;
    
    if (deliveryAddress === 'Please select a delivery address') {
        alert('Please select a delivery address before submitting the order.');
        document.querySelector('.delivery-address').click();
        return;
    }
    
    console.log('Order Details:');
    console.log('Product:', productTitle);
    console.log('Total:', totalValue);
    console.log('Address:', deliveryAddress);
    
    const confirmed = confirm(
        `Submit Order\\n\\n` +
        `Product: ${productTitle}\\n` +
        `Total: ${totalValue}\\n\\n` +
        `Proceed with order?`
    );
    
    if (confirmed) {
        alert('Order submitted successfully!\\n\\nOrder ID: #' + Math.random().toString(36).substr(2, 9).toUpperCase());
        // Redirect to success page or order history
        // window.location.href = 'order-success.html';
    }
}
