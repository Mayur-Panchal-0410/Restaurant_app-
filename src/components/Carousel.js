import Carousel from 'react-bootstrap/Carousel';
import firstimg from '../assests/image/1stcar.jpg'
import secondimg from '../assests/image/2ndcar.jpg'
import thirdimg from '../assests/image/3rdcar.jpg'
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';



// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Caro() {
  return (
    <>
      <Container>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>

      <Container className="mt-2 d-flex justify-content-center">
        <Carousel interval={10000} indicators={false} controls={false}>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={firstimg}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100 img-fluid"
              src={secondimg}
              alt="Second slide"
              style={{ height: '100%' }} // Adjust as needed
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img-fluid"
              src={thirdimg}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>

  );
}

export default Caro;