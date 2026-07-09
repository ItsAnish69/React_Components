import Cart from "./Cart";

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold">My Shop</h1>

        <nav className="flex gap-6">
          <a href="#" className="hover:text-gray-200">
            Home
          </a>
          <a href="#" className="hover:text-gray-200">
            Products
          </a>
          <a href="#" className="hover:text-gray-200">
            Cart
          </a>
        </nav>
        <Cart />
      </div>
    </header>
  );
}

export default Header;