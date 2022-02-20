import Image from 'next/image'
import { galleryImages } from '../../public/staticData'

const OngoingProjects = () => {
  return (
    <>
      <div className="container">
        <div className='bg-pattern-grey rounded-3 my-4 p-5 h-100 fontColor__red'>
          <div className="row">
            <div className="col-12">
              <h4>Completed Projects</h4>
              <hr />
              <div className='row'>
                <div className='col-6'>
                  <div className="card bg-secondary border-radius shadow my-3" >
                    <div className='row g-0'>
                      <div className='col-md-5'>
                        <div className='m-4'>
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

                      <div className='col-md-7'>
                        <div className="card-body my-3">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                          <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-6'>
                  <div className="card bg-secondary border-radius shadow my-3" >
                    <div className='row g-0'>
                      <div className='col-md-5'>
                        <div className='m-4'>
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

                      <div className='col-md-7'>
                        <div className="card-body my-3">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                          <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-6'>
                  <div className="card bg-secondary border-radius shadow my-3" >
                    <div className='row g-0'>
                      <div className='col-md-7'>
                        <div className="card-body my-3 d-flex flex-column align-items-end">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text text-end">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                          <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>

                      <div className='col-md-5'>
                        <div className='m-4'>
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

                <div className='col-6'>
                  <div className="card bg-secondary border-radius shadow my-3" >
                    <div className='row g-0'>
                      <div className='col-md-7'>
                        <div className="card-body my-3 d-flex flex-column align-items-end">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text text-end">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                          <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>

                      <div className='col-md-5'>
                        <div className='m-4'>
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

                <div className='col-6'>
                  <div className="card bg-secondary border-radius shadow my-3" >
                    <div className='row g-0'>
                      <div className='col-md-5'>
                        <div className='m-4'>
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

                      <div className='col-md-7'>
                        <div className="card-body my-3">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                          <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-6'>
                  <div className="card bg-secondary border-radius shadow my-3" >
                    <div className='row g-0'>
                      <div className='col-md-5'>
                        <div className='m-4'>
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

                      <div className='col-md-7'>
                        <div className="card-body my-3">
                          <h5 className="card-title">Card title</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                          <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                      </div>
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