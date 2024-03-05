import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from "../../data/products.json";

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Use os dados do arquivo JSON importado
                setProducts(productsData);
            } catch (error) {
                console.error('Error loading data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5  mx-auto">
                <div class="container px-5 py-3 mx-auto">
                    <div class="flex flex-col text-center w-full ">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-8 text-gray-900">CHECK OUT OUR PRODUCTS</h1>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4">
                    {products.map((product) => {
                        console.log(product, 'product');
                        const { id, title, price, category, image } = product;
                        return (
                            <Link
                                to={`/products/${id}`}
                                className="lg:w-[23%] md:w-1/2 p-4 w-full mb-4 cursor-pointer rounded-lg shadow ml-4"
                                key={id}
                            >
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt={title} className=" object-contain-fill object-center w-full h-full block" src={image} />
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{category}</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
                                    <p className="mt-1 text-md font-semibold">U$ {price}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AllProducts;
