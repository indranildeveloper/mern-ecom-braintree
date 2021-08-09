import React, { useState, useEffect } from "react";
import "../styles.css";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/CartHelper";
import BraintreePaymentUI from "./BraintreePaymentUI";

const Cart = () => {
  const [products, setProducts] = useState([]);

  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = (products) => {
    return (
      <div className="text-center">
        <h2 className="mb-3">This Section is to load products!</h2>
        {products.map((product, index) => {
          return (
            <Card
              key={index}
              product={product}
              addToCart={false}
              removeFromCart={true}
              setReload={setReload}
              reload={reload}
            />
          );
        })}
      </div>
    );
  };
  // const loadCheckout = () => {
  //   return (
  //     <div>
  //       <h2 className="mb-3">This Section for checkout!</h2>
  //     </div>
  //   );
  // };

  return (
    <Base title="Cart Page" description="Ready to Checkout!">
      <div className="row">
        <div className="col-md-4">
          {products.length > 0 ? (
            loadAllProducts(products)
          ) : (
            <h3>No Products in Cart</h3>
          )}
        </div>
        <div className="col-md-6 offset-2">
          <BraintreePaymentUI products={products} setReload={setReload} />
        </div>
      </div>
    </Base>
  );
};

export default Cart;
