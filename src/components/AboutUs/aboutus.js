import React from "react";

const AboutUs = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 mx-auto">
                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-6 mb-6 border-gray-200 sm:flex-row flex-col">
                    <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">COMPANY HISTORY</h2>
                        <p class="leading-relaxed text-base">A brief account of how the company was founded, the founders, and how it has evolved over time.</p>
                        <a class="mt-3 text-black inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-6 mb-6 border-gray-200 sm:flex-row flex-col">
                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">MISSION AND VISION</h2>
                        <p class="leading-relaxed text-base">The mission and vision of the company, the purposes, and long-term objectives.</p>
                        <a class="mt-3 text-black inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                        </svg>
                    </div>
                </div>
                <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
                    <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </div>
                    <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                        <h2 class="text-gray-900 text-lg title-font font-medium mb-2">VALUES</h2>
                        <p class="leading-relaxed text-base">Core values of your company that guide its actions and decisions.</p>
                         <a class="mt-3 text-black inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs
