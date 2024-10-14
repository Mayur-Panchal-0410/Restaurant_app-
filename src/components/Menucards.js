import React, { useEffect, useState } from 'react';
import { Container, Col, Card, Button, Accordion } from 'react-bootstrap';
import BeverageImg from '../assests/page1img/Beverage.jpg';
import ChineseStarterImg from '../assests/page1img/Chinese_starter.jpeg';
import IndianMainCourseImg from '../assests/page1img/Indina_main_course.jpg';
import ThaliImg from '../assests/page1img/Thali.webp';
import DessertsImg from '../assests/page1img/desserts.jpg';
import './Menucards.css';
import products from './Product';
import CardCustom from './CardCustom';



function Menucards() {
  // State to manage the count for the item
  const [count1, setCount1] = useState({});
  const [counts, setCounts] = useState(Array(products.length).fill(0));
 const [data,setDtaa] =useState([{}])

 
  return (
    <>
      {/* Cards Section */}
      <Container className='asd'>
        <Col>
          <Card>
            <Card.Img variant="top" src={BeverageImg} alt="Beverages" />
            <Card.Body>
              <Card.Title>Beverages</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={ChineseStarterImg} alt="Chinese starter" />
            <Card.Body>
              <Card.Title>Chinese & Starter</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={IndianMainCourseImg} alt="Indian Main Course" />
            <Card.Body>
              <Card.Title>Indian Main Course</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={ThaliImg} alt="Thali" />
            <Card.Body>
              <Card.Title>Thali</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={DessertsImg} alt="Desserts" />
            <Card.Body>
              <Card.Title>Desserts</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Container>
      <br />

      {/* Accordion Section with Counter */}
      <Container>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Pizza</Accordion.Header>
            <Accordion.Body>
              {
                products.map((data)=>{
                  return <CardCustom datas={data} />
                })
              }
         
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}

export default Menucards;


// import React, { useEffect, useState } from 'react';
// import { Container, Col, Card, Accordion, Button } from 'react-bootstrap';
// import BeverageImg from '../assests/page1img/Beverage.jpg';
// import ChineseStarterImg from '../assests/page1img/Chinese_starter.jpeg';
// import IndianMainCourseImg from '../assests/page1img/Indina_main_course.jpg';
// import ThaliImg from '../assests/page1img/Thali.webp';
// import DessertsImg from '../assests/page1img/desserts.jpg';
// import './Menucards.css';
// import CardCustom from './CardCustom';
// import axios from 'axios';

// function Menucards() {
//   const [products, setProducts] = useState([]); // State to hold products data

//   // Fetch product data from the API when the component mounts
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get('http://192.168.1.15:5000/item/data?id=2'); // Replace with your API endpoint
//         setProducts(response.data); // Assuming response.data is an array of products
        
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []); // Empty dependency array means this runs once when the component mounts
  
//   const menu = Object.keys(products.data);
//   return (
//     <>

//     {
//       menu.map(data => {
//         return(
//           <>
//           <Container className='asd'>
//         <Col>
//           <Card>
//             <Card.Img variant="top" src={BeverageImg} alt="Beverages" />
//             <Card.Body>
//               <Card.Title>{data}</Card.Title>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Container>
//           </>
//         )
//       })
//     }
//       {/* Cards Section */}
      
//       <br />

//       {/* Accordion Section with Product Cards */}
//       <Container>
//         <Accordion>
//           <Accordion.Item eventKey="0">
//             <Accordion.Header>Pizza</Accordion.Header>
//             <Accordion.Body>
//               {products.length > 0 ? (
//                 products.map((product) => (
//                   <CardCustom key={product.id} productId={product.id} />
//                 ))
//               ) : (
//                 <p>No products available.</p>
//               )}
//             </Accordion.Body>
//           </Accordion.Item>
//         </Accordion>
//       </Container>
//     </>
//   );
// }

// export default Menucards;
