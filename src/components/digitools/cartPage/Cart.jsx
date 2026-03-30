import React from 'react';

const Cart = ({ cartData, isCart, setIsCart }) => {

    const handleCartItem = (cartData) => {
        console.log('isCart', isCart);

        const filterCart = isCart.filter(cart => cart.id !== cartData.id)
        console.log('filterCart',filterCart);
        setIsCart(filterCart)
    }

    return (
        <div className='flex justify-between items-center p-3 shadow-sm border border-gray-200 rounded-md'>
            <div className='flex gap-3 items-center'>
                <img className='h-10' src={cartData.icon} alt="img" />
                <div className='gap-3'>
                    <h3 className='text-2xl font-bold'>{cartData.name}</h3>
                    <h2 className='text-lg text-gray-500'>${cartData.price}</h2>
                </div>
            </div>
            <h2 onClick={() => handleCartItem(cartData)} className='text-red-500 font-bold cursor-pointer'>Remove</h2>
        </div>
    );
};

export default Cart;