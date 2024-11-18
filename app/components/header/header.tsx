import { Link, Form } from '@remix-run/react';
import { Bag, Favorites, Search } from '~/components/icons';

export function Header() {
  return (
    <header className="flex flex-col w-full">
      {/* Top bar */}
      <div className="bg-gray-100 px-6 py-1 flex justify-between items-center">
        <Link to="/" className="ml-8">
          <img src="/jordan-logo.svg" alt="Jordan Logo" className="h-4" />
        </Link>
        <div className="flex gap-3 text-xs mt-2 mb-2 mr-8">
          <Link to="/find-a-store" className="font-medium text-xs">Find a Store</Link>
          <span>|</span>
          <Link to="/help" className="font-medium text-xs">Help</Link>
          <span>|</span>
          <Link to="/join-us" className="font-medium text-xs">Join Us</Link>
          <span>|</span>
          <Link to="/sign-in" className="font-medium text-xs">Sign In</Link>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="px-6 py-3 flex justify-between items-center">
        <Link to="/" className="ml-8">
          <img src="/nike-logo.svg" alt="Nike Logo" className="h-8" />
        </Link>

        {/* Main menu - centered with more space */}
        <div className="flex gap-6 absolute left-1/2 transform -translate-x-1/2">
          <Link to="/new" className="font-medium text-base">New & Featured</Link>
          <Link to="/men" className="font-medium text-base">Men</Link>
          <Link to="/women" className="font-medium text-base">Women</Link>
          <Link to="/kids" className="font-medium text-base">Kids</Link>
        </div>

        {/* Right section - moved further inward */}
        <div className="flex items-center gap-3 mr-8">
          {/* Search bar */}
          <div className="relative">
            <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent border-none outline-none px-2 w-36 text-sm"
              />
            </div>
          </div>

          {/* Icons */}
          <Link to="/favorites">
            <Favorites className="w-5 h-5" />
          </Link>
          <Link to="/bag">
            <Bag className="w-5 h-5" />
          </Link>
        </div>
      </nav>

      {/* Bottom bar */}
      <div className="bg-gray-100 px-6 py-2 text-center flex flex-col gap-1">
        <Link to="/new-arrivals" className="text-sm">
          Shop All New Arrivals
        </Link>
        <Link to="/nike-tech" className="text-xs text-gray-900 underline">
          Shop
        </Link>
      </div>
    </header>
  );
} 