import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utils/cartSlice";

const MyBag = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  let totalAmount = 0
  let currency = ""

  const deleteItem = (itemCode) => {
    dispatch(removeItem(itemCode));
  };

  return (
    <div className="">
      <div className="p-4 flex m-3">
        <img className="px-3 h-24" alt="logo" src={require("../logo.png")} />
      </div>
      <div className="flex space-x-4">
        <div className="border text-center mx-14 w-8/12">
          <label className="text-2xl font-sans">My Bag</label>
          {cartItems.map((i) => {
            totalAmount = totalAmount + i.price.marked.max
            currency = i.price.marked.currency_symbol
            return (
              <div key={i.item_code} className="flex justify-left p-10">
                <img className="h-24 w-24 rounded-lg" alt="product" src={i.medias[0].url} />
                <div className="grid px-16 w-[90%] text-left">
                  <label>{i.brand.name}</label>
                  <label className="text-slate-400">{i.name}</label>
                  <label className="pb-2 font-bold">
                    {i.price.marked.currency_symbol} {i.price.marked.max}
                  </label>
                </div>
                <div className="">
                <button
                  className="bg-black text-white p-4"
                  onClick={() => deleteItem(i.item_code)}
                >
                  Remove
                </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border border-slate-400 rounded-md grid h-40 p-3 w-2/12">
          <label className="text-2xl font-sans">Apply Coupons</label>
          <label className="text-sm font-sans">Login to Apply Coupons</label>
          <div className="border border-slate-400 h-1"></div>
          <div>
            <label className="font-bold">Total Amout: {currency} {" "} {totalAmount}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBag;
