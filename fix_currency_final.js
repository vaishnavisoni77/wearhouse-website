const fs = require('fs');
const path = require('path');

const targetFiles = [
  './components/Blog/LatestProducts.tsx',
  './components/ShopDetails/index.tsx',
  './components/Common/QuickViewModal.tsx',
  './components/Common/ProductItem.tsx',
  './components/Common/CartSidebarModal/index.tsx',
  './components/Common/CartSidebarModal/SingleItem.tsx',
  './components/Cart/OrderSummary.tsx',
  './components/Cart/SingleItem.tsx',
  './components/Header/index.tsx',
  './components/Wishlist/SingleItem.tsx'
];

targetFiles.forEach(file => {
  const fullPath = path.join(__dirname, 'src', file);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Safely replace the $ in JSX text blocks with ₹
    content = content.replace(/\$\{product\.price\}/g, '₹{product.price}');
    content = content.replace(/\$\{product\.discountedPrice\}/g, '₹{product.discountedPrice}');
    content = content.replace(/\$\{item\.price\}/g, '₹{item.price}');
    content = content.replace(/\$\{item\.discountedPrice\}/g, '₹{item.discountedPrice}');
    content = content.replace(/\$\{totalPrice\}/g, '₹{totalPrice}');
    content = content.replace(/\$\{item\.discountedPrice \* item\.quantity\}/g, '₹{item.discountedPrice * item.quantity}');
    content = content.replace(/\$\{item\.discountedPrice \* quantity\}/g, '₹{item.discountedPrice * quantity}');
    
    fs.writeFileSync(fullPath, content);
    console.log('Fixed', file);
  } else {
    console.log('Not found:', file);
  }
});
