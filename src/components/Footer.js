import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaTwitter, FaMapMarkerAlt } from "react-icons/fa";
import sslogo from "../assests/image/sslogo.png";  

function Footer() {
  return (
    
      <Container fluid className="footer-container " style={{ backgroundColor: "#46a679", color: "white", padding: "20px" }}>
        <Row>
          <Col className="text-center">
            <img src={sslogo} alt="Logo" style={{ width: "150px" }} />
            <h3>ABOUT US</h3>
            <p>
              Serving yummy Indian, Italian, and Chinese fast food delicacies in
              a breathtakingly gorgeous ambience! We offer party decorations to
              make your special moments extra special!
            </p>
            <p>Indoor Sitting | Outdoor Sitting | Takeaway</p>
            <h2>Average Cost</h2>
            <p>INR 400 for two people (approx.)</p>
          </Col>
          </Row>
            <Row>
          <Col className="text-center">
            <h2>OPENING HOURS</h2>
            <p>
              12:00 PM - 11:00 PM <br />
              Happily Serving You Everyday!!
            </p>
          </Col>
          </Row>
          <hr />
        <Row>
          <Col className="text-center">
            <h2>CONTACT US</h2>
            <p>
              <FaMapMarkerAlt className="px-1 fs-6" /> Khandwa Road (Indore)
              <br />
              Near By Swami Narayan Mandir
            </p>
            <h2>FOLLOW US</h2>
            <p>
              <FaInstagram className="mx-2 fs-1" /> <FaTwitter className="mx-2 fs-1" />
            </p>
          </Col>
          </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p>&copy; 2024 Shiv Sagar Food Villa</p>
            <p>
              <strong>Proudly Made by Student of Coding Sharks</strong>
            </p>
          </Col>
        </Row>
      </Container>
   
  );
}

export default Footer;
