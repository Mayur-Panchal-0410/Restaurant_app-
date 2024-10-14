import { Container, Row } from "react-bootstrap";
import insta from "../assests/bannerimg/insta.jpg"
import fb from "../assests/bannerimg/fb.jpg"
import mcd from "../assests/bannerimg/MCD.png"

function Banner() {
    return (
        <>
            <Container fluid className="d-flex justify-content-center flex-column">
                <Row>
                    <img src={mcd} alt="Instagram" className="img-fluid" />
                </Row>
                <br/>
                <Row>
                    <img src={fb} alt="Facebook" className="img-fluid" />
                </Row>
            </Container>
        </>
    )
}
export default Banner;