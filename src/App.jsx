import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
        <nav className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 shadow fixed w-screen">
          <h1 className="font-bold text-lg">TailwindPractice</h1>
          
          <div className="hidden md:flex gap-6">
            <ul className="flex ">
              <li className="mr-2 cursor-pointer">Home</li>
              <li className="mr-2 cursor-pointer">About</li>
              <li className="mr-2 cursor-pointer">Services</li>
              <li className="mr-2 cursor-pointer">Contact</li>
            </ul>
            
          </div>
        </nav>
          
        {menuOpen && (
         
          <div className="flex flex-col items-center md:hidden bg-gray-200 dark:bg-gray-700 py-4 gap-3">
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Contact</span>
          </div>
        )}

        <section className="grid md:grid-cols-2 gap-8 p-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Learn Tailwind Responsiveness
            </h2>
            <p className="mb-4">
              Practice building responsive layouts using Tailwind CSS
              breakpoints and utilities.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Get Started
            </button>
          </div>

          <div className="bg-blue-400 h-60 rounded flex items-center justify-center text-black mt-16">
            Hero Image
          </div>
        </section>

        {/* Cards */}
        <section className="p-8">
          <h2 className="text-2xl font-bold mb-6">Featured Cards</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1,2,3,4,5,6,7,8].map((item) => (
              <div
                key={item}
                className="bg-slate-500 text-white p-6 rounded hover:scale-105 transition"
              >
                Card {item}
              </div>
            ))}
          </div>
        </section>

        {/* DASHBOARD LAYOUT */}
        <section className="p-8">
          <h2 className="text-2xl font-bold mb-6">Dashboard Layout</h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-gray-300 dark:bg-gray-700 p-4 rounded md:col-span-1">
              <ul className="space-y-3">
                <li>Dashboard</li>
                <li>Users</li>
                <li>Settings</li>
                <li>Reports</li>
              </ul>
            </div>

            <div className="bg-cyan-400 text-black flex justify-center items-center h-60 w-60 rounded-full">
              <p className="text-2xl">Living the Life</p>
              {/* <p>Now it feels like am there</p> */}
            </div>

          
            <main className="bg-gray-200 dark:bg-gray-800 p-6 rounded md:col-span-3">
              <p>
                This is the main dashboard content area. Resize the screen to
                see how the sidebar moves above the content on mobile screens.
              </p>
            </main>

          </div>
        </section>

      </div>
  );
}

export default App;