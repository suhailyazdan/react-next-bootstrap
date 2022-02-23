import Carousel from 'react-bootstrap/Carousel'
import Image from 'next/image'
import { bnrImages } from '../../../../public/staticData';

const Banner = () => {
  return (
    <>
      <div>
        <Carousel fade>
            
              {
                bnrImages.map((image, i) => (
                  <Carousel.Item key={i}>
                    <div className='bnrImgWrapper'>
                      <Image
                        src={`/${image.imgUrl}`}
                        layout='fill'
                        alt="First slide"
                        objectFit='cover'
                      />  
                    </div>

                    <Carousel.Caption >
                      <h3 style={{textShadow: "0px 0px 10px rgba(0, 0, 0, 1)"}}>Where Luxury Meets Location</h3>
                      <p style={{textShadow: "0px 0px 3px rgba(0, 0, 0, 1)"}}>Happiness inspired by unlimited luxury. Own your dreams with luxury and Savings</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                ))
              }



            {/* <Carousel.Item>
              <div style={{width:"100%", height:"400px", position:"relative"}}>
                <Image
                  src="/images/bannerImage02.jpg"
                  layout='fill'
                  alt="First slide"
                  objectFit='contain'
                />
              </div>

              <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div style={{width:"100%", height:"400px", position:"relative"}}>
                <Image
                  src="/images/bannerImage03.jpg"
                  layout='fill'
                  alt="First slide"
                  objectFit='contain'
                />
              </div>

              <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
      </div>
    </>
  );
}
 
export default Banner;