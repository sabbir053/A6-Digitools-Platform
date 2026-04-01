import React, { useState } from 'react';
import { toast } from 'react-toastify';

const DigitoolCard = ({ digitoolData, setIsCart }) => {

    const [cartItem, setCartItem] = useState(false)

    const handleCartItems = () => {
        setCartItem(true)
        setIsCart(prev => [...prev, digitoolData])
        toast.success(`Successfully Buying: ${digitoolData.name}`)
    }

    return (
        <div className="card bg-base-100 shadow-md">
            <div className="card-body">
                <div className='flex justify-between items-center'>
                    <img className='h-15' src={digitoolData.icon} alt="icon" />
                    <span
                        className={`badge badge-xs ${digitoolData.tag === 'New'
                                ? 'badge-primary'
                                : digitoolData.tag === 'Popular'
                                    ? 'badge-info'
                                    : digitoolData.tag === 'Best Seller'
                                        ? 'badge-warning'
                                        : 'badge-success'
                            }`}
                    >
                        {digitoolData.tag}
                    </span>
                    {/* <span className={`badge badge-xs ${digitoolData.tag == 'new' ? 'badge-warning'? 'badge-info': 'badge-success'}`}>{digitoolData.tag}</span> */}
                </div>
                <div>
                    <h2 className="text-xl font-bold">{digitoolData.name}</h2>
                    <p className='text-sm text-gray-400'>{digitoolData.description}</p>
                    <h3 className="text-xl text-black font-bold">${digitoolData.price} <span className='text-sm text-gray-500 font-normal'> /{digitoolData.period}</span></h3>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{digitoolData.features[0]}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{digitoolData.features[1]}</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{digitoolData.features[2]}</span>
                    </li>
                </ul>
                <div className="mt-6">
                    <button onClick={() => handleCartItems()}
                        className={`btn btn-block rounded-full ${cartItem ? 'btn-success' : 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'}`}>{cartItem == true ? 'Added to cart' : 'Buy Now'}</button>
                </div>
            </div>
        </div>
    );
};

export default DigitoolCard;