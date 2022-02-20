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
                    <div style={{width:"100%", height:"400px", position:"relative"}}>
                      <Image
                        src={`/${image.imgUrl}`}
                        layout='responsive'
                        height = {85}
                        width = {400}
                        alt="First slide"
                        objectFit='contain'
                      />  
                    </div>

                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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