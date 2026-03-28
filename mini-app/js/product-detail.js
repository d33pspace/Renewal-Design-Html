// Product Detail Page JavaScript

// Product data
let isFavorite = false;

// Weight options with prices
const weightOptions = {
    '80g': 58,
    '80g×2': 108,
    '184g': 120,
    '80g+184g': 168,
    '194g×2': 220
};

// Modal data
let modalData = {
    weight: '80g',
    weightPrice: 58,
    flavor: 'Ancient Tree White Tea',
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

// Open specification modal
function openSpecModal(action = 'cart') {
    modalData.action = action;
    
    // Reset to defaults
    modalData.weight = '80g';
    modalData.weightPrice = 58;
    modalData.flavor = 'Ancient Tree White Tea';
    modalData.quantity = 1;
    
    // Update modal UI
    document.getElementById('modalQuantity').value = 1;
    updateModalDisplay();
    
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
function selectModalOption(element, type, value, price) {
    const parent = element.parentElement;
    const siblings = parent.querySelectorAll('.chip-option, .modal-option, .modal-option-small');
    
    // Remove active from siblings
    siblings.forEach(sibling => sibling.classList.remove('active'));
    
    // Add active to current
    element.classList.add('active');
    
    // Update modal data
    if (type === 'weight') {
        modalData.weight = value;
        modalData.weightPrice = price;
    } else if (type === 'flavor') {
        modalData.flavor = value;
    }
    
    updateModalDisplay();
}

// Update modal display
function updateModalDisplay() {
    const price = modalData.weightPrice * modalData.quantity;
    document.getElementById('modalPrice').textContent = `$ ${modalData.weightPrice.toFixed(2)}`;
    document.getElementById('modalSelectedText').textContent = `${modalData.weight} ${modalData.flavor}`;
    
    // Update spec summary in main page
    const specSummary = document.getElementById('specSummaryText');
    if (specSummary) {
        specSummary.textContent = `${modalData.weight} · ${modalData.flavor}`;
    }
}

// Modal quantity controls
function modalIncrementQuantity() {
    const input = document.getElementById('modalQuantity');
    const currentValue = parseInt(input.value);
    
    if (currentValue < 99) {
        input.value = currentValue + 1;
        modalData.quantity = currentValue + 1;
        updateModalDisplay();
    }
}

function modalDecrementQuantity() {
    const input = document.getElementById('modalQuantity');
    const currentValue = parseInt(input.value);
    
    if (currentValue > 1) {
        input.value = currentValue - 1;
        modalData.quantity = currentValue - 1;
        updateModalDisplay();
    }
}

// Confirm selection
function confirmSelection(action) {
    const productName = document.querySelector('.product-name').textContent;
    const total = (modalData.weightPrice * modalData.quantity).toFixed(2);
    
    console.log('Selection confirmed:', {
        product: productName,
        weight: modalData.weight,
        flavor: modalData.flavor,
        quantity: modalData.quantity,
        total: total,
        action: action
    });
    
    closeSpecModal();
    
    if (action === 'buy') {
        // Redirect to checkout
        setTimeout(() => {
            const confirmed = confirm(
                `Proceed to checkout?\n\n` +
                `Product: ${productName}\n` +
                `Weight: ${modalData.weight}\n` +
                `Flavor: ${modalData.flavor}\n` +
                `Quantity: ${modalData.quantity}\n` +
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

// Removed unused functions
// selectOption, incrementQuantity, decrementQuantity are no longer needed

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
