import React from 'react';
import './App.css';
import ProductCard from './components/ProductCard/ProductCard';
import tovar1 from './assets/images/tovar1.png';
import tovar2 from './assets/images/tovar2.png';
import tovar3 from './assets/images/tovar3.png';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>НОВИНКИ СЕЗОНА</h1> 
      </header>
      
      <div className="products-container">
        <ProductCard 
          nazvanieTovara="SPORT POLO T-SHIRT"
          cenaTovara={4490}
          razmery="XS S M"
          imageUrl={tovar1}
        />
        
        <ProductCard 
          nazvanieTovara="SPORT POLO BLACK"
          cenaTovara={4490}
          razmery="XS S M"
          imageUrl={tovar2}
        />
        
        <ProductCard 
          nazvanieTovara="Джинсы CARGO"
          cenaTovara={13990}
          razmery="XS S M"
          imageUrl={tovar3}
        />
      </div>
    </div>
  );
};

export default App;