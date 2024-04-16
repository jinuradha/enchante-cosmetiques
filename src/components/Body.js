import { useEffect, useState } from "react";
import BottomSection from "./BottomSection";
import BannerCarousel from "./BannerCarousel";
import ItemCarousel from "./ItemCarousel";
import OffersSection from "./OffersSection";
import TopCategories from "./TopCategories";
import AIChatBot from "./AIChatBot";
import { useSelector } from "react-redux";
import Header from "./Header";
import HeaderCategory from "./HeaderCategory";

const Body = () => {
  const [onRadarItems, setOnRadarItems] = useState([]);
  const [bestsellerItems, setbestsellerItems] = useState([]);
  const [wishlistOffer, setWishlistOffer] = useState([]);
  const [images, setImages] = useState([]);
  const gptSlice = useSelector((store) => store.gptSlice);

  useEffect(() => {
    fetchOnRadar();
    fetchBestSellerItems();
    fetchWishlistData();
  }, []);

  const fetchOnRadar = async () => {
    const data = await fetch(
      "https://www.tirabeauty.com/ext/algolia/application/api/v1.0/collections/makeup-featured-brands/items?filters=false&page_size=10"
    );
    const jsonData = await data.json();
    setOnRadarItems(jsonData.items);
  };

  const fetchBestSellerItems = async () => {
    const itemData = await fetch(
      "https://www.tirabeauty.com/ext/algolia/application/api/v1.0/collections/hp-bestsellers/items?filters=false&page_size=10"
    );
    const json = await itemData.json();
    setbestsellerItems(json.items);
  };

  const fetchWishlistData = async () => {
    const data = await fetch(
      "https://www.tirabeauty.com/ext/dynamic-yield/application/api/v1.0/variations?tags=homepage&page=homepage"
    );
    const json = await data.json();
    setWishlistOffer(json.data[7].items);
    console.log(json.data);
    setImages(json.data[6].items);
  };

  const title = ["Bestseller", "On Our Radar"];
  return !gptSlice.chatWithBot ? (
    <div>
      <Header />
      <HeaderCategory />
      <BannerCarousel images={images} />
      <TopCategories />
      {title.map(
        (i) =>
          (i = "Bestseller" ? (
            <ItemCarousel key={i} title={i} items={bestsellerItems} />
          ) : (
            <ItemCarousel key={i} title={i} items={onRadarItems} />
          ))
      )}
      <OffersSection wishlistOffer={wishlistOffer} />
      <BottomSection />
    </div>
  ) : (
    <div>
      <Header />
      <AIChatBot />
    </div>
  );
};

export default Body;
