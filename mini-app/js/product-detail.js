// Product Detail Page JavaScript

// Product data
let selectedPrice = 100;
let quantity = 1;
let isFavorite = false;

// Modal data
let modalData = {
    size: 100,
    sizePrice: 100,
    type: 'Raw Pu-erh (Sheng)',
    packaging: 0,
    packagingName: 'Standard Box',
    quantity: 1,
    action: 'cart' // 'cart' or 'buy'
};

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
    
    // Related product click handlers
    const relatedCards = document.querySelectorAll('.related-card');
    relatedCards.forEach(card => {
        card.addEventListener('click', function() {
            const productName = this.querySelector('h4').textContent;
            alert('Opening product: ' + productName);
            // window.location.reload(); // Simulate loading new product
        });
    });
});

// Change main image
function changeImage(thumbnail) {
    const mainImage = document.getElementById('main-product-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const indicators = document.querySelectorAll('.indicator');
    
    // Update main image
    mainImage.src = thumbnail.src;
    
    // Update active thumbnail
    thumbnails.forEach(thumb => thumb.classList.remove('active'));
    thumbnail.classList.add('active');
    
    // Update indicators
    const index = Array.from(thumbnails).indexOf(thumbnail);
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

// Toggle favorite
function toggleFavorite() {
    isFavorite = !isFavorite;
    const icon = document.getElementById('favorite-icon');
    const btn = icon.closest('.icon-btn');
    
    if (isFavorite) {
        btn.classList.add('favorite-active');
        showToast('Added to favorites ❤️');
    } else {
        btn.classList.remove('favorite-active');
        showToast('Removed from favorites');
    }
}

// Share product
function shareProduct() {
    if (navigator.share) {
        navigator.share({
            title: 'Jimi Bingdao Nanpo – Pu-erh Tea',
            text: 'Check out this premium tea!',
            url: window.location.href
        }).catch(err => console.log('Share failed:', err));
    } else {
        // Fallback
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            showToast('Link copied to clipboard!');
        });
    }
}

// Select option
function selectOption(button, price) {
    // Remove active class from all buttons
    const buttons = button.parentElement.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    button.classList.add('active');
    
    // Update selected price
    selectedPrice = price;
    
    // Update displayed price
    document.querySelector('.current-price').textContent = `$ ${price}.00`;
    
    showToast('Package size updated');
}

// Quantity controls
function incrementQuantity() {
    const input = document.getElementById('quantity');
    const currentValue = parseInt(input.value);
    
    if (currentValue < 99) {
        input.value = currentValue + 1;
        quantity = currentValue + 1;
    }
}

function decrementQuantity() {
    const input = document.getElementById('quantity');
    const currentValue = parseInt(input.value);
    
    if (currentValue > 1) {
        input.value = currentValue - 1;
        quantity = currentValue - 1;
    }
}

// Open specification modal
function openSpecModal(action = 'cart') {
    modalData.action = action;
    modalData.quantity = 1;
    
    // Update modal UI
    document.getElementById('modalQuantity').value = 1;
    updateModalPrice();
    
    // Update button text
    const confirmBtn = document.getElementById('modalConfirmBtn');
    confirmBtn.textContent = action === 'buy' ? 'Buy Now' : 'Add to Cart';
    
    // Show modal
    const modal = document.getElementById('specModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close specification modal
function closeSpecModal() {
    const modal = document.getElementById('specModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Select modal option
function selectModalOption(element, type, value) {
    const parent = element.parentElement;
    const siblings = parent.querySelectorAll('.modal-option, .modal-option-small');
    
    // Remove active from siblings
    siblings.forEach(sibling => sibling.classList.remove('active'));
    
    // Add active to current
    element.classList.add('active');
    
    // Update modal data
    if (type === 'size') {
        modalData.sizePrice = value;
        modalData.size = value;
    } else if (type === 'type') {
        modalData.type = element.querySelector('.option-name').textContent;
    } else if (type === 'packaging') {
        modalData.packaging = value;
        modalData.packagingName = element.querySelector('span').textContent;
    }
    
    updateModalPrice();
}

// Update modal price
function updateModalPrice() {
    const total = (modalData.sizePrice + modalData.packaging) * modalData.quantity;
    document.getElementById('modalPrice').textContent = `$ ${(modalData.sizePrice + modalData.packaging).toFixed(2)}`;
    document.getElementById('modalTotalPrice').textContent = `$ ${total.toFixed(2)}`;
}

// Modal quantity controls
function modalIncrementQuantity() {
    const input = document.getElementById('modalQuantity');
    const currentValue = parseInt(input.value);
    
    if (currentValue < 99) {
        input.value = currentValue + 1;
        modalData.quantity = currentValue + 1;
        updateModalPrice();
    }
}

function modalDecrementQuantity() {
    const input = document.getElementById('modalQuantity');
    const currentValue = parseInt(input.value);
    
    if (currentValue > 1) {
        input.value = currentValue - 1;
        modalData.quantity = currentValue - 1;
        updateModalPrice();
    }
}

// Confirm selection
function confirmSelection() {
    const productName = document.querySelector('.product-name').textContent;
    const total = ((modalData.sizePrice + modalData.packaging) * modalData.quantity).toFixed(2);
    
    console.log('Selection confirmed:', {
        product: productName,
        size: modalData.size + 'g',
        type: modalData.type,
        packaging: modalData.packagingName,
        quantity: modalData.quantity,
        total: total,
        action: modalData.action
    });
    
    closeSpecModal();
    
    if (modalData.action === 'buy') {
        // Redirect to checkout
        setTimeout(() => {
            const confirmed = confirm(
                `Proceed to checkout?\\n\\n` +
                `Product: ${productName}\\n` +
                `Size: ${modalData.size}g\\n` +
                `Type: ${modalData.type}\\n` +
                `Packaging: ${modalData.packagingName}\\n` +
                `Quantity: ${modalData.quantity}\\n` +
                `Total: $${total}`
            );
            
            if (confirmed) {
                window.location.href = 'checkout.html';
            }
        }, 300);
    } else {
        // Add to cart
        showToast(`Added ${modalData.quantity} item(s) to cart!`);
    }
}

// Legacy functions (kept for compatibility)
function addToCart() {
    openSpecModal('cart');
}

function buyNow() {
    openSpecModal('buy');
}

// Show toast notification
function showToast(message) {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create new toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Add toast styles
const style = document.createElement('style');
style.textContent = `
    .toast {
        position: fixed;
        bottom: 120px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: rgba(0, 0, 0, 0.85);
        color: white;
        padding: 12px 24px;
        border-radius: 24px;
        font-size: 14px;
        font-weight: 500;
        z-index: 1000;
        opacity: 0;
        transition: all 0.3s ease;
        white-space: nowrap;
        max-width: 90%;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
    
    .toast.show {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }
`;
document.head.appendChild(style);
