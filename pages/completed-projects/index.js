import Image from 'next/image'
import { galleryImages } from '../../public/staticData'

const CompletedProjects = () => {
  return (
    <>
      <div className="container">
        <div className='bg-pattern-grey rounded-3 my-4 p-5 h-100 fontColor__red'>
          <div className="row">
            <div className="col-5">
              <h4>Aminities</h4>
              <hr />

              <div className="mt-2">
                <ul className="list-group list-group-flush">
                  <li className='list-group-item bg-transparent py-3'>
                    <div className="row g-0">
                      <div className="col-2">
                        <div className='d-flex align-items-center h-100'>
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

                      <div className="col-10">
                        <p className='ms-3 d-flex align-items-center h-100'>
                          Live healthy and breathe pure everyday with a nature trail of 2.5km amidst 16500+ indigenous trees as your neighbors.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className='list-group-item bg-transparent py-3'>
                    <div className="row g-0">
                      <div className="col-2">
                        <div className='d-flex align-items-center h-100'>
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

                      <div className="col-10">
                        <p className='ms-3 d-flex align-items-center h-100'>
                          Beautifully integrated with nature are a plenty of outdoor sporting amenities like Basketball court, Beach volleyball court, cricket pitch and many more to help to unwind, relax and rejuvenate.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className='list-group-item bg-transparent py-3'>
                    <div className="row g-0">
                      <div className="col-2">
                        <div className='d-flex align-items-center h-100'>
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

                      <div className="col-10">
                        <p className='ms-3 d-flex align-items-center h-100'>
                          Enjoy the serene sunrises, fresh air, rustling of leaves and chirping of birds as you take your routine morning walks.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className='list-group-item bg-transparent py-3'>
                    <div className="row g-0">
                      <div className="col-2">
                        <div className='d-flex align-items-center h-100'>
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

                      <div className="col-10">
                        <p className='ms-3 d-flex align-items-center h-100'>
                          Gymnasium, Swimming Pool, Kid&col;s Pool, Steam and Sauna
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className='list-group-item bg-transparent py-3'>
                  <div className="row g-0">
                      <div className="col-2">
                        <div className='d-flex align-items-center h-100'>
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

                      <div className="col-10">
                        <p className='ms-3 d-flex align-items-center h-100'>
                          Stay healthy with food having much richer nutrients from our Organic Farm.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-7">
              <h4>Completed Projects</h4>
              <hr />
              <div className='row'>
                <div className='col-6'>
                  <div className="card bg-secondary border-radius shadow my-3" >
                    <div className='mx-4 mt-4 mb-2'>
                      <div className="g-Box02">
                        <Image
                          src={`/${galleryImages[0].imgUrls[0]}`}
                          layout='fill'
                          alt="First slide"
                          objectFit='cover'
                        />
                      </div>
                    </div>

                    <div className="card-body mx-2 mb-3">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&col;s content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>

                <div className='col-6'>
                  <div className="card bg-secondary border-radius shadow my-3" >
                    <div className='mx-4 mt-4 mb-2'>
                      <div className="g-Box02">
                        <Image
                          src={`/${galleryImages[0].imgUrls[0]}`}
                          layout='fill'
                          alt="First slide"
                          objectFit='cover'
                        />
                      </div>
                    </div>

                    <div className="card-body mx-2 mb-3">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&col;s content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>

                <div className='col-6'>
                  <div className="card bg-secondary border-radius shadow my-3" >
                    <div className='mx-4 mt-4 mb-2'>
                      <div className="g-Box02">
                        <Image
                          src={`/${galleryImages[0].imgUrls[0]}`}
                          layout='fill'
                          alt="First slide"
                          objectFit='cover'
                        />
                      </div>
                    </div>

                    <div className="card-body mx-2 mb-3">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&col;s content.</p>
                      <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div>

                <div className='col-6'>
                  <div className="card bg-secondary border-radius shadow my-3" >
                    <div className='mx-4 mt-4 mb-2'>
                      <div className="g-Box02">
                        <Image
                          src={`/${galleryImages[0].imgUrls[0]}`}
                          layout='fill'
                          alt="First slide"
                          objectFit='cover'
                        />
                      </div>
                    </div>

                    <div className="card-body mx-2 mb-3">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&col;s content.</p>
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
 
export default CompletedProjects;