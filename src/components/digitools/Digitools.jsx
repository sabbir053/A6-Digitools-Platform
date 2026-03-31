import React, { use, useState } from 'react';
import DigitoolCard from './digitoolCard/DigitoolCard';
import CartPage from './cartPage/CartPage';

const DigiTools = ({ digitoolsPromise, setIsCart, isCart }) => {

    const digitoolsData = use(digitoolsPromise)
    const [activeTab, setActiveTab] = useState("products");


    return (
        <div className='container mx-auto py-15 px-3'>
            <section>
                <h3 className='text-4xl font-bold text-center pb-3'>Premium Digital Tools</h3>
                <p className='text-sm text-gray-400 text-center'>Choose from our curated collection of premium digital
                    products designed <br></br> to boost your productivity and creativity.</p>
                <div className='flex justify-center py-6'>
                    <div className='inline-flex items-center border border-gray-300 rounded-full gap-3 shadow-sm'>
                        <button onClick={() => setActiveTab("products")}
                            className={`btn rounded-full font-bold ${activeTab == "products" ? 'text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]' : ''}`}>
                            Products
                        </button>
                        <button onClick={() => setActiveTab("cart")}
                            className={`btn rounded-full font-bold ${activeTab == "cart" ? 'text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]' : ''}`}>
                            Cart({isCart.length})
                        </button>
                    </div>
                </div>
            </section>

            {activeTab == "products" ?
                (<section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        digitoolsData.map(digitoolData =>
                            <DigitoolCard key={digitoolData.id}
                                digitoolData={digitoolData}
                                setIsCart={setIsCart}
                            >
                            </DigitoolCard>)
                    }
                </section>)
                : <CartPage
                    isCart={isCart}
                    setIsCart={setIsCart}
                ></CartPage>
            }
        </div>
    );
};

export default DigiTools;