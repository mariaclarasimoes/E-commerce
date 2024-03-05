import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-600 body-font border-t-2 mt-16">
            <div className="container px-5 py-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-black rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span className="ml-3 text-xl text-white">SHE IS</span>
                    </a>
                    <p className="mt-2 text-sm text-white">For more than 20 years, we've been inspiring confidence and authenticity, empowering everyone to express their true essence.</p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 uppercase">Get to Know Us</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-500 hover:text-white cursor-pointer">Corporate information</a>
                            </li>
                            <li>
                                <a className="text-gray-500 hover:text-white">Careers</a>
                            </li>
                            <li>
                                <a className="text-gray-500 hover:text-white">Press releases</a>
                            </li>
                            <li>
                                <a className="text-gray-500 hover:text-white">Accessibility</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 uppercase">Make Money </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-500 hover:text-white">Protect your brand</a>
                            </li>
                            <li>
                                <a className="text-gray-500 hover:text-white">Publish your books</a>
                            </li>
                            <li>
                                <a className="text-gray-500 hover:text-white">Become an affiliate</a>
                            </li>
                            <li>
                                <a className="text-gray-500 hover:text-white">Advertise your products</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 uppercase">Payment</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-500 hover:text-white">Payment methods</a>
                            </li>
                            <li>
                                <a className="text-gray-500 hover:text-white">Shop with points</a>
                            </li>
                            <li>
                                <a className="text-gray-500 hover:text-white">Credit card</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 uppercase">Help</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-gray-500 hover:text-white">Your account</a>
                            </li>
                            <li>
                                <a className="text-gray-500 hover:text-white">Shipping and delivery</a>
                            </li>
                            <li>
                                <a className="text-gray-500 hover:text-white">Returns and refunds</a>
                            </li>
                            <li>
                                <a className="text-gray-500 hover:text-white">Manage your content</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-black">
                <div className="container mx-auto py-2 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-white text-sm text-center sm:text-left">© 2024 SHE IS</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
