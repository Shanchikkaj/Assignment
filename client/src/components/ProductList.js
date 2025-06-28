// src/components/ProductList.js
import React from 'react';
import '../pages/Auth.css'; 

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <div style={{ marginTop: '30px' }}>
      <h2>📦 Product List</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <table className="product-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price (Rs.)</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, index) => (
              <tr key={p._id}>
                <td>{index + 1}</td>
                <td>{p.name}</td>
                <td>{p.price.toFixed(2)}</td>
                <td>{p.quantity}</td>
                <td>
                  <button onClick={() => onEdit(p)}>✏️ Edit</button>
                  <button onClick={() => onDelete(p._id)}>🗑️ Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;
