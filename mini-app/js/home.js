// Home Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Product card click handlers
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productName = this.querySelector('.product-name').textContent;
            const productPrice = this.querySelector('.product-price').textContent;
            
            console.log('Product clicked:', productName, productPrice);
            
            // Navigate to product detail page
            window.location.href = 'product-detail.html';
        });
    });
    
    // Navigation handlers
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
        });
    });
    
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
    
    // Update time every minute
    setInterval(updateTime, 60000);
    
    // Lazy loading images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});
