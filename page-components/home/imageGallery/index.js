import {useEffect, useState} from 'react'
import Image from 'next/image'
import { galleryImages } from '../../../public/staticData'

const ImageGallery = () => {

  const [imagesArray, setImagesArray] = useState(galleryImages[0])

  const selectImages = (btn) => {
    if (btn.id === "marketBtn") {
      setImagesArray(galleryImages[0])
    }else if (btn.id === "gymBtn") {
      setImagesArray(galleryImages[1])
    }else if (btn.id === "hallBtn") {
      setImagesArray(galleryImages[2])
    }else if (btn.id === "securityBtn") {
      setImagesArray(galleryImages[3])
    }
  }

  console.log(imagesArray.imgUrls)

  // useEffect(() => {
  //   console.log('gallery images - ', imagesArray)
  // }, [])

  return (
    <>
      <div className='container imageGallery bg-pattern-grey mt-4 p-5'>
        <h2 className='mb-2 text-center fontColor__red'>Photo Gallery</h2>
        <hr className='redLine__h mb-2' />
        
        <div className='d-flex flex-wrap justify-content-center w-100 my-4'>
          <button type="button" id="marketBtn"
            className="btn btn-primary btnRounded mx-2 my-2"
            onClick={(e) => selectImages(e.target)}
          >Nearby Market</button>

          <button type="button" id="gymBtn" 
            className="btn btn-primary btnRounded mx-2 my-2"
            onClick={(e) => selectImages(e.target)}
          >Gym / Swimming</button>

          <button type="button" id="hallBtn" 
            className="btn btn-primary btnRounded mx-2 my-2"
            onClick={(e) => selectImages(e.target)}
          >Community Hall</button>

          <button type="button" id="securityBtn" 
            className="btn btn-primary btnRounded mx-2 my-2"
            onClick={(e) => selectImages(e.target)}
          >Security</button>
        </div>

        {imagesArray &&
          <div className='row g-4'>
            <div className='col-6'>
              <div className='g-imageBox'>
                <Image
                  src={`/${imagesArray.imgUrls[0]}`}
                  layout='fill'
                  alt="First slide"
                  objectFit='cover'
                />
              </div>
            </div>


            <div className='col-6'>
              <div className='row gy-4'>
                {
                  [1, 2, 3, 4].map((n, i) => (
                    <div className='col-6' key={i}>
                      <div className='g-imageBox'>
                        <Image
                          src={`/${imagesArray.imgUrls[n]}`}
                          layout='fill'
                          alt="First slide"
                          objectFit='cover'
                        />
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
}
 
export default ImageGallery;