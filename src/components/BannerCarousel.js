import { useEffect, useState } from "react"

const BannerCarousel = (props) => {
    const { images } = props
    const imagesArray = []
    const interval = 3000
    const [ activeIndex, setActiveIndex ] = useState(0);

    const previousIndex = () => {
        setActiveIndex((prevIndex) =>
      prevIndex === 0 ? imagesArray.length - 1 : prevIndex - 1
    );
    }

    const nextIndex = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1
    );
    }

    useEffect(()=> {
        const autoplay = setInterval(nextIndex, interval);
        return () => clearInterval(autoplay);
    }, [activeIndex])
    

    return <div className="transition whitespace-nowrap" style={{transform: `transform:(-${activeIndex * 100})`}}>
        {images.map((image) => {
            imagesArray.push(image.image)
        })
    }
    <img className="" src={imagesArray[activeIndex]}/>
    </div>
}

export default BannerCarousel;