import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import Cart from './Cart';


function Navigationbar(){
  
  const hotelName = "Taj"
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="/img/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            {hotelName}
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end pe-2">
            <Cart/>
      </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigationbar;