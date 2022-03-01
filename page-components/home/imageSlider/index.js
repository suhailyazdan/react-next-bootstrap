import {useState, useRef, createRef, useEffect} from "react"
import Image from "next/image"
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";

const ImageSlider = () => {
  const sldrImages = [
    {imgUrl:"images/sldrImage01.jpg"},
    {imgUrl:"images/sldrImage02.jpg"},
    {imgUrl:"images/sldrImage03.jpg"},
    {imgUrl:"images/sldrImage04.jpg"},
    {imgUrl:"images/sldrImage05.jpg"},
    {imgUrl:"images/sldrImage06.jpg"},
    {imgUrl:"images/sldrImage07.jpg"},
    {imgUrl:"images/sldrImage08.jpg"},
    {imgUrl:"images/sldrImage09.jpg"},
    {imgUrl:"images/sldrImage10.jpg"},
    {imgUrl:"images/sldrImage11.jpg"},
  ]



  const [scrollValue, setScrollValue] = useState(0)

  const scrollStrip = useRef("scrollStrip");

  useEffect(() => {
    scrollStrip.current.scrollLeft = `${scrollValue}`;
  }, [scrollValue])

  const prev = () => {
    if(scrollValue > 0) {
      setScrollValue(scrollValue-50)
    }
  }

  const next = () => {
    if(scrollValue < scrollStrip.current.scrollLeftMax) {
      setScrollValue(scrollValue+50)
    }
  }

  return (
    <div>
      <div className='container slider bg-secondary mt-4'>
        <button className='leftArrow' onClick={prev}>
          <BsChevronCompactLeft /> 
        </button>

        <button className='rightArrow' onClick={next}>
          <BsChevronCompactRight />
        </button>

        <div className='scrollStrip' ref={scrollStrip}>
          {sldrImages.map((i, key) => (
            <div key={key} className="imageBox m-3 shadow" style={{width:"200px", height:"85%", position:"relative"}}>
              <Image
                src={`/${i.imgUrl}`}
                layout='fill'
                alt="First slide"
                objectFit='cover'
              />
            </div>                      
          ))}
        </div>
      </div>
    </div>
  );
}
 
export default ImageSlider;