const fs = require('fs');
const path = require('path');

const productsDir = path.join(__dirname, 'public', 'images', 'products');
const shopDataFile = path.join(__dirname, 'src', 'components', 'Shop', 'shopData.ts');

const files = fs.readdirSync(productsDir).filter(file => file.toUpperCase().endsWith('.JPG') || file.toUpperCase().endsWith('.PNG'));

// Use realistic brands
const brands = ['USPA', 'Hackett', 'Lacoste', 'Rare Rabbit', 'Polo Ralph Lauren', 'Tommy Hilfiger'];
const types = ['Casual T-Shirt', 'Formal Shirt', 'Slim Fit Jeans', 'Chinos', 'Sport Jacket', 'Polo T-Shirt'];

const products = files.map((file, index) => {
  const brand = brands[Math.floor(Math.random() * brands.length)];
  const type = types[Math.floor(Math.random() * types.length)];
  const originalPrice = Math.floor(Math.random() * 3000) + 2000;
  const discountedPrice = Math.floor(originalPrice * 0.2); // 80% off

  return {
    title: `${brand} ${type}`,
    reviews: Math.floor(Math.random() * 50) + 5,
    price: originalPrice,
    discountedPrice: discountedPrice,
    id: index + 1,
    imgs: {
      thumbnails: [
        `/images/products/${file}`,
        `/images/products/${file}`,
      ],
      previews: [
        `/images/products/${file}`,
        `/images/products/${file}`,
      ],
    },
  };
});

const fileContent = `import { Product } from "@/types/product";

const shopData: Product[] = ${JSON.stringify(products, null, 2)};

export default shopData;
`;

fs.writeFileSync(shopDataFile, fileContent);
console.log(`Successfully generated ${products.length} products!`);
