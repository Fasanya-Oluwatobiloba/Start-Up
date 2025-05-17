import React, { useState } from "react";
import { Pencil } from "lucide-react";
import { Link } from "react-router";

const categories = [
  "Fashion & Accessories",
  "Clothing & Footwear",
  "Electronics & Gadgets",
  "Beauty & Personal Care",
  "Snacks & Treat",
  "Provision & Groceries",
  "Study Essentials",
  "Services",
  "Others"
];

const AddProduct = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-4">
        <h2 className="text-center text-xl font-bold text-purple-700 mb-2">
          🛍️ Add New Product
        </h2>

        {/* Image Upload */}
        <div className="relative mx-auto h-48 border-2 border-gray-300 bg-gray-100 rounded-md w-full flex items-center justify-center shadow-md">
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <span className="text-gray-400">No Image</span>
          )}

          <label className="absolute bottom-2 right-2 bg-purple-600 text-white p-1 rounded-full shadow-lg cursor-pointer hover:bg-purple-700 transition">
            <Pencil size={16} />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        </div>

        {/* Title */}
        <input
          type="text"
          placeholder="Title"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Price */}
        <input
          type="number"
          placeholder="Price"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        {/* Category Dropdown */}
        <select
          className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          <option value="">Select Category</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Description */}
        <textarea
          placeholder="Description"
          className="w-full border border-gray-300 rounded-md px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
        ></textarea>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
        <Link to="/market"><button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
            Cancel
          </button></Link> 
          <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
