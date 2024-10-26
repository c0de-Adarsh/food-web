import React from 'react'

const SignIn = () => {
  return (
    <div>
    <div class="text-gray-600 body-font w-[90%] sm:w-[80%] mx-auto mt-[100px]">
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 lg:pr-0 md:pr-0">
          <h1 class="title-font font-medium text-3xl text-gray-900">
            Get Started with your Account
          </h1>
          <p class="leading-relaxed mt-4">
            Find Your Favourite Food on our platform . Just one step to order
            your Food
          </p>
        </div>
        <div class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <div class="relative mb-4">
            <label for="full-name" class="leading-7 text-sm text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
  <label for="email" class="leading-7 text-sm text-gray-600">
    Mobile
  </label>
  <input
    type="text"
    id="mobile"
    name="mobile"
    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
  />
</div>
<div class="relative mb-4">
  <label for="password" class="leading-7 text-sm text-gray-600">
    Password
  </label>
  <input
    type="password"
    id="password"
    name="password"
    class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
  />
</div>
<button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
  Sign Up
</button>

        </div>
      </div>
    </div>
  
    </div>
  )
}

export default SignIn