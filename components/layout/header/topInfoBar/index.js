import React from 'react'
import Container from 'react-bootstrap/Container'
import { Telephone, Envelope } from 'react-bootstrap-icons';
import Image from 'next/image'

// import logo from '../../../../public/images/logo.png';
import Link from 'next/link';



const TopInfoBar = () => {
  return (
    <>
      <div className="infoBar">
            <Container>
                <div className="row">
                    <div className="col-12 col-xl-9">
                        <div className='infoBoxWrapper'>
                            <div className="d-flex align-items-center infoBox">
                                <div className="roundIcon">
                                    <Telephone />
                                </div>

                                <div className="ms-2 me-4">
                                    : +91 87654333300, 080 26356476
                                </div>
                            </div>
                        
                            <div className="d-flex align-items-center infoBox">
                                <div className="roundIcon">
                                    <Envelope />
                                </div>

                                <div className="mx-2">
                                    : sales@kalpadevelopers.com
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-none d-xl-block col-xl-3">
                        <div className="logoWrapper">
                            <div className="logoBox p-3">
                                <Link href="/">
                                    <a><Image src={`/images/logo.png`} width={129} height={49} alt="kd-logo" /></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
          </div>  
    </>
  );
}
 
export default TopInfoBar;