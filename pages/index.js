import FeatureSection from '../page-components/home/featureSection'
import ImageSlider from '../page-components/home/imageSlider'
import KeyFeatures from '../page-components/home/keyFeatures'
import EnquiryForm from '../page-components/home/enquiryForm'
import ImageGallery from '../page-components/home/imageGallery'

export default function Home() {
  return (
    <div>
      <FeatureSection />
      <ImageGallery />
      <ImageSlider />

      <div className='container mt-4 px-0'>
        <div className='row g-4'>
          <div className='col-12 col-md-6'>
            <div className='h-100'>
              <KeyFeatures />
            </div>
          </div>

          <div className='col-12 col-md-6'>
            <div className='h-100'>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
