
import React, { useState } from 'react';
import ProductList from './ProductList';
import AboutUs from './AboutUs';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const handleHomeClick = () => {
    setShowProductList(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-white">
      <header className="bg-white/60 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-3">
            <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="logo" className="h-10 w-10" />
            <div>
              <h1 className="text-xl font-bold text-emerald-700">Paradise Nursery</h1>
              <p className="text-sm text-gray-600">Where Green Meets Serenity</p>
            </div>
          </div>
          <nav>
            <button className="btn-muted mr-3" onClick={handleHomeClick}>Home</button>
            <button className="btn-primary" onClick={handleGetStartedClick}>Shop Plants</button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {!showProductList ? (
          <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-emerald-800">Welcome To Paradise Nursery</h2>
              <p className="mt-4 text-lg text-gray-700">Where Green Meets Serenity</p>
              <div className="mt-6">
                <button className="btn-primary" onClick={handleGetStartedClick}>Get Started</button>
              </div>
            </div>
            <div className="bg-white/80 rounded-2xl shadow-lg p-6">
              <AboutUs />
            </div>
          </section>
        ) : (
          <section className="max-w-7xl mx-auto py-8 px-6">
            <ProductList onHomeClick={handleHomeClick} />
          </section>
        )}
      </main>

      <footer className="py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Paradise Nursery — All Rights Reserved
      </footer>
    </div>
  );
}

export default App;



