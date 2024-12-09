import React from 'react';
import Image from 'next/image'; 

const Seller = () => {
    return (
        <div className="bg-white py-12">
            {/* Section Heading */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-black">Featured Products</h2>
                <p className="text-xl text-black mt-4">BESTSELLER PRODUCTS</p>
                <p className="text-sm text-gray-600 mt-2">Problems trying to resolve the conflict between...</p>
            </div>

          
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
                {/* Product 1 */}
                <div className="relative">
                    <Image 
                        src="/images/col-md-4.png" 
                        alt="Graphic Design" 
                        width={500} 
                        height={500} 
                        className="w-full h-auto rounded-lg" 
                    />
                </div>

                {/* Product 2 */}
                <div className="relative">
                    <Image 
                        src="/images/col-md-5.png" 
                        alt="Graphic Design" 
                        width={500} 
                        height={500} 
                        className="w-full h-auto rounded-lg" 
                    />
                </div>

                {/* Product 3 */}
                <div className="relative">
                    <Image 
                        src="/images/col-md-8.png" 
                        alt="Graphic Design" 
                        width={500} 
                        height={500} 
                        className="w-full h-auto rounded-lg" 
                    />
                </div>

                {/* Product 4 */}
                <div className="relative">
                    <Image 
                        src="/images/col-md-7.png" 
                        alt="Graphic Design" 
                        width={500} 
                        height={500} 
                        className="w-full h-auto rounded-lg" 
                    />
                </div>

                {/* Product 5 */}
                <div className="relative">
                    <Image 
                        src="/images/col-md-9.png" 
                        alt="English Department" 
                        width={500} 
                        height={500} 
                        className="w-full h-auto rounded-lg" 
                    />
                </div>

                {/* Product 6 */}
                <div className="relative">
                    <Image 
                        src="/images/col-md-10.png" 
                        alt="Graphic Design" 
                        width={500} 
                        height={500} 
                        className="w-full h-auto rounded-lg" 
                    />
                </div>

                {/* Product 7 */}
                <div className="relative">
                    <Image 
                        src="/images/col-md-11.png" 
                        alt="Row Product" 
                        width={500} 
                        height={500} 
                        className="w-full h-auto rounded-sm" 
                    />
                </div>

                {/* Product 8 */}
                <div className="relative">
                    <Image 
                        src="/images/col-md-12.png" 
                        alt="English Department" 
                        width={500} 
                        height={500} 
                        className="w-full h-auto rounded-lg" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Seller;

