'use client';

import React, { useState } from 'react';

// Define the Product type
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

// Sample data (replace with your actual product data or API call)
const products: Product[] = [
  { id: 1, name: 'Dandy Chair', description: 'A stylish and comfortable chair', price: 250 },
  { id: 2, name: 'Small Table', description: 'A small and versatile table', price: 150 },
  { id: 3, name: 'Sofa', description: 'A luxurious sofa for your living room', price: 500 },
  { id: 4, name: 'Coffee Table', description: 'Perfect for your coffee breaks', price: 120 },
  { id: 5, name: 'Dining Table', description: 'A beautiful dining table', price: 350 },
  { id: 6, name: 'Table', description: 'Perfect for your writing', price: 120 },
];

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Handle input change for search
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Find the product that exactly matches the query (case-insensitive)
    const product = products.find(
      (product) =>
        product.name.toLowerCase() === query || product.description.toLowerCase() === query
    );
    
    // Only set selectedProduct if there's an exact match
    setSelectedProduct(product || null);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Search Products</h1>

      <div className="mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-3 rounded-md border border-gray-300"
          placeholder="Search for products..."
        />
      </div>

      {/* Show product details if a product is selected */}
      {selectedProduct ? (
        <div className="mt-6 p-6 border rounded-md shadow-md">
          <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
          <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
          <p className="font-bold text-lg mt-4">£{selectedProduct.price}</p>
        </div>
      ) : (
        searchQuery && (
          <p className="text-gray-600 mt-4">
            No product found for your search query.
          </p>
        )
      )}
    </div>
  );
};

export default SearchPage;
