import EnquiryForm from '../../page-components/home/enquiryForm'
import LocationMap from '../../components/map'

const ContactUs = () => {
  return (
    <div className="container">
      <div className='py-4 py-md-5 h-100 fontColor__red'>
        <h4>Completed Projects</h4>
        <hr />

        <div className='row mt-4'>
          <div className='col-12 col-md-4'>
            <EnquiryForm />
          </div>

          <div className='col-12 col-md-8'>
            <div className="mt-4 mt-md-0">
              <LocationMap  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default ContactUs;