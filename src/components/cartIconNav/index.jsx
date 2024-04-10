import React from 'react';
import navCartIcon from '../../img/cart.png';
import { CartBtnNav } from './index.styles';
import { useCart } from "../../components/cartContext/index"; 

function CartIconNav() {
  const { cartCount } = useCart(); 

  return (
    <CartBtnNav>
      <div className='cart-icon-counter'>
        <p>{cartCount}</p>
      </div>
      <img src={navCartIcon} alt='Cart icon' />
    </CartBtnNav>
  );
}

export default CartIconNav;