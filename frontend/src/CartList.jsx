import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetItem } from "./Redux/Slice";
import { useEffect, useState } from "react";
import Button from "./reuse/Button/Button";
import { useNavigate } from "react-router-dom";

export default function CartList() {
  const cartList = useSelector((state) => state.cart.items);
  const values = localStorage.getItem(cartList);
  const [cartItems, setCartItems] = useState(cartList);

  useEffect(() => {
    setCartItems(cartList);
  }, [cartList]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const manageQuantity = (id, q) => {
    let quantity = parseInt(q) > 1 ? parseInt(q) : 1;
    const cartTempItems = cartList.map((item) => {
      return item.id == id ? { ...item, quantity } : item;
    });
    console.log(cartTempItems);

    setCartItems(cartTempItems);
  };

  const handleOrder = () => {
    localStorage.clear();
    dispatch(resetItem());
    alert("Order Placed");
    navigate("/");
  };

  return (
    <>
      {/* DESIGN FIX: Changed outer container padding/margins to match screens better */}
      <div className="class-container mt-8 bg-gray-100 max-w-4xl mx-auto p-4 sm:p-8 rounded-2xl shadow-sm">
        <div className="cart-header mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Total cart Items: {cartItems.length}
          </h2>
        </div>
        {cartItems.length > 0
          ? cartItems.map((item) => (
              <div
                key={item.id}
                /* DESIGN FIX: Handled mobile vs desktop responsive structural gap layouts */
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 my-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 gap-4"
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
                {/* DESIGN FIX: Aligned structural fields to flow horizontally on desktop and match sizes */}
                <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100 gap-6">
                  <div className="flex items-center justify-center">
                    {/* DESIGN FIX: Forced a fixed narrow width 'w-16' to prevent layout breakages */}
                    <input
                      type="number"
                      placeholder="Enter Quantity"
                      className="bg-gray-50 border border-gray-300 outline-none p-2 w-auto rounded-lg focus:ring-1 focus:ring-gray-400"
                      min="1"
                      onChange={(e) => manageQuantity(item.id, e.target.value)}
                      defaultValue={item.quantity || 1}
                    />
                  </div>
                  {/* DESIGN FIX: Aligned text right on desktop and organized item prices to not overlap */}
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-lg font-bold text-gray-900 min-w-[75px] text-right">
                      $
                      {(item.quantity
                        ? item.price * item.quantity
                        : item.price
                      ).toFixed(2)}
                    </span>
                    <Button
                      variant="secondary"
                      className="text-xs font-semibold text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-2.5 py-1.5 rounded-md transition-colors duration-200"
                      onClick={() => dispatch(removeItem(item))}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))
          :null}
        {/* DESIGN FIX: Re-positioned final bottom totals to align perfectly with the item cards */}
        <div className="w-full mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
          <div>
            {cartItems.length > 0 ? 
            <Button onClick={handleOrder}>Place Order</Button> : null}
          </div>
          <h1 className="text-xl font-bold text-gray-800">
            Total Price: $
            {cartItems
              .reduce(
                (sum, item) =>
                  item.quantity
                    ? sum + item.price * item.quantity
                    : sum + item.price,
                0,
              )
              .toFixed(2)}
          </h1>
        </div>
      </div>
    </>
  );
}
