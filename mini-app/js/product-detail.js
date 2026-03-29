// Product Detail Page JavaScript

// Weight options with prices
const weightOptions = {
    '80g': 58,
    '80g*2': 108,
    '184': 120,
    '80g+184g': 168,
    '194g*2': 220
};

// Modal data
let modalData = {
    weight: '80g',
    weightPrice: 58,
    flavor: 'Ancient Tree White Tea',
    quantity: 1,
    action: 'cart'
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
});

// Header actions
function showMore() {
    showToast('More options');
}

function showQR() {
    showToast('QR Scanner');
}

// Info row actions
function showShipping() {
    showToast('Shipping to your address');
}

function showService() {
    showToast('Hassle-Free Return · Fast Refund · Free Shipping');
}

// Open specification modal
function openSpecModal(action) {
    modalData.action = action || 'cart';

    // Reset to defaults
    modalData.weight = '80g';
    modalData.weightPrice = 58;
    modalData.flavor = 'Ancient Tree White Tea';
    modalData.quantity = 1;

    // Reset UI
    document.getElementById('modalQuantity').value = 1;

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
    document.getElementById('modalSelectedText').innerHTML = modalData.weight + '<br>' + modalData.flavor;

    // Update spec summary in main page
    var specSummary = document.getElementById('specSummaryText');
    if (specSummary) {
        specSummary.textContent = 'Product Specification';
    }
}

// Modal quantity controls
function modalIncrementQuantity() {
    var input = document.getElementById('modalQuantity');
    var val = parseInt(input.value);
    if (val < 99) {
        input.value = val + 1;
        modalData.quantity = val + 1;
    }
}

function modalDecrementQuantity() {
    var input = document.getElementById('modalQuantity');
    var val = parseInt(input.value);
    if (val > 1) {
        input.value = val - 1;
        modalData.quantity = val - 1;
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
        total: total,
        action: action
    });

    closeSpecModal();

    if (action === 'buy') {
        setTimeout(function() {
            var confirmed = confirm(
                'Proceed to checkout?\n\n' +
                'Product: ' + productName + '\n' +
                'Weight: ' + modalData.weight + '\n' +
                'Flavor: ' + modalData.flavor + '\n' +
                'Quantity: ' + modalData.quantity + '\n' +
                'Total: $' + total
            );
            if (confirmed) {
                window.location.href = 'checkout.html';
            }
        }, 300);
    } else {
        showToast('Added ' + modalData.quantity + ' item(s) to cart!');
    }
}

// Contact support
function contactSupport() {
    showToast('Opening customer support...');
}

// Go to cart
function goToCart() {
    window.location.href = 'shopping-cart.html';
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
