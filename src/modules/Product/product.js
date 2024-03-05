//PRODUTO ÚNICO - BOTÃO COMPRAR E CARRINHO
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productsData from '../../data/products.json';

const Product = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    console.log(id, 'id', product);

    useEffect(() => {
        // Find the corresponding product in the local JSON file
        const foundProduct = productsData.find((item) => item.id.toString() === id);
        setProduct(foundProduct || {});
    }, [id]);

    const handleCart = (product, redirect) => {
        console.log(product);
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const isProductExist = cart.find((item) => item.id === product.id);
        if (isProductExist) {
            const updatedCart = cart.map((item) => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    };
                }
                return item;
            });
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        } else {
            localStorage.setItem('cart', JSON.stringify([...cart, { ...product, quantity: 1 }]));
        }
        alert('Product added to cart');
        if (redirect) {
            navigate('/cart');
        }
    };

    if (!Object.keys(product).length > 0) return <div>Loading.....</div>;

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-6 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img
                        alt={product?.title}
                        className="lg:w-1/2 w-full lg:h-auto max-h-[440px] h-64 object-contain object-center rounded"
                        src={product?.image}
                    />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">{product?.category}</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product?.title}</h1>
                        <div className="flex mb-4">
                            <span className="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                            </span>

                        </div>
                        <p className="leading-relaxed">{product?.description}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex">
                                <span className="mr-3">Color</span>
                                
                                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button className="border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none"></button>
                            </div>
                            <div className="flex ml-6 items-center">
                                <span className="mr-3">Size</span>
                                <div className="relative">
                                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                        <option>S</option>
                                        <option>M</option>
                                        <option>L</option>
                                        <option>XL</option>
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="title-font font-medium text-2xl text-gray-900">U$ {product?.price}</span>
                            <div className="flex">
                                <button
                                    className="flex items-center justify-center text-white bg-black border-0 py-0 px-3 focus:outline-none hover:bg-gray-500 rounded mr-4"
                                    onClick={() => handleCart(product, true)}
                                >Buy</button>
                                <button
                                    className="flex ml-auto border border-indigo-500 py-1 px-1 focus:outline-none hover:bg-gray-500 hover:text-white rounded"
                                    onClick={() => handleCart(product)}
                                >Add to cart</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;