import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../context/Context";

const SingleProduct = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card>
        <Card.Img
          variant="top"
          src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/17a2a0b31ef04347a5d49c76b590520a_9366/STRIX_1.0_SHOES_Black_GA3879_01_standard.jpg"
          alt={prod.name}
        />
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>{prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days Delivery</div>
            )}
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              variant="danger"
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                });
              }}
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
              }
              disabled={!prod.inStock}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
