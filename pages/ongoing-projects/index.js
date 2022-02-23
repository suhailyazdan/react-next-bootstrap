import Image from 'next/image'
import { galleryImages } from '../../public/staticData'

const OngoingProjects = () => {
  return (
    <>
      <div className="container">
        <div className='bg-pattern-grey rounded-3 my-4 p-5 h-100 fontColor__red'>
          <h4>Completed Projects</h4>
          <hr />
          
          <div className='row'>
            <div className='col-12 col-sm-6'>
              <div className="card bg-secondary border-radius shadow my-3" >
                <div className='row g-0'>
                  <div className='col-12 col-lg-5'>
                    <div className='mx-4 mt-4 mb-lg-4'>
                      <div className="g-Box">
                        <Image
                          src={`/${galleryImages[0].imgUrls[0]}`}
                          layout='fill'
                          alt="First slide"
                          objectFit='cover'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='col-12 col-lg-7'>
                    <div className="card-body mb-0 mb-md-3 h-100 mx-2 mx-lg-0 d-flex flex-column align-items-center align-items-lg-start justify-content-center">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text text-center text-lg-start">Some quick example text to build on the card  the bulk of the card&apos;s content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 col-sm-6'>
              <div className="card bg-secondary border-radius shadow my-3" >
                <div className='row g-0'>
                  <div className='col-12 col-lg-5'>
                    <div className='mx-4 mt-4 mb-lg-4'>
                      <div className="g-Box">
                        <Image
                          src={`/${galleryImages[0].imgUrls[0]}`}
                          layout='fill'
                          alt="First slide"
                          objectFit='cover'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='col-12 col-lg-7'>
                  <div className="card-body mb-0 mb-md-3 h-100 mx-2 mx-lg-0 d-flex flex-column align-items-center align-items-lg-start justify-content-center">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text text-center text-lg-start">Some quick example text to build on the card  the bulk of the card&apos;s content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 col-sm-6'>
              <div className="card bg-secondary border-radius shadow my-3" >
                <div className='row g-0'>
                  <div className='col-12 col-lg-7'>
                    <div className="card-body mb-0 mb-md-3 h-100 mx-2 mx-lg-0 d-flex flex-column align-items-center align-items-lg-end justify-content-center">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text text-center text-lg-end">Some quick example text to build on the card  the bulk of the card&apos;s content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>

                  <div className='col-12 col-lg-5'>
                    <div className='mx-4 mb-4 mt-lg-4'>
                      <div className="g-Box">
                        <Image
                          src={`/${galleryImages[0].imgUrls[0]}`}
                          layout='fill'
                          alt="First slide"
                          objectFit='cover'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 col-sm-6'>
              <div className="card bg-secondary border-radius shadow my-3" >
                <div className='row g-0'>
                  <div className='col-12 col-lg-7'>
                    <div className="card-body mb-0 mb-md-3 h-100 mx-2 mx-lg-0 d-flex flex-column align-items-center align-items-lg-end justify-content-center">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text text-center text-lg-end">Some quick example text to build on the card  the bulk of the card&apos;s content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>

                  <div className='col-12 col-lg-5'>
                    <div className='mx-4 mb-4 mt-lg-4'>
                      <div className="g-Box">
                        <Image
                          src={`/${galleryImages[0].imgUrls[0]}`}
                          layout='fill'
                          alt="First slide"
                          objectFit='cover'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 col-sm-6'>
              <div className="card bg-secondary border-radius shadow my-3" >
                <div className='row g-0'>
                  <div className='col-12 col-lg-5'>
                    <div className='mx-4 mt-4 mb-lg-4'>
                      <div className="g-Box">
                        <Image
                          src={`/${galleryImages[0].imgUrls[0]}`}
                          layout='fill'
                          alt="First slide"
                          objectFit='cover'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='col-12 col-lg-7'>
                    <div className="card-body mb-0 mb-md-3 h-100 mx-2 mx-lg-0 d-flex flex-column align-items-center align-items-lg-start justify-content-center">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text text-center text-lg-start">Some quick example text to build on the card  the bulk of the card&apos;s content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 col-sm-6'>
              <div className="card bg-secondary border-radius shadow my-3" >
                <div className='row g-0'>
                  <div className='col-12 col-lg-5'>
                    <div className='mx-4 mt-4 mb-lg-4'>
                      <div className="g-Box">
                        <Image
                          src={`/${galleryImages[0].imgUrls[0]}`}
                          layout='fill'
                          alt="First slide"
                          objectFit='cover'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='col-12 col-lg-7'>
                    <div className="card-body mb-0 mb-md-3 h-100 mx-2 mx-lg-0 d-flex flex-column align-items-center align-items-lg-start justify-content-center">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text text-center text-lg-start">Some quick example text to build on the card  the bulk of the card&apos;s content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default OngoingProjects;