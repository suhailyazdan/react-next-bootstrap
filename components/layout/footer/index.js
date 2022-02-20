const Footer = () => {
  return (
    <div className="footer mt-4 py-5">
      <div className="container">
        <div className="row g-0">
          <div className="col-12 col-xl-6">
            <div className="d-flex flex-column">
              <ul className="footerList">
                <li>
                  <div className="d-flex flex-column flex-xl-row align-items-center">
                    <div><strong>Property :</strong></div>

                    <div>
                      <a href="#" className="footerLink mx-2">Residential</a>|
                      <a href="#" className="footerLink mx-2">Retail</a>|
                      <a href="#" className="footerLink mx-2">Offices</a>|
                      <a href="#" className="footerLink mx-2">Hospitality</a>|
                      <a href="#" className="footerLink mx-2">Education</a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="d-flex flex-column flex-xl-row align-items-center">
                    <div><strong>About Kalpa :</strong></div>

                    <div>
                      <a href="#" className="footerLink mx-2">Kalpa</a>|
                      <a href="#" className="footerLink mx-2">Media</a>|
                      <a href="#" className="footerLink mx-2">Careers</a>|
                      <a href="#" className="footerLink mx-2">Milestones</a>|
                      <a href="#" className="footerLink mx-2">Contact Us</a>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="d-flex flex-column flex-xl-row align-items-center">
                    <div><strong>Useful Links :</strong></div>

                    <div>
                      <a href="#" className="footerLink mx-2">Privacy Policy</a>|
                      <a href="#" className="footerLink mx-2">Site map</a>|
                      <a href="#" className="footerLink mx-2">Feedback Form</a>|
                      <a href="#" className="footerLink mx-2">Newsletter</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-xl-6">
            <div className="copyContent mt-3 mt-xl-0">
              © Copyright 2014 Kalpa. All Rights Reserved
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}
 
export default Footer;