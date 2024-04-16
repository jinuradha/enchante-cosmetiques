const CategoryCard = (props) => {
    const { categoryName, imgUrl } = props
    return <div className="m-6 p-3 w-64">
        <img className="w-54 h-64 border rounded-lg" src={"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/company/1/applications/62d53777f5ad942d3e505f77/theme/pictures/free/original/" + imgUrl + "?dpr=1"}/>
        <label>{categoryName}</label>
    </div>
}

export default CategoryCard;