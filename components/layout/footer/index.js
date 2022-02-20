const Footer = () => {
  return (
    <div className="footer mt-4 py-5">
      <div className="container">
        <div className="row g-0">
          <div className="col-6">
            <div className="footerContent">
              <ul className="footerList">
                <li>
                  <strong>Property : </strong>
                  <a href="#" className="footerLink mx-2">Residential</a>|
                  <a href="#" className="footerLink mx-2">Retail</a>|
                  <a href="#" className="footerLink mx-2">Offices</a>|
                  <a href="#" className="footerLink mx-2">Hospitality</a>|
                  <a href="#" className="footerLink mx-2">Education</a>
                </li>

                <li>
                  <strong>About Kalpa :</strong> 
                  <a href="#" className="footerLink mx-2">Kalpa</a>|
                  <a href="#" className="footerLink mx-2">Media</a>|
                  <a href="#" className="footerLink mx-2">Careers</a>|
                  <a href="#" className="footerLink mx-2">Milestones</a>|
                  <a href="#" className="footerLink mx-2">Contact Us</a>
                </li>

                <li>
                  <strong>Useful Links :</strong> 
                  <a href="#" className="footerLink mx-2">Privacy Policy</a>|
                  <a href="#" className="footerLink mx-2">Site map</a>|
                  <a href="#" className="footerLink mx-2">Feedback Form</a>|
                  <a href="#" className="footerLink mx-2">Newsletter</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-6">
            <div className="copyContent">
              © Copyright 2014 Kalpa. All Rights Reserved
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}
 
export default Footer;