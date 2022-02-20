import EnquiryForm from '../../page-components/home/enquiryForm'
import LocationMap from '../../components/map'

const ContactUs = () => {
  return (
    <div className="container">
      <div className='rounded-3 my-4 p-5 h-100 fontColor__red'>
        <h4>Completed Projects</h4>
        <hr />

        <div className='row mt-5'>
          <div className='col-4'>
            <EnquiryForm />
          </div>

          <div className='col-8'>
            <LocationMap />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default ContactUs;