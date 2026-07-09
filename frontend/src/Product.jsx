import { useDispatch } from "react-redux";
import Cart from "./Cart";
import { addItem } from "./Redux/Slice";

const ProductCard = () =>{

    const dispatch = useDispatch()
    
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
        alt="Running Shoes"
        className="w-full h-60 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold">Running Shoes</h2>

        <p className="text-gray-600 mt-2">
          Comfortable running shoes perfect for daily workouts.
        </p>

        <p className="text-2xl font-bold text-blue-600 mt-4">$79.99</p>

        <button className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        onClick={() => dispatch(addItem(1))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;