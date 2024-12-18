import React from 'react'

export default function FirstPage() {
    return (
        <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply h-screen">
            <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">ShopEase</h1>
                <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Welcome to ShopEase – your one-stop destination for seamless online shopping! Explore a wide range of products, add them to your cart, and enjoy a hassle-free checkout experience..</p>
                <p class="mb-8 text-xl font-bold text-gray-300 lg:text-xl sm:px-16 lg:px-48">You are a ..</p>
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 ">

                    <a href="buyer/login" class="inline-flex w-[150px] h-[40px] justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Buyer
                    </a>
                    <a href="#" class="inline-flex  justify-center w-[150px] h-[40px] hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Seller
                    </a>
                </div>
            </div>
        </section>

    )
}


