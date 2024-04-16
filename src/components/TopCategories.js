import CategoryCard from "./CategoryCard"
import 'react-multi-carousel/lib/styles.css';

const TopCategories = () => {
    const categoryType = {
        makeup: ["Make-Up", "theme-image-1709272435610.jpeg"],
        skincare: ["Skin-Care", "theme-image-1709272458199.jpeg"],
        hair: ["Hair", "theme-image-1709272482333.jpeg"],
        fragrance: ["Fragrance", "theme-image-1709272506361.jpeg"],
        bathnbody: ["Bath & Body", "theme-image-1709272527246.jpeg"],
        men: ["Men", "theme-image-1709272548934.jpeg"]
    }

    const categoryCards = Object.entries(categoryType).map((c) => {
        return (<div key={c}><CategoryCard categoryName={c[1][0]} imgUrl={c[1][1]} /> </div>)})

    return <div className="m-12 p-9">
        <label className="mx-6 px-3 text-2xl font-sans">Top Categories</label>
            <div className="flex flex-nowrap overflow-hidden overflow-x-scroll no-scrollbar">
            {categoryCards}
            </div>
    </div>
}

export default TopCategories;