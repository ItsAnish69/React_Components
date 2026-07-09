import { ShoppingCart } from "lucide-react"
import { useSelector } from "react-redux"

const Cart = () => {
    const selector = useSelector((state) => state.cart.value)
    console.log(selector)
    return(
        <div className="relative cursor-pointer">
            <ShoppingCart size={34} />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
            {selector}</span>
          </div>
    )
}
export default Cart