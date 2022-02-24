
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import Link from 'next/link';
import { useRouter } from 'next/router';

const MainNavBar = () => {
  const router = useRouter();

  return (
    <>
      <Navbar expand='lg' className='customNav'>
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link href='/' passHref ><Nav.Link className={router.pathname == "/" ? "active" : ""}>HOME</Nav.Link></Link>
            <Link href="/about" passHref><Nav.Link>ABOUT</Nav.Link></Link>
            <Link href="/completed-projects" passHref><Nav.Link>COMPLETED PROJECTS</Nav.Link></Link>
            <Link href="/ongoing-projects"  passHref><Nav.Link>ONGOING PROJECTS</Nav.Link></Link>
            <Link href="/contact-us" passHref><Nav.Link>CONTACT US</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
 
export default MainNavBar;