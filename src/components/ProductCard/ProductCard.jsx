import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ nazvanieTovara, cenaTovara, imageUrl, razmery }) => {
  const [kolichestvo, setKolichestvo] = useState(0);
  const [pokazatUpravlenie, setPokazatUpravlenie] = useState(false);

  const handleDobavitVKorzinu = () => {
    setKolichestvo(1);
    setPokazatUpravlenie(true);
  };

  const handleUbratIzKorziny = () => {
    if (kolichestvo > 1) {
      setKolichestvo(kolichestvo - 1);
    } else {
      setKolichestvo(0);
      setPokazatUpravlenie(false);
    }
  };

  const handlePribavit = () => {
    setKolichestvo(kolichestvo + 1);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={imageUrl} alt={nazvanieTovara} />
      </div>
      
      <div className="product-info">
        <h3 className="product-category">Размеры</h3>
        
        {razmery && (
          <div className="product-specs">
            <span className="spec-item">{razmery}</span>
            <span className="spec-divider">……</span>
          </div>
        )}
        
        <h2 className="product-title">{nazvanieTovara}</h2>
        <p className="product-price">{cenaTovara.toLocaleString()} ₽</p>
        
        <div className="product-actions">
          {pokazatUpravlenie ? (
            <div className="cart-controls">
              <button className="cart-btn remove-btn" onClick={handleUbratIzKorziny}>
                −
              </button>
              <div className="counter">
                <span className="counter-number">{kolichestvo}</span>
              </div>
              <button className="cart-btn add-btn" onClick={handlePribavit}>
                +
              </button>
            </div>
          ) : (
            <button className="add-to-cart-btn" onClick={handleDobavitVKorzinu}>
              ДОБАВИТЬ В КОРЗИНУ
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;