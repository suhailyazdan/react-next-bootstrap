import Image from 'next/image'

const CompletedProjects = () => {

  const aminitiesImages = [
    {imgUrl: "images/aminities01.jpg"},
    {imgUrl: "images/aminities02.jpg"},
    {imgUrl: "images/aminities03.jpg"},
    {imgUrl: "images/aminities04.jpg"},
    {imgUrl: "images/aminities05.jpg"}
  ]

  const cmpImages = [
    {imgUrl: "images/cmp01.jpg"},
    {imgUrl: "images/cmp02.jpg"},
    {imgUrl: "images/cmp03.jpg"},
    {imgUrl: "images/cmp04.jpg"},
    {imgUrl: "images/cmp05.jpg"}
  ]

  return (
    <>
      <div className="container">
        <div className='bg-pattern-grey rounded-3 my-4 p-4 p-md-5 h-100 fontColor__red'>
          <div className="row">
            <div className="col-12 col-md-5">
              <h4>Aminities</h4>
              <hr />

              <div className="mt-2">
                <ul className="list-group list-group-flush">
                  <li className='list-group-item bg-transparent py-3'>
                    <div className="row g-0">
                      <div className="col-4 col-lg-2">
                        <div className='d-flex align-items-center h-100'>
                          <div className="g-Box">
                            <Image
                              src={`/${aminitiesImages[0].imgUrl}`}
                              layout='fill'
                              alt="First slide"
                              objectFit='cover'
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-8 col-md-12 col-lg-10">
                        <p className='ms-3 ms-md-0 ms-lg-3 mt-0 mt-md-2 mt-lg-0 d-flex align-items-center h-100'>
                          Live healthy and breathe pure everyday with a nature trail of 2.5km amidst 16500+ indigenous trees as your neighbors.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className='list-group-item bg-transparent py-3'>
                    <div className="row g-0">
                      <div className="col-4 col-lg-2">
                        <div className='d-flex align-items-center h-100'>
                          <div className="g-Box">
                            <Image
                              src={`/${aminitiesImages[1].imgUrl}`}
                              layout='fill'
                              alt="First slide"
                              objectFit='cover'
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-8 col-md-12 col-lg-10">
                        <p className='ms-3 ms-md-0 ms-lg-3 mt-0 mt-md-2 mt-lg-0 d-flex align-items-center h-100'>
                          Beautifully integrated with nature are a plenty of outdoor sporting amenities like Basketball court, Beach volleyball court, cricket pitch and many more to help to unwind, relax and rejuvenate.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className='list-group-item bg-transparent py-3'>
                    <div className="row g-0">
                      <div className="col-4 col-lg-2">
                        <div className='d-flex align-items-center h-100'>
                          <div className="g-Box">
                            <Image
                              src={`/${aminitiesImages[2].imgUrl}`}
                              layout='fill'
                              alt="First slide"
                              objectFit='cover'
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-8 col-md-12 col-lg-10">
                        <p className='ms-3 ms-md-0 ms-lg-3 mt-0 mt-md-2 mt-lg-0 d-flex align-items-center h-100'>
                          Enjoy the serene sunrises, fresh air, rustling of leaves and chirping of birds as you take your routine morning walks.
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className='list-group-item bg-transparent py-3'>
                    <div className="row g-0">
                      <div className="col-4 col-lg-2">
                        <div className='d-flex align-items-center h-100'>
                          <div className="g-Box">
                            <Image
                              src={`/${aminitiesImages[3].imgUrl}`}
                              layout='fill'
                              alt="First slide"
                              objectFit='cover'
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-8 col-md-12 col-lg-10">
                        <p className='ms-3 ms-md-0 ms-lg-3 mt-0 mt-md-2 mt-lg-0 d-flex align-items-center h-100'>
                          Gymnasium, Swimming Pool, Kid&apos;s Pool, Steam and Sauna
                        </p>
                      </div>
                    </div>
                  </li>

                  <li className='list-group-item bg-transparent py-3'>
                    <div className="row g-0">
                      <div className="col-4 col-lg-2">
                        <div className='d-flex align-items-center h-100'>
                          <div className="g-Box">
                            <Image
                              src={`/${aminitiesImages[4].imgUrl}`}
                              layout='fill'
                              alt="First slide"
                              objectFit='cover'
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-8 col-md-12 col-lg-10">
                        <p className='ms-3 ms-md-0 ms-lg-3 mt-0 mt-md-2 mt-lg-0 d-flex align-items-center h-100'>
                          Stay healthy with food having much richer nutrients from our Organic Farm.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-7">
              <h4>Completed Projects</h4>
              <hr />
              <div className='row'>
                <div className='col-12 col-lg-6'>
                  <div className="card bg-secondary border-radius shadow my-3" >
                    <div className='mx-4 mt-4 mb-2'>
                      <div className="g-Box02">
                        <Image
                          src={`/${cmpImages[0].imgUrl}`}
                          layout='fill'
                          alt="First slide"
                          objectFit='cover'
                        />
                      </div>
                    </div>

                    <div className="card-body mx-2 mb-3">
                      <h5 className="card-title">Kalpa Phase I</h5>

                      <p className="card-text">This unique development is in a vibrant location of Bangalore, with every kind of indoor &amp; outdoor sports.</p>
                      <a href="#" className="btn btn-primary">See Details</a>
                    </div>
                  </div>
                </div>

                <div className='col-12 col-lg-6'>
                  <div className="card bg-secondary border-radius shadow my-3" >
                    <div className='mx-4 mt-4 mb-2'>
                      <div className="g-Box02">
                        <Image
                          src={`/${cmpImages[1].imgUrl}`}
                          layout='fill'
                          alt="First slide"
                          objectFit='cover'
                        />
                      </div>
                    </div>

                    <div className="card-body mx-2 mb-3">
                      <h5 className="card-title">Kalpa Pearl Valley</h5>
                      <p className="card-text">This unique development is in a vibrant location of Bangalore, with every kind of indoor &amp; outdoor sports.</p>
                      <a href="#" className="btn btn-primary">See Details</a>
                    </div>
                  </div>
                </div>

                <div className='col-12 col-lg-6'>
                  <div className="card bg-secondary border-radius shadow my-3" >
                    <div className='mx-4 mt-4 mb-2'>
                      <div className="g-Box02">
                        <Image
                          src={`/${cmpImages[2].imgUrl}`}
                          layout='fill'
                          alt="First slide"
                          objectFit='cover'
                        />
                      </div>
                    </div>

                    <div className="card-body mx-2 mb-3">
                      <h5 className="card-title">Kalpa Layout Phase III</h5>
                      <p className="card-text">This unique development is in a vibrant location of Bangalore, with every kind of indoor &amp; outdoor sports.</p>
                      <a href="#" className="btn btn-primary">See Details</a>
                    </div>
                  </div>
                </div>

                <div className='col-12 col-lg-6'>
                  <div className="card bg-secondary border-radius shadow my-3" >
                    <div className='mx-4 mt-4 mb-2'>
                      <div className="g-Box02">
                        <Image
                          src={`/${cmpImages[3].imgUrl}`}
                          layout='fill'
                          alt="First slide"
                          objectFit='cover'
                        />
                      </div>
                    </div>

                    <div className="card-body mx-2 mb-3">
                      <h5 className="card-title">Kalpa New Project</h5>
                      <p className="card-text">This unique development is in a vibrant location of Bangalore, with every kind of indoor &amp; outdoor sports.</p>
                      <a href="#" className="btn btn-primary">See Details</a>
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