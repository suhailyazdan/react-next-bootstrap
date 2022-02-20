import {useState} from "react"
import Image from 'next/image'
import { scImages } from "../../../public/staticData";

const Scroller = () => {

  const [delay, setDelay] = useState(0);

  const imgDetails = scImages.map((obj, i, array) => {
    array[i].delay = array[i-1] ? array[i-1].delay + 3.33 : 0
    return obj  
  })

  // useEffect(() => {
  //   console.log("imageArray:", imgDetails)
  // }, [])

  // const imgDetails = [
  //   {
  //     imgUrl:"/images/feature-image-01.jpg",
  //     delay: "0s",
  //   },

  //   {
  //     imgUrl:"/images/feature-image-03.jpg",
  //     delay: "3.3s",
  //   },

  //   {
  //     imgUrl:"/images/feature-image-04.jpg",
  //     delay: "6.6s",
  //   },

  //   {
  //     imgUrl:"/images/prj-cmpltd-06.jpg",
  //     delay: "9.9s",
  //   },

  //   {
  //     imgUrl:"/images/prj-cmpltd-07.jpg",
  //     delay: "13.2s",
  //   },

  //   {
  //     imgUrl:"/images/prj-cmpltd-08.jpg",
  //     delay: "16.5s",
  //   }
  // ]

  return (
    <div className="scroller container-fluid mt-4 py-4">
      <div className="imagesWrapper">
        {imgDetails.map((image, key) => (
          <div className="imageBox mx-3" key={key} style={{animationDelay: `${image.delay}s`}}>
            <div style={{width:"100%", height:"100%", position:"relative"}}>
              <Image 
                src={`/${image.imgUrl}`}
                alt="scroller image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Scroller;