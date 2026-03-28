// Account Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Product card click handlers
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const productName = this.querySelector('.product-name').textContent;
            const productPrice = this.querySelector('.product-price').textContent;
            
            console.log('Product clicked:', productName, productPrice);
            alert('Product: ' + productName + '\nPrice: ' + productPrice);
        });
    });
    
    // Action card handlers
    const actionCards = document.querySelectorAll('.action-card');
    
    actionCards.forEach(card => {
        card.addEventListener('click', function(e) {
            const action = this.querySelector('span').textContent;
            
            if (action === 'Settings') {
                // Allow navigation to settings
                return;
            }
            
            e.preventDefault();
            console.log('Action clicked:', action);
            alert(action + ' feature coming soon!');
        });
    });
    
    // Navigation handlers
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Avatar upload simulation
    const avatar = document.querySelector('.avatar');
    if (avatar) {
        avatar.addEventListener('click', function() {
            alert('Avatar upload feature - coming soon!');
        });
        
        avatar.style.cursor = 'pointer';
    }
});
