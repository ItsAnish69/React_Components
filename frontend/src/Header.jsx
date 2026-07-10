import Cart from "./Cart";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md sticky z-10 top-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">My Shop</h1>

        <nav className="flex gap-6">
            <ul className="flex flex-row gap-6">
          <li className="hover:text-gray-200 hover:scale-105">
            <Link to='/'>
                Home
            </Link>
          </li>
          <li className="hover:text-gray-200 hover:scale-105">
            <Link to='/'>
            Product
            </Link>
          </li>
          </ul>
        </nav>
        <Link to='cart-list'>
        <Cart />
        </Link>
      </div>
    </header>
  );
}

export default Header;