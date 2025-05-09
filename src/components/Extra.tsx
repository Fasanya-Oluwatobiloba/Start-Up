//profile-icon
import { Pencil } from "lucide-react";
<div className="relative mt-4">
<div className="relative">
  {profileImage ? (
	<img
	  src={profileImage}
	  alt="Profile"
	  className="w-48 h-48 object-cover rounded-full shadow-lg border-2 border-gray-300"
	/>
  ) : (
	<div className="w-56 h-56 flex items-center justify-center bg-white border-2 border-purple-500 rounded-full shadow-md text-gray-600">
	  No Image
	</div>
  )}

  {profileImage && (
	<label className="absolute bottom-1 right-1 bg-purple-600 text-white p-1 rounded-full shadow-lg cursor-pointer hover:bg-purple-700 transition">
	  <Pencil size={16} />
	  <input
		type="file"
		accept="image/*"
		onChange={handleImageUpload}
		className="hidden"
	  />
	</label>
  )}
</div>
</div>

{!profileImage && (
	<label className="mt-2 bg-purple-600 text-white px-2 py-1 rounded-full text-sm cursor-pointer hover:bg-purple-700 transition">
	  Upload Image
	  <input
		type="file"
		accept="image/*"
		onChange={handleImageUpload}
		className="hidden"
	  />
	</label>
  )}

  <h1 className="text-xl font-serif text-black mt-6">
  <span className="text-blue-600 font-bold">{name || "Guest"}</span>
</h1>

<div className="mt-12 text-gray-700 text-xl font-medium">
  <p>
	<span className="text-purple-700 text-2xl">Faculty:</span>{" "}
	{faculty}
  </p>
  <br />
  <p>
	<span className="text-purple-700 text-2xl">Dept:</span>{" "}
	{department}
  </p>
  <br />
  <p>
	<span className="text-purple-700 text-2xl">Level:</span> {level}
  </p>
  <br />
</div>

<Link
  to="/courses"
  className="mt-6 px-8 py-3 bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-semibold text-lg rounded-full flex items-center shadow-lg hover:scale-105 transition"
>
  GET STARTED
</Link>


import React, { useState, useRef } from "react";
import AddProduct from "../../components/AddProduct";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
};

const Market = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Face mask",
      price: 800,
      category: "Fashion & Accessories",
      image: "facemask.jpg",
    },
  ]);

  const productListRef = useRef<HTMLDivElement>(null);

  const handleAddProduct = (product: Product) => {
    setProducts([product, ...products]);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-center text-2xl font-bold text-purple-700 mb-4">🛍️ Marketplace</h1>


      <div ref={productListRef} className="grid grid-cols-2 gap-4 mt-6">
        {products.map((prod) => (
          <div key={prod.id} className="bg-white shadow rounded-lg p-4 text-center">
            <img src={prod.image} alt={prod.name} className="w-full h-40 object-cover mb-2 rounded-md" />
            <h3 className="font-semibold">{prod.name}</h3>
            <p className="text-purple-600 font-bold">₦{prod.price}</p>
            <p className="text-sm text-gray-500">{prod.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Market;


import React, { useState, useRef } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
};

type Props = {
  onAdd: (product: Product) => void;
};

const AddProduct = ({ onAdd }: Props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("Fashion & Accessories");
  const [imagePreview, setImagePreview] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct: Product = {
      id: Date.now(),
      name,
      price,
      category,
      image: imagePreview || "",
    };
    onAdd(newProduct);
    setName("");
    setPrice(0);
    setCategory("Fashion & Accessories");
    setImagePreview("");
    fileInputRef.current?.value && (fileInputRef.current.value = "");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 bg-white shadow-md rounded-xl">
      <h2 className="text-center text-xl font-bold text-purple-700">🛍️ Add New Product</h2>

      <div className="flex justify-center">
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Preview"
            className="w-40 h-40 object-cover rounded-lg border-2 border-purple-400 shadow"
          />
        ) : (
          <div className="w-40 h-40 flex items-center justify-center bg-gray-100 text-gray-500 border-2 border-dashed border-purple-400 rounded-lg">
            No Image
          </div>
        )}
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="w-full"
      />

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="w-full border border-gray-300 rounded-md px-3 py-2"
      />

      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(+e.target.value)}
        placeholder="Price"
        className="w-full border border-gray-300 rounded-md px-3 py-2"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2"
      >
        <option>Fashion & Accessories</option>
        <option>Electronics & Gadgets</option>
        <option>Clothing & Footwear</option>
        <option>Snacks & Treat</option>
        <option>Services</option>
        <option>Others</option>
      </select>

      <button type="submit" className="bg-purple-600 text-white w-full py-2 rounded hover:bg-purple-700">
        Save Product
      </button>
    </form>
  );
};

export default AddProduct;
