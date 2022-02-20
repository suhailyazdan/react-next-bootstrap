import { Telephone, Envelope } from 'react-bootstrap-icons';

const LocationMap = () => {
  return (
    <div className='fontColor__red bg-secondary rounded-3 p-5 h-100'>
      <h4>Location</h4>
      <hr />

      <div className='row mt-3'>
        <div className="col-6">
          <div style={{position:"relative", textAlign:"right", height:"458px", width:"100%"}}>
            <div style={{overflow:"hidden", background:"none !important", height:"458px", width:"100%"}}>
              <iframe width="100%" height="458" id="gmap_canvas" src="https://maps.google.com/maps?q=mg%20road&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </div>
          </div>
        </div>

        <div className='col-6'>
          <address>
            <h5>Office :</h5>
            No. 19 &amp; 20, 2nd Floor,<br/>
            Horamavu Ring Road Junction,<br/>
            Horamavu Main Road,<br/>
            Opp. to Living walls Apartments,<br/>
            Bangalore - 560043<br/>
            <Envelope /> : sales@sankalpadevelopers.com<br />
            <Telephone /> : +91 - 99163 78353, 080 - 4969 5666/00
          </address>

          <address className="mt-4">
            <h5>Site Office :</h5>
            SANKALPA ASHIRVAAD,<br/>
            Sy. No. 7, Kalkari,<br/>
            K R Puram Hobli,<br/>
            Ward No. 26, Bangalore - 560042<br/>
            Ph : 88674 05691, 98867 26945<br/>
          </address>
        </div>
      </div>
    </div>
  );
}
 
export default LocationMap;