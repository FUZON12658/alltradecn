import React, { useState, useEffect } from 'react';
import '../styles/products.css'; // Import CSS styles from ProductDisplay component
import productDetails from '../JsonFiles/productDetails.json';

const RandomProductDisplay = () => {
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    // Function to generate random product
    const generateRandomProduct = () => {
      // Get all category keys from the JSON file
      const categoryKeys = Object.keys(productDetails);
      // Select a random category
      const randomCategoryKey = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
      // Get products from the selected category
      const productsInCategory = productDetails[randomCategoryKey];
      // Select a random product from the category
      const randomProduct = productsInCategory[Math.floor(Math.random() * productsInCategory.length)];
      return randomProduct;
    };

    // Generate random products until at least 20 unique products are displayed
    const generatedProducts = [];
    while (generatedProducts.length < 20) {
      const randomProduct = generateRandomProduct();
      if (!generatedProducts.some(product => product.id === randomProduct.id)) {
        generatedProducts.push(randomProduct);
      }
    }

    // Update state with the generated products
    setDisplayedProducts(generatedProducts);
  }, []);

  return (
    <div className="productMaster">
      {displayedProducts.length > 0 && (
        <div className="displayImagesGrid">
          {displayedProducts.map(product => (
            <div className="imgContainer" key={product.id}>
              <div className="imageHead">
                <img className="displayImages" src={product.imageSrc} alt="" />
              </div>
              <div className="imageDetails">
                <p className="displayProductName">{product.name}</p>
                <p className="displayProductPrice">{product.price}</p>
              </div>
              <div className="actionButtons">
                <button className="addToCart">Add to cart</button>
                <input className="addToCartQuantity" type="number" min="1" value="1" />
                <img className="addToCartControllers" src={require("../Images/iconPlus.png")} alt="" />
                <img className="addToCartControllers" src={require("../Images/iconMinus.png")} alt="" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RandomProductDisplay;
