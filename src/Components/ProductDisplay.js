import React, { useState, useEffect } from 'react';
import products from '../JsonFiles/productDetails.json';

export default function ProductDisplay(props) {
    const [cart, setCart] = useState([]);
    const [productDetails, setProductDetails] = useState([]);

    useEffect(() => {
        // Load product details from JSON file
        setProductDetails(products[props.pageName]);
    }, [props.pageName]);

    const increaseProductCount = (productId) => {
        const updatedCart = [...cart];
        const index = updatedCart.findIndex(item => item.productId === productId);
        if (index !== -1) {
            updatedCart[index].quantity += 1;
        } else {
            updatedCart.push({ productId, quantity: 1 });
        }
        setCart(updatedCart);
    };

    const decreaseProductCount = (productId) => {
        const updatedCart = [...cart];
        const index = updatedCart.findIndex(item => item.productId === productId);
        if (index !== -1) {
            updatedCart[index].quantity -= 1;
            if (updatedCart[index].quantity === 0) {
                updatedCart.splice(index, 1);
            }
            setCart(updatedCart);
        }
    };

    const importImage = (path) => {
        return `${process.env.PUBLIC_URL}${path}`;
    };

    return (
        <div className='productMaster'>
        <div className="productPageNavigation"></div>
        <div className="displayImagesGrid">
            {productDetails.map((product, index) => (
                <div className="imgContainer" key={index}>
                    <div className="imageHead"><img className="displayImages" src={importImage(product.imageSrc)} alt="" /></div>
                    <div className="imageDetails">
                        <p className="displayProductName">{product.name}</p>
                        <p className="displayProductPrice">{product.price}</p>
                    </div>
                    <div className="actionButtons">
                        <button className="addToCart" onClick={() => increaseProductCount(product.id)}>Add to cart</button>
                        <input className="addToCartQuantity" type="number" min="1" value="1" />
                        <img className="addToCartControllers" onClick={() => increaseProductCount(product.id)} src={require("../Images/iconPlus.png")} alt="" />
                        <img className="addToCartControllers" onClick={() => decreaseProductCount(product.id)} src={require("../Images/iconMinus.png")} alt="" />
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}
