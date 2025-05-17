import { Link } from "react-router";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
};

const categories = [
  "All",
  "Fashion & Accessories",
  "Clothing & Footwear",
  "Electronics & Gadgets",
  "Beauty & Personal Care",
  "Snacks & Treat",
  "Provision & Groceries",
  "Study Essentials",
  "Services",
  "Others",
];

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Normal Scarf",
    price: 2000,
    category: "Fashion & Accessories",
    image: "scarf.jpg",
  },
  {
    id: 2,
    name: "Face mask",
    price: 800,
    category: "Fashion & Accessories",
    image: "facemask.jpg",
  },
  {
    id: 3,
    name: "Perfume oil",
    price: 700,
    category: "Fashion & Accessories",
    image: "perfume.jpg",
  },
  {
    id: 4,
    name: "Jersey scarf",
    price: 3500,
    category: "Fashion & Accessories",
    image: "jersey.jpg",
  },
];

const Market = () => {
  return (
    <div>
      <h1 className="text-center text-2xl py-4 bg-purple-500 font-bold">
        🏦 Marketplace
      </h1>

      <div className="bg-purple-800 p-4 sticky top-0 z-40">
        <input
          type="search"
          placeholder="💭 Search Product"
          className="border-green-500 bg-gray-200  px-2 rounded-3xl py-2 w-full outline-0"
        />
      </div>

      <div className="bg-gray-200">
	  <div className="flex overflow-x-auto gap-2 py-4 px-2">
          {categories.map((prod) => {
            return (
              <button
                key={prod}
                className="border-1 bg-white active:bg-blue-500 rounded-full px-4 py-2 whitespace-nowrap font-medium"
              >
                {prod}
              </button>
            );
          })}
        </div>
		<Link to="/addProduct" className="fixed bottom-4 right-4 bg-purple-600 text-white rounded-full w-14 h-14 flex items-center justify-center text-3xl shadow-lg">
          +
        </Link>
      </div>
    </div>
  );
};

export default Market;
