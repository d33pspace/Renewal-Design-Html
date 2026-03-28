# Tea Shop Mini App

A mobile-responsive e-commerce web application for premium tea products, converted from Figma designs to plain HTML, CSS, and JavaScript.

## 📱 Pages

### 1. **index.html** - Navigation Hub
Landing page with links to all application pages.

### 2. **home.html** - Home Page
- Status bar with time and battery indicator
- Beautiful hero banner with tea products
- Product grid (2 columns)
- All products section
- Bottom navigation bar (Home, Cart, My Account)
- Click products to view details

### 3. **product-detail.html** - Product Details
- Image gallery with thumbnails
- Product name, rating, and price
- Discount badge and stock status
- Detailed product description
- Complete specifications list
- Flavor profile tags
- Step-by-step brewing instructions
- Package size selector
- Favorite and share buttons
- Quantity selector
- Add to cart and Buy now buttons
- Related products section

### 4. **shopping-cart.html** - Shopping Cart
- Tab selection (Opening Activity, Free Shipping)
- Cart items with:
  - Product images
  - Name, specifications, and price
  - Quantity controls (+/-)
  - Checkbox selection
- "You May Like" recommendations section
- Select all functionality
- Total price calculation
- Checkout button

### 5. **checkout.html** - Order Settlement
- Delivery address selector
- Product summary card
- Delivery time options
- Order notes section
- Total product price
- Shipping fee display
- Submit order button

### 6. **account.html** - My Account
- User profile section with avatar
- Account action cards:
  - My Orders
  - Favorites
  - History
  - Settings
- Recommended products section
- Bottom navigation bar

### 7. **settings.html** - Settings
Multiple settings sections:
- **Profile**: Edit profile, Change avatar
- **App Settings**: Language, Notifications, Dark mode
- **Payment & Security**: Payment methods, Change password
- **Support**: Help & Support, About
- Logout button

## 🎨 Design Features

- **Responsive Design**: Optimized for mobile devices (max-width: 430px)
- **Modern UI**: Clean, minimalist interface with smooth transitions
- **Color Scheme**:
  - Primary: Dark Blue (#465A6E)
  - Accent: Red (#C60C30)
  - Success: Green (#28785A)
  - Background: White (#FFFFFF)
  - Text: Dark Grey (#3C3C3C)
- **Typography**: 
  - Noto Sans (primary)
  - Roboto Slab (secondary)
  - SF Pro Text (system elements)

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: 
  - Flexbox & Grid layouts
  - CSS Variables for theming
  - Smooth transitions and animations
  - Media queries for responsiveness
- **JavaScript (Vanilla)**:
  - Interactive cart functionality
  - Quantity controls
  - Price calculations
  - Form validations
  - Toggle switches
  - Toast notifications

## 📁 Folder Structure

```
mini-app/
├── index.html              # Navigation hub
├── home.html               # Home/product listing
├── product-detail.html     # Product details page
├── shopping-cart.html      # Shopping cart
├── checkout.html           # Order checkout
├── account.html            # User account
├── settings.html           # App settings
├── README.md               # Documentation
├── css/
│   ├── index.css
│   ├── home.css
│   ├── product-detail.css
│   ├── shopping-cart.css
│   ├── checkout.css
│   ├── account.css
│   └── settings.css
└── js/
    ├── home.js
    ├── product-detail.js
    ├── shopping-cart.js
    ├── checkout.js
    ├── account.js
    └── settings.js
```

## 🚀 Getting Started

1. Open `index.html` in a web browser
2. Navigate through the different pages using the cards
3. Test the interactive features:
   - Add/remove items from cart
   - Adjust quantities
   - Select/deselect items
   - Toggle settings
   -Product Details
- ✅ Image gallery with thumbnails
- ✅ Favorite toggle
- ✅ Share product
- ✅ Package size selection
- ✅ Quantity controls
- ✅ Add to cart
- ✅ Buy now (quick checkout)
- ✅ Toast notifications

###  Submit orders

## ✨ Interactive Features

### Shopping Cart
- ✅ Add/remove items
- ✅ Quantity adjustment
- ✅ Select individual items
- ✅ Select all functionality
- ✅ Real-time price calculation
- ✅ Checkout validation

### Settings
- ✅ Toggle switches (Notifications, Dark Mode)
- ✅ Navigation to sub-pages
- ✅ Logout confirmation
- ✅ Toast notifications

### General
- ✅ Responsive navigation
- ✅ Barm validations
- ✅ Alert dialogs for actions

## 📱 Mobile Optimization

- Viewport meta tag for proper scaling
- Touch-friendly button sizes (minimum 44x44px)
- Optimized images with lazy loading support
- Smooth scroll behavior
- iOS status bar styling

## 🎯 Future Enhancements

- [ ] Product detail pages
- [ ] Search functionality
- [ ] Filter and sort options
- [ ] Payment integration
- [ ] Order tracking
- [ ] User authentication
- [ ] Wishlist feature
- [ ] Product reviews
- [ ] Multi-language support
- [ ] Dark mode implementation

## 📝 Notes

- Images are loaded from Figma's asset CDN (7-day expiration)
- Replace placeholder images with permanent URLs in production
- Add proper backend integration for real functionality
- Implement proper error handling
- Add loading states for async operations

## 📄 License

Created from Figma designs - March 2024

---

**Version**: 1.0.0  
**Last Updated**: March 24, 2024
