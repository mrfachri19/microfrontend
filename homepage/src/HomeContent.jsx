import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getProducts, currency } from "./products";
import { addToCart, useLoggedIn } from "cart/cart";

export default function HomeContent() {
  const loggedIn = useLoggedIn();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col bg-gray-200 rounded-lg p-2 m-2"
        >
          <Link to={`/product/${product.id}`}>
            <img
              src={product.image}
              alt={product.name}
              className="h-5/6 w-5/6 bg-gray-400 rounded-lg"
            />
          </Link>
          <div className="flex">
            <div className="flex-grow font-bold">
              <Link to={`/product/${product.id}`}>
                <a className="text-xl">{product.name}</a>
              </Link>
            </div>
            <div className="flex-end text-lg">
              {currency.format(product.price)}
            </div>
          </div>
          <div className="text-sm mt-4">{product.description}</div>
          {loggedIn && (
            <div className="mt-2">
              <button
                className="hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded p-2 leading-none  mt-3 bg-gray-400 uppercase"
                onClick={() => addToCart(product.id)}
                id={`addtocart_${product.id}`}
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
