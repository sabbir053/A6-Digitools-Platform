import React from 'react';
import Cart from './Cart';
import { toast } from 'react-toastify';

const CartPage = ({ isCart, setIsCart }) => {

    const total = isCart.reduce((sum, item) => sum + item.price, 0);

    const handleTotalCartItem = (isCart) => {
        setIsCart([])
        toast.error(`All Items Removed Successful`)
    }

    return (
        <div className='container mx-auto rounded-md shadow-md p-5 space-y-5 w-full my-5'>
            <h2 className='text-2xl font-bold'>Your Cart</h2>
            {
                isCart.length <= 0 ? (
                    <div className="flex flex-col items-center justify-center text-center py-10 p-6 border border-gray-200 shodow-sm rounded-md">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                            alt="Empty Cart"
                            className="w-30 h-30 mb-5 opacity-80"
                        />
                        <h2 className="text-2xl font-bold text-gray-700">
                            Cart are not available now
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Please buy a Items in product tab
                        </p>
                    </div>
                ) : (

                    isCart.map(cartData => <Cart key={cartData.id} cartData={cartData} setIsCart={setIsCart} isCart={isCart}></Cart>)

                )
            }

            <div className='flex justify-between items-center'>
                <h3 className='text-lg font-bold'>Total</h3>
                <h2 className='text-lg font-bold'>${total}</h2>
            </div>
            <button onClick={() => handleTotalCartItem(isCart)} className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white btn-block rounded-full font-bold'>Proceed to checkout</button>
        </div>
    );
};

export default CartPage;