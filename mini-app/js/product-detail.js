// Product Detail Page JavaScript

// Weight options with prices
const weightOptions = {
    '100g': 100,
    '100g*2': 188
};

// Modal data
let modalData = {
    weight: '100g',
    weightPrice: 100,
    flavor: 'Ancient Tree Raw Tea',
    quantity: 1
};

document.addEventListener('DOMContentLoaded', function() {
    // No status bar to update
});

// Info row actions
function showShipping() {
    showToast('Shipping to your address');
}

// Open specification modal
function openSpecModal() {
    // Reset to defaults
    modalData.weight = '100g';
    modalData.weightPrice = 100;
    modalData.flavor = 'Ancient Tree Raw Tea';
    modalData.quantity = 1;

    // Reset UI
    document.getElementById('modalQuantity').textContent = '1';

    // Reset chip selections
    var allChips = document.querySelectorAll('.chip-option');
    allChips.forEach(function(chip) {
        chip.classList.remove('active');
    });
    // Activate first weight and first flavor
    var weightChips = document.querySelectorAll('.modal-section:first-of-type .chip-option');
    if (weightChips.length > 0) weightChips[0].classList.add('active');
    var flavorChips = document.querySelectorAll('.modal-section:nth-of-type(2) .chip-option');
    if (flavorChips.length > 0) flavorChips[0].classList.add('active');

    updateModalDisplay();

    // Show modal
    var modal = document.getElementById('specModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close specification modal
function closeSpecModal() {
    var modal = document.getElementById('specModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Select modal option
function selectModalOption(element, type, value, price) {
    var parent = element.parentElement;
    var siblings = parent.querySelectorAll('.chip-option');

    siblings.forEach(function(sibling) { sibling.classList.remove('active'); });
    element.classList.add('active');

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
    document.getElementById('modalPrice').textContent = '$ ' + modalData.weightPrice.toFixed(2);
    document.getElementById('modalSelectedText').innerHTML = modalData.weight + ' ' + modalData.flavor;
}

// Modal quantity controls
function modalIncrementQuantity() {
    if (modalData.quantity < 20) {
        modalData.quantity++;
        document.getElementById('modalQuantity').textContent = modalData.quantity;
    }
}

function modalDecrementQuantity() {
    if (modalData.quantity > 1) {
        modalData.quantity--;
        document.getElementById('modalQuantity').textContent = modalData.quantity;
    }
}

// Confirm selection
function confirmSelection(action) {
    var productName = document.querySelector('.product-name').textContent;
    var total = (modalData.weightPrice * modalData.quantity).toFixed(2);

    console.log('Selection confirmed:', {
        product: productName,
        weight: modalData.weight,
        flavor: modalData.flavor,
        quantity: modalData.quantity,
        total: total
    });

    closeSpecModal();
    showToast('Added ' + modalData.quantity + ' item(s) to cart!');
}

// Contact support
function contactSupport() {
    showToast('Opening customer support...');
}

// Go to cart
function goToCart() {
    window.location.href = 'shopping-cart.html';
}

// Share product
function shareProduct() {
    showToast('Share link copied!');
}

// Show toast notification
function showToast(message) {
    var existingToast = document.querySelector('.toast');
    if (existingToast) existingToast.remove();

    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(function() { toast.classList.add('show'); }, 10);
    setTimeout(function() {
        toast.classList.remove('show');
        setTimeout(function() { toast.remove(); }, 300);
    }, 3000);
}

// Add toast styles
var style = document.createElement('style');
style.textContent = '\
    .toast {\
        position: fixed;\
        bottom: 120px;\
        left: 50%;\
        transform: translateX(-50%) translateY(100px);\
        background: rgba(0, 0, 0, 0.85);\
        color: white;\
        padding: 12px 24px;\
        border-radius: 24px;\
        font-size: 14px;\
        font-weight: 500;\
        z-index: 1000;\
        opacity: 0;\
        transition: all 0.3s ease;\
        white-space: nowrap;\
        max-width: 90%;\
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\
    }\
    .toast.show {\
        opacity: 1;\
        transform: translateX(-50%) translateY(0);\
    }\
';
document.head.appendChild(style);
