import ItemCard from "./ItemCard";

const ItemCarousel = (props) => {
  const { items } = props;

  const itemCards = items && items.map((i) => i !== null && (
    <div key={i.item_code} className="w-11/12">
    <ItemCard product={i} />
    </div>
  ));

  return (
    <div className="mx-12 my-9 px-9">
      <label className="mx-6 px-3 text-2xl font-sans">{props.title}</label>
        <div className="flex flex-nowrap overflow-hidden overflow-x-scroll no-scrollbar">
          {itemCards}
        </div>
    </div>
  );
};

export default ItemCarousel;
