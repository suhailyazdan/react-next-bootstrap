import Image from 'next/image'
import { ongImages } from '../../public/staticData';

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
                          src={`/${ongImages[0].imgUrl}`}
                          layout='fill'
                          alt="First slide"
                          objectFit='cover'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='col-12 col-lg-7'>
                    <div className="card-body mb-0 mb-md-3 h-100 mx-2 mx-lg-0 d-flex flex-column align-items-center align-items-lg-start justify-content-center">
                      <h5 className="card-title">Kalpa Green Park</h5>
                      <p className="card-text text-center text-lg-start">Boasts of fully grown gardens, entertainment decks &amp; spacious pools, gym, spa etc.</p>
                      <a href="#" className="btn btn-primary">Project Details</a>
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
                          src={`/${ongImages[1].imgUrl}`}
                          layout='fill'
                          alt="First slide"
                          objectFit='cover'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='col-12 col-lg-7'>
                  <div className="card-body mb-0 mb-md-3 h-100 mx-2 mx-lg-0 d-flex flex-column align-items-center align-items-lg-start justify-content-center">
                      <h5 className="card-title">Kalpa Residential</h5>
                      <p className="card-text text-center text-lg-start">Boasts of fully grown gardens, entertainment decks &amp; spacious pools, gym, spa etc.</p>
                      <a href="#" className="btn btn-primary">Project Details</a>
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
                      <h5 className="card-title">Beach Valley Homes</h5>
                      <p className="card-text text-center text-lg-end">Boasts of fully grown gardens, entertainment decks &amp; spacious pools, gym, spa etc.</p>
                      <a href="#" className="btn btn-primary">Project Details</a>
                    </div>
                  </div>

                  <div className='col-12 col-lg-5'>
                    <div className='mx-4 mb-4 mt-lg-4'>
                      <div className="g-Box">
                        <Image
                          src={`/${ongImages[2].imgUrl}`}
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
                      <h5 className="card-title">Golden Orchid</h5>
                      <p className="card-text text-center text-lg-end">Boasts of fully grown gardens, entertainment decks &amp; spacious pools, gym, spa etc.</p>
                      <a href="#" className="btn btn-primary">Project Details</a>
                    </div>
                  </div>

                  <div className='col-12 col-lg-5'>
                    <div className='mx-4 mb-4 mt-lg-4'>
                      <div className="g-Box">
                        <Image
                          src={`/${ongImages[3].imgUrl}`}
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
                          src={`/${ongImages[4].imgUrl}`}
                          layout='fill'
                          alt="First slide"
                          objectFit='cover'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='col-12 col-lg-7'>
                    <div className="card-body mb-0 mb-md-3 h-100 mx-2 mx-lg-0 d-flex flex-column align-items-center align-items-lg-start justify-content-center">
                      <h5 className="card-title">Ultra Luxury Apartents</h5>
                      <p className="card-text text-center text-lg-start">Boasts of fully grown gardens, entertainment decks &amp; spacious pools, gym, spa etc.</p>
                      <a href="#" className="btn btn-primary">Project Details</a>
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
                          src={`/${ongImages[5].imgUrl}`}
                          layout='fill'
                          alt="First slide"
                          objectFit='cover'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='col-12 col-lg-7'>
                    <div className="card-body mb-0 mb-md-3 h-100 mx-2 mx-lg-0 d-flex flex-column align-items-center align-items-lg-start justify-content-center">
                      <h5 className="card-title">Kalpa Estate Club</h5>
                      <p className="card-text text-center text-lg-start">Boasts of fully grown gardens, entertainment decks &amp; spacious pools, gym, spa etc.</p>
                      <a href="#" className="btn btn-primary">Project Details</a>
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