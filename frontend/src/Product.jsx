import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./Redux/Slice";
import { useEffect } from "react";
import { fetchProducts } from "./Redux/ProductSlice";

const ProductCard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const selector = useSelector((state) => state.product.items);

  const cartSelector = useSelector((state) => state.cart.items);

  return (
    <div className="w-full flex flex-wrap justify-center items-stretch gap-6 p-4 mt-10">
      {selector.length > 0 &&
        selector.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] flex flex-col justify-between border-2 border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200 hover:scale-103"
          >
            {/* Top Section: Image */}
            <div className="w-full aspect-square bg-gray-50 overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Middle Section: Text Content */}
            <div className="p-4 flex flex-col flex-1 gap-2">
              <div className="flex justify-between items-start gap-2">
                <h2 className="text-lg font-bold text-gray-800 line-clamp-1">
                  {item.title}
                </h2>
                <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-0.5 rounded flex items-center gap-1 shrink-0">
                  ★ {item.rating}
                </span>
              </div>
              <h3 className="text-xs uppercase font-semibold text-gray-400 tracking-wider">
                {item.category}
              </h3>
              <h1 className="text-2xl font-bold text-green-700">
                ${item.price}
              </h1>
              <p className="text-sm text-gray-600 line-clamp-2 mt-1 flex-1">
                {item.description}
              </p>
            </div>

            {/* Bottom Section: Action Buttons */}
            <div className="grid grid-cols-2 gap-2 p-4 pt-0 w-full mt-auto">
              {!cartSelector.find((cartItem) => cartItem.id === item.id) ? (
                <button
                  className="w-full py-2 px-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-150"
                  onClick={() => dispatch(addItem(item))}
                >
                  Add to cart
                </button>
              ) : (
                <button
                  className="w-full py-2 px-3 text-sm font-medium text-white bg-red-700 rounded-lg transition-colors duration-150"
                  onClick={() => dispatch(removeItem(item))}
                >
                  Remove from cart
                </button>
              )}
              {/* <button className="w-full py-2 px-3 text-sm font-medium text-white bg-red-600 hover:bg-red-700 hover:text-white  rounded-lg transition-colors duration-150"
        onClick={() => dispatch(removeItem())}>
          Remove from cart
        </button> */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductCard;
