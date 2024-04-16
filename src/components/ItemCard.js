import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemCard = (props) => {
    const dispatch = useDispatch();
    const { product } = props;

    const handleAddItem = (productName) => {
        dispatch(addItems(productName));
    }

    return <div className="grid w-64 m-6 p-4">
        <img className="rounded-lg w-34" alt="card" src={product.medias[0].url}/>
        <label className="text-slate-400 text-sm">{product.brand.name}</label>
        <label className="py-2">{product.name}</label>
        <label className="pb-2">{product.price.marked.currency_symbol} {" "} {product.price.marked.max}</label>
        <button className="bg-black text-white p-4" onClick={() => handleAddItem(product)}>Add to Bag</button>
    </div>
}

export default ItemCard;