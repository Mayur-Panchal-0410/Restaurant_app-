import {Container, Row ,Col} from "react-bootstrap/esm";
import { Card } from "react-bootstrap/esm";
import BeverageImg from '../assests/page1img/Beverage.jpg';
import ChineseStarterImg from '../assests/page1img/Chinese_starter.jpeg';
import IndianMainCourseImg from '../assests/page1img/Indina_main_course.jpg';
import ThaliImg from '../assests/page1img/Thali.webp';
import DessertsImg from '../assests/page1img/desserts.jpg';



function Ourmenu(){

    return(
        <>
        <Container className="text-center">
        <h1>Our Menu</h1>
        <hr />
      </Container>

      <Container className="text-center" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
        <Row xs={2} sm={2} md={4} lg={5} className="g-4 d-flex justify-content-center">
          
          <Col>
            <Card className="h-100">
              <a href="Menupage">
                <Card.Img variant="top" src={BeverageImg} style={{ height: '200px' }} alt="Beverages" />
              </a>
              <Card.Body>
                <a href="Menupage" className="stretched-link">
                  <Card.Title>Beverages</Card.Title>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="h-100">
              <a href="Menupage">
                <Card.Img variant="top" src={ChineseStarterImg} style={{ height: '200px' }} alt="Chinese Starter" />
              </a>
              <Card.Body>
                <a href="Menupage" className="stretched-link">
                  <Card.Title>Chinese & Starter</Card.Title>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="h-100">
              <a href="Menupage">
                <Card.Img variant="top" src={IndianMainCourseImg} style={{ height: '200px' }} alt="Indian Main Course" />
              </a>
              <Card.Body>
                <a href="Menupage" className="stretched-link">
                  <Card.Title>Indian Main Course</Card.Title>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="h-100">
              <a href="Menupage">
                <Card.Img variant="top" src={ThaliImg} style={{ height: '200px' }} alt="Thali" />
              </a>
              <Card.Body>
                <a href="Menupage" className="stretched-link">
                  <Card.Title>Thali</Card.Title>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="h-100">
              <a href="Menupage">
                <Card.Img variant="top" src={DessertsImg} style={{ height: '200px' }} alt="Desserts" />
              </a>
              <Card.Body>
                <a href="Menupage" className="stretched-link">
                  <Card.Title>Desserts</Card.Title>
                </a>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
        </>
    )
}
export default Ourmenu;