// Settings Page JavaScript

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
    
    // Handle toggle switches
    const notificationsToggle = document.getElementById('notifications');
    const darkModeToggle = document.getElementById('darkmode');
    
    if (notificationsToggle) {
        notificationsToggle.addEventListener('change', function() {
            if (this.checked) {
                console.log('Notifications enabled');
                showToast('Notifications enabled');
            } else {
                console.log('Notifications disabled');
                showToast('Notifications disabled');
            }
        });
    }
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            if (this.checked) {
                console.log('Dark mode enabled');
                showToast('Dark mode feature coming soon!');
                this.checked = false;
            }
        });
    }
});

function changeAvatar() {
    alert('Change Avatar\\n\\nThis feature allows you to:\\n- Take a new photo\\n- Choose from gallery\\n- Use default avatar');
}

function changePassword() {
    const currentPassword = prompt('Enter current password:');
    if (currentPassword) {
        const newPassword = prompt('Enter new password:');
        if (newPassword) {
            const confirmPassword = prompt('Confirm new password:');
            if (newPassword === confirmPassword) {
                alert('Password changed successfully!');
            } else {
                alert('Passwords do not match!');
            }
        }
    }
}

function openHelp() {
    alert('Help & Support\\n\\nContact us:\\n📧 Email: support@teashop.com\\n📞 Phone: +1 (555) 123-4567\\n💬 Live Chat: Available 9AM-6PM');
}

function openAbout() {
    alert('About Tea Shop\\n\\nVersion: 1.0.0\\nBuild: 2024.03.24\\n\\n© 2024 Tea Shop. All rights reserved.\\n\\nA premium tea shopping experience.');
}

function logout() {
    const confirmed = confirm('Are you sure you want to log out?');
    if (confirmed) {
        console.log('Logging out...');
        // Clear session data
        localStorage.clear();
        sessionStorage.clear();
        
        // Redirect to login page
        alert('You have been logged out successfully!');
        // window.location.href = 'index.html';
    }
}

function showToast(message) {
    // Simple toast notification
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 12px 24px;
        border-radius: 24px;
        font-size: 14px;
        z-index: 1000;
        animation: fadeInOut 2s ease;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        document.body.removeChild(toast);
    }, 2000);
}

// Add CSS animation for toast
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
        10% { opacity: 1; transform: translateX(-50%) translateY(0); }
        90% { opacity: 1; transform: translateX(-50%) translateY(0); }
        100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
    }
`;
document.head.appendChild(style);
