import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsProvider";
import { CartPlusIcon, DecreaceItem, IncreaceItem } from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, decreaceProduct } from "../features/cart/cartSlice";

const Products = () => {
  const { products } = useContext(ProductsContext);
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const isProductinCart = (productId) => {
    const cartIndex = cart.findIndex((item) => item.id == productId);
    if (cartIndex >= 0) {
      return cartIndex;
    } else {
      return false;
    }
  };
  return (
    <div className="w-full grid place-item-center">
      <ul className="w-full  grid place-items-center grid-flow-row grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[16px] p-[32px]">
        {products.map((product) => (
          <li
            key={product.id}
            className="w-[300px] md:w-[200px] p-[16px] flex flex-col border-1 border-neutral-400 rounded-md"
          >
            <img
              src={product.image}
              alt={product.category}
              className="w-auto h-[200px] object-contain"
            />

            <div className="p-[16px] grid grid-cols-4 gap-[8px]">
              <p className="col-span-4 truncate">{product.title}</p>

              <p className="col-span-2 align-baseline">${product.price}</p>

              {isProductinCart(product.id) !== false ? (
                <div className="col-span-2 flex justify-center items-center gap-2.5 mt-1">
                  <button
                    className="p-1 border-1 border-neutral-950 rounded-md hover:cursor-pointer "
                    onClick={() => dispatch(decreaceProduct(product))}
                  >
                    <DecreaceItem />
                  </button>
                  <p>{cart[isProductinCart(product.id)].quantity}</p>
                  <button
                    className="p-1 border-1 border-neutral-950 rounded-md hover:cursor-pointer "
                    onClick={() => dispatch(addProduct(product))}
                  >
                    <IncreaceItem />
                  </button>
                </div>
              ) : (
                <button
                  className="p-2 col-span-2 border-1 border-neutral-950 rounded-md hover:cursor-pointer place-self-end"
                  onClick={() => dispatch(addProduct(product))}
                >
                  <CartPlusIcon />
                </button>
              )}
              {/* <button className='p-2 col-span-2 border-1 border-neutral-950 rounded-md hover:cursor-pointer place-self-end' onClick={() =>  dispatch(addProduct(product))}><CartPlusIcon /></button> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
