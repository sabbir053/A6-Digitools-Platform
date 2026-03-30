import React, { use } from 'react';
import DigitoolCard from './digitoolCard/DigitoolCard';

const DigitalTools = ({ digitoolsPromise }) => {
    const digitoolsData = use(digitoolsPromise)
    console.log(digitoolsData);
    return (
        <div className='container mx-auto py-15 px-3'>
            <section>
                <h3 className='text-4xl font-bold text-center pb-3'>Premium Digital Tools</h3>
                <p className='text-sm text-gray-400 text-center'>Choose from our curated collection of premium digital
                    products designed <br></br> to boost your productivity and creativity.</p>
                <div className='flex justify-center py-6'>
                    <div className='inline-flex items-center border border-gray-300 rounded-full gap-3 shadow-sm'>
                        <button className='btn btn-success rounded-full'>Products</button>
                        <button className='btn rounded-full'>Cart(2)</button>
                    </div>
                </div>
            </section>
            <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    digitoolsData.map(digitoolData => <DigitoolCard key={digitoolData.id} digitoolData={digitoolData}></DigitoolCard>)
                }
            </section>
        </div>
    );
};

export default DigitalTools;