// src/components/ProductForm.js
import React, { useState, useEffect } from 'react';

const ProductForm = ({ onSubmit, currentProduct, onCancel }) => {
  const [product, setProduct] = useState({ name: '', price: '', quantity: '' });

  useEffect(() => {
    if (currentProduct) setProduct(currentProduct);
  }, [currentProduct]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
    setProduct({ name: '', price: '', quantity: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required />
      <input name="price" placeholder="Price" value={product.price} onChange={handleChange} required type="number" />
      <input name="quantity" placeholder="Quantity" value={product.quantity} onChange={handleChange} required type="number" />
      <button type="submit">{currentProduct ? 'Update' : 'Add'} Product</button>
      {currentProduct && <button onClick={onCancel} type="button">Cancel</button>}
    </form>
  );
};

export default ProductForm;
