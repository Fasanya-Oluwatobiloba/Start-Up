import { Heart, Truck, CreditCard } from "lucide-react";
import airplane from "../assets/airplane.jpg";
import { useState } from "react";

export default function ProductDetailPage() {
  const [selected, setSelected] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center mx-6">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={airplane}
          alt="Perfume Oil"
          className="w-full h-64 object-cover"
        />

        <div className="p-4">
          <h2 className="text-xl font-semibold">Perfume oil</h2>
          <p className="text-blue-700 text-2xl font-bold mt-1">₦700.00</p>

          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              #popular
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              #trendy
            </span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              #student-deals
            </span>
          </div>

          <p className="mt-3 text-gray-600">
            Is a small perfume oil that is easy to take around
          </p>

          <div className="mt-4 bg-gray-100 p-3 rounded-md">
            <div className="flex items-center gap-2 text-base mb-1">
              <Truck className="h-6 w-6 text-orange-500" />
              <span>Delivery: Within 24–48 hours on campus</span>
            </div>
            <div className="flex items-center gap-2 text-base">
              <CreditCard className="h-6 w-6 text-yellow-500" />
              <span>Payment Options: Bank transfer or Pay on Delivery</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Tap "Buy Now" to proceed to checkout and confirm your payment.
            </p>
          </div>

          <div className="flex gap-2 mt-4">
            <button className="flex-1 bg-blue-700 text-white py-2 rounded-md font-medium">
              Buy Now
            </button>
            <button className="flex-1 border border-blue-700 text-blue-700 py-2 rounded-md font-medium">
              Message Seller
            </button>
          </div>

          <button
            onClick={() => setSelected(!selected)}
            className={`flex items-center justify-center font-semibold gap-1 my-4 text-sm w-full border rounded-lg py-4 border-blue-600 transition-all duration-200 ${
              selected ? "bg-blue-600 text-white" : "bg-white text-gray-600"
            }`}
          >
            <Heart className={`w-4 h-4 ${selected ? "fill-white" : ""}`} />
            {selected ? "Added to Wishlist" : "Add to Wishlist"}
          </button>

          {/* <button
            onClick={() => {
              setSelected(true);
            }}
            className={`flex items-center justify-center gap-1 my-4  text-sm w-full border rounded-lg py-4 ${
              selected === true ? "bg-purple-400 " : "bg-white text-gray-600 "
            }`}
          >
            <Heart className="w-4 h-4" /> Add to Wishlist
          </button> */}
        </div>
      </div>
    </div>
  );
}
