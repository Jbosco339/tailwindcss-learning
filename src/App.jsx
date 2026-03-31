import { useState } from "react";

function App() {

  return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
        <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow fixed w-screen">
          <h1 className="font-bold text-lg cursor-pointer hover:bg-cyan-300 hover:text-black px-2">TailwindPractice</h1>
          
          <div className="hidden md:flex gap-6">
            <ul className="flex ">
              <li className="mr-2 cursor-pointer hover:bg-cyan-300 hover:text-black px-2">Home</li>
              <li className="mr-2 cursor-pointer hover:bg-cyan-300 hover:text-black px-2">About us</li>
              <li className="mr-2 cursor-pointer hover:bg-cyan-300 hover:text-black px-2">Services</li>
              <li className="mr-2 cursor-pointer hover:bg-cyan-300 hover:text-black px-2">Contact</li>
            </ul>
          </div>
        </nav>

        <section className="grid md:grid-cols-2 gap-8 p-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Learn Tailwind Responsiveness
            </h2>
            <p className="mb-4">
              Practice building responsive layouts using Tailwind CSS
              breakpoints and utilities.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400">
              Get Started
            </button>
          </div>

          <div className="bg-blue-400 h-60 rounded flex items-center justify-center text-black mt-16">
          <img src="/6.jpg" alt="home-img" className="h-110 w-full"/>
          </div>
        </section>

        {/* DASHBOARD LAYOUT */}
        <section className="p-8">
          <h2 className="text-2xl font-bold mb-6 ">Dashboard Layout</h2>
          <div className=" living2 flex  justfy-center items-center bg-white">

            <div className="bg-cyan-400 text-black flex justify-center items-center h-60 w-60 rounded-full mb-5">
              <p className="text-2xl">Living the Life</p>
            </div>

          </div>
          <main className="bg-gray-200 dark:bg-gray-800 p-6 rounded md:col-span-3">
              <p>
                This is the main dashboard content area. Resize the screen to
                see how the sidebar moves above the content on mobile screens.
              </p>
            </main>
        </section>

      </div>
  );
}

export default App;