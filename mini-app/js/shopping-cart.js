// Shopping Cart JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const selectAllCheckbox = document.getElementById('selectAll');
    const itemCheckboxes = document.querySelectorAll('.cart-item input[type="checkbox"]');
    const totalPriceElement = document.querySelector('.total-price');
    const checkoutBtn = document.querySelector('.checkout-btn');
    
    // Item data
    const items = [
        { id: 'item1', price: 126.00, name: '茶叶冰岛道-普洱茶-古树-龙珠' },
        { id: 'item2', price: 76.00, name: '茶叶古树普红-红茶-古树-散茶' }
    ];

    // Calculate total price
    function calculateTotal() {
        let total = 0;
        let checkedCount = 0;
        
        items.forEach(item => {
            const checkbox = document.getElementById(item.id);
            const qtyElement = checkbox.closest('.cart-item').querySelector('.qty-value');
            const quantity = parseInt(qtyElement.textContent);
            
            if (checkbox.checked) {
                total += item.price * quantity;
                checkedCount++;
            }
        });
        
        totalPriceElement.textContent = `¥${total.toFixed(2)}`;
        checkoutBtn.textContent = `去结算(${checkedCount})`;
        
        return checkedCount;
    }

    // Handle select all checkbox
    selectAllCheckbox.addEventListener('change', function() {
        itemCheckboxes.forEach(checkbox => {
            checkbox.checked = selectAllCheckbox.checked;
        });
        calculateTotal();
    });

    // Handle individual item checkboxes
    itemCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Update select all checkbox state
            const allChecked = Array.from(itemCheckboxes).every(cb => cb.checked);
            selectAllCheckbox.checked = allChecked;
            calculateTotal();
        });
    });

    // Handle quantity controls
    document.querySelectorAll('.cart-item').forEach((item, index) => {
        const decreaseBtn = item.querySelectorAll('.qty-btn')[0];
        const increaseBtn = item.querySelectorAll('.qty-btn')[1];
        const qtyValue = item.querySelector('.qty-value');
        
        decreaseBtn.addEventListener('click', function() {
            let currentQty = parseInt(qtyValue.textContent);
            if (currentQty > 1) {
                qtyValue.textContent = currentQty - 1;
                calculateTotal();
            }
        });
        
        increaseBtn.addEventListener('click', function() {
            let currentQty = parseInt(qtyValue.textContent);
            if (currentQty < 99) {
                qtyValue.textContent = currentQty + 1;
                calculateTotal();
            }
        });
    });

    // Handle checkout button
    checkoutBtn.addEventListener('click', function() {
        const checkedItems = [];
        items.forEach(item => {
            const checkbox = document.getElementById(item.id);
            if (checkbox.checked) {
                const qtyElement = checkbox.closest('.cart-item').querySelector('.qty-value');
                checkedItems.push({
                    ...item,
                    quantity: parseInt(qtyElement.textContent)
                });
            }
        });
        
        if (checkedItems.length === 0) {
            alert('请选择要结算的商品');
            return;
        }
        
        console.log('准备结算:', checkedItems);
        alert(`准备结算 ${checkedItems.length} 件商品`);
        // Here you would normally redirect to checkout page or trigger checkout process
    });

    // Handle back button
    document.querySelector('.back-btn').addEventListener('click', function() {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            // Go to home page or previous page
            window.location.href = 'index.html';
        }
    });

    // Initialize total
    calculateTotal();
});
