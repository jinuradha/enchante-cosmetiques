import { Provider, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import appStore from "../utils/appStore";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();

  const showCart = () => {
    cartItems.length > 0 ? navigate('/cart') : alert("Oops! Your Cart is empty.")
  };
  return (
      <div className="h-[9rem] flex justify-between border border-gray-300">
        <div className="flex m-3">
          <img className="px-3 h-full" alt="logo" src={require("../logo.png")} />
          <nav className="flex space-x-7 p-3 m-9">
            <li className="list-none text-xl">Brands</li>
            <li className="list-none text-xl">For You</li>
            <li className="list-none text-xl">Luxe</li>
            <li className="list-none text-xl">Offers</li>
          </nav>
        </div>
        <div className="flex my-11 text-right p-3 m-3">
          <input
            className="border rounded border-gray-400 bg-slate-200 h-10 w-64 p-2 mx-3"
            type="textbox"
            placeholder="Search"
          ></input>
          <div className="flex -space-x-6 w-20 ml-10">
          <img
            alt="cart"
            className="px-3 h-9 cursor-pointer"
            src={require("../icons/purse.png")}
            onClick={showCart}
          />
          {cartItems.length > 0 ? <span className="text-white bg-black text-center text-xs rounded-full size-4">{cartItems.length}</span> : <span></span>}
          </div>
          <img className="px-3 h-9" alt="user" src={require("../icons/user.png")} />
        </div>
      </div>
  );
};

export default Header;
