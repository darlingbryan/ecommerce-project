import React from "react";
import CustomButton from "../custom-button/CustomButton";
import "./CartDropdown.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/CartItem";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Go To CheckOut </CustomButton>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default connect(mapStateToProps)(CartDropdown);
