import { Col, Container, Row, } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import insta from "../assests/bannerimg/insta.jpg"
function Gallery() {
    return (
        <>
            <Container className="text-center">
                <Row>
                    <h1 >Gallery</h1>
                    <hr />
                </Row>
                <Row>
                    <Col>
                        <Button variant="outline-secondary">Ambience</Button>{' '}
                    </Col>
                    <Col>
                        <Button variant="outline-secondary">Food</Button>{' '}
                    </Col>
                    <Col>
                        <Button variant="outline-secondary">Drink</Button>{' '}
                    </Col>
                </Row>
            </Container>
            <br/>
            <Container >
                <Row>
                <img src={insta} alt="Instagram" className="img-fluid" />
                </Row>
            </Container>

        </>
    )
}
export default Gallery;