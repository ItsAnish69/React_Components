import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "./Redux/Slice";

export default function CartList() {
  const dispatch = useDispatch();

  const cartList = useSelector((state) => state.cart.items);
  const values = localStorage.getItem(cartList);
  return (
    <>
      <div className="class-container mt-8 bg-gray-200 m-10 p-10">
        <div className="cart-header px-10">
          <h2 className="text-2xl font-bold">
            Total cart Items: {cartList.length}
          </h2>
        </div>
        {cartList.length > 0
          ? cartList.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 m-8 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 gap-4"
              >
                {/* Left Section: Image and Text Info */}
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="w-20 h-20 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden border border-gray-100">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide uppercase">
                      {item.brand}
                    </p>
                  </div>
                </div>

                {/* Right Section: Price and Actions */}
                <div className="flex sm:flex-col justify-between sm:justify-center items-center sm:items-end w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100 gap-2">
                  <span className="text-lg font-bold text-gray-900">
                    ${item.price.toLocaleString()}
                  </span>
                  <button
                    className="text-xs font-medium text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors duration-200"
                    onClick={() => dispatch(removeItem(item))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          : null}
        <div className="w-full h-30 left-0 flex justify-end items-center">
          <h1 className="text-2xl font-bold flex relative right-20">
            Total Price: ${cartList.reduce((sum, item) => sum + item.price, 0)}
          </h1>
        </div>
      </div>
    </>
  );
}
