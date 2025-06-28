// src/pages/home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import { toast } from 'react-toastify';
import './Auth.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  // Fetch all products
  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:5000/api/products');
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add or update
  const handleSubmit = async (product) => {
    try {
      if (product._id) {
        await axios.put(`http://localhost:5000/api/products/${product._id}`, product);
        toast.success('✅ Product updated!');
      } else {
        await axios.post('http://localhost:5000/api/products', product);
        toast.success('✅ Product added!');
      }
      fetchProducts();
      setEditingProduct(null);
    } catch {
      toast.error('❌ Error saving product');
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      toast.success('🗑️ Deleted!');
      fetchProducts();
    } catch {
      toast.error('❌ Error deleting');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>🛒 Product Manager</h2>
      <ProductForm onSubmit={handleSubmit} currentProduct={editingProduct} onCancel={() => setEditingProduct(null)} />
      <ProductList products={products} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Home;
