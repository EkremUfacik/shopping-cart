import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

export default function Cart({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { products } = useSelector((state) => state.cart);
  console.log(products);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="me-2"
        style={{ position: "relative" }}
      >
        <i class="fa-solid fa-cart-shopping"></i>
        <div className="text-white count bg-danger rounded-circle ">
          {products.reduce((acc, item) => (acc += item.quantity), 0)}
        </div>
      </Button>

      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {products.length > 0 ? (
            products.map((item) => <CartCard item={item} />)
          ) : (
            <p>Your Shopping Cart is Empty !</p>
          )}
          {products.length > 0 && (
            <p className="text-center">
              Total Price : $
              {products
                ?.reduce((acc, item) => (acc += item.quantity * item.price), 0)
                .toFixed(2)}
            </p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
