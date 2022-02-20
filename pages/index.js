import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Button from 'react-bootstrap/Button'
import FeatureSection from '../page-components/home/featureSection'
import ImageSlider from '../page-components/home/imageSlider'
import KeyFeatures from '../page-components/home/keyFeatures'
import EnquiryForm from '../page-components/home/enquiryForm'
import ImageGallery from '../page-components/home/imageGallery'

export default function Home() {
  return (
    <div>
      <FeatureSection />
      <ImageSlider />

      <div className='container mt-4 px-0'>
        <div className='row g-0'>
          <div className='col-6'>
            <div className='me-3 h-100'>
              <KeyFeatures />
            </div>
          </div>

          <div className='col-6'>
            <div className='ms-3 h-100'>
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>

      <ImageGallery />
    </div>
  )
}
