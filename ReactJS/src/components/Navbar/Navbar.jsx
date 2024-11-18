import { useId } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { useState } from 'react';

export default function Navbar({ onSearch }) {
  const inputId = useId();
  const { isLoggedIn, login, logout } = useUser();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Pass the search term to the parent component
  };

  return (
    <nav className="grid grid-cols-3 justify-between px-24 py-4 bg-[#47677d] items-center">
      <ul>
        <li className="flex items-center justify-center">
          <Link to="/" className="text-[#e4ecf1] active:text-[#141618]">
            Home
          </Link>
        </li>
      </ul>
      <ul className="flex justify-center items-center">
        <li className="w-full">
          <input
            type="text"
            className="text-black active:text-black focus:text-black px-4 py-2 w-full"
            name="search"
            id={inputId}
            placeholder="Search product"
            value={searchTerm}
            onChange={handleSearch} // Handle input change
          />
        </li>
      </ul>
      {!isLoggedIn ? (
        <ul className="flex gap-2 justify-end">
          <li className="text-[#e4ecf1] active:text-[#141618]">
            <button onClick={login}>Sign in</button>
          </li>
          <li>
            <Link className="text-[#e4ecf1] active:text-[#141618]" to="/signup">
              Sign up
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="flex justify-end gap-2">
          <li>
            <Link className="text-[#e4ecf1] active:text-[#141618]" to="/cart">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/orders" className="text-[#e4ecf1] active:text-[#141618]">
              My Orders
            </Link>
          </li>
          <li>
            <button onClick={logout} className="text-[#e4ecf1] active:text-[#141618]">
              Log out
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
