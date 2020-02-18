import React, { Fragment } from "react";
import { useCartState } from "../../global-state";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CartNumber() {
  const { cartState } = useCartState();
  const { cart } = cartState;
  let content;
  content =
    cart.length > 0 ? (
      <Link to='/cart' className='ml-auto'>
        <Button>
          <span className='mr-1'>
            <i className='fas fa-cart-plus' />
          </span>
          <span className='ml-1 badge badge-warning'>{cart.length}</span>
        </Button>
      </Link>
    ) : (
      <Link to='/cart' className='ml-auto'>
        <Button>
          <span className='mr-1'>
            <i className='fas fa-cart-plus' />
          </span>
          <span className='ml-1 badge badge-warning'>0</span>
        </Button>
      </Link>
    );
  return content;
}

export default CartNumber;
