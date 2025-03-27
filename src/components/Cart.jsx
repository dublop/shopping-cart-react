import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, clearCart, decreaceProduct, deleteProduct } from "../features/cart/cartSlice";
import { CartDashIcon, CartXIcon, DecreaceItem, IncreaceItem } from "./Icons";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cartResume = () => {
    let totalInCart = 0


    cart.map(cartItem => {
      if (cartItem.quantity > 1) {
        totalInCart = totalInCart + (cartItem.price * cartItem.quantity)
      } else {
        totalInCart += cartItem.price
      }
    })


    return {
      subtotal: totalInCart - (totalInCart * 0.16),
      taxes: totalInCart * 0.16,
      total: totalInCart,
    }
  }

  console.log(cartResume())

  return (
    cart.length > 0
    ?
    <div className="w-full p-[32px]">
      <ul className="w-full md:w-[700px] flex flex-col align-center justify-center gap-[32px] p-[20px] border-1 border-neutral-400 rounded-md">
        
        <div className="self-end">
          <span className="mr-4">Clear cart</span>
          <button
              className="p-2 border-1 border-neutral-400 rounded-md hover:cursor-pointer"
              onClick={() => dispatch(clearCart())}
            >
              <CartXIcon />
            </button>
        </div>

        {cart.map((product) => (
          <li
            key={product.id}
            className="gap-[16px] flex flex-row "
          >
            <div className="w-[100px] h-[100px]">
              <img
                src={product.image}
                alt={product.category}
                className="w-[100%] h-[100%] object-contain"
              />
            </div>

            <div className="w-full p-[16px] gap-[8px]">
              <p className=" w-[200px] md:w-[400px] truncate">{product.title}</p>

              <p className="lign-middle">{product.price}</p>

              <div className="flex items-center gap-2.5 mt-1">
              <button
                  className="p-2 border-1 border-neutral-950 rounded-md hover:cursor-pointer "
                  onClick={() => dispatch(decreaceProduct(product))}
                >
                  <DecreaceItem />
                </button>
                <p>{product.quantity}</p>
                <button
                  className="p-2 border-1 border-neutral-950 rounded-md hover:cursor-pointer "
                  onClick={() => dispatch(addProduct(product))}
                >
                  <IncreaceItem/>
                </button>
              </div>

            </div>

            <button
              className="self-start p-2 border-1 border-neutral-950 rounded-md hover:cursor-pointer "
              onClick={() => dispatch(deleteProduct(product.id))}
            >
              <CartDashIcon />
            </button>
          </li>
        ))}
      </ul>

      <div className="flex flex-col align-center justify-center p-[16px] border-1 border-neutral-400 rounded-md mt-4" >
        <h3 className="text-xl">Resume</h3>
        <div>
          <p>Subtotal: {cartResume().subtotal}</p>
          <p>Taxes:  {cartResume().taxes}</p>
          <p>Total:  {cartResume().total}</p>
        </div>
      </div>
    </div>
    :
    <div className="w-full p-[32px]">
      Your cart is empty.
      <p className="underline cursor-pointer" onClick={() => navigate('/')}>Go to home</p>
    </div>
  );
};

export default Cart;
