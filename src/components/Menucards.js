// import React, { useEffect, useState } from 'react';
// import { Container, Col, Card, Button, Accordion } from 'react-bootstrap';
// import BeverageImg from '../assests/page1img/Beverage.jpg';
// import ChineseStarterImg from '../assests/page1img/Chinese_starter.jpeg';
// import IndianMainCourseImg from '../assests/page1img/Indina_main_course.jpg';
// import ThaliImg from '../assests/page1img/Thali.webp';
// import DessertsImg from '../assests/page1img/desserts.jpg';
// import './Menucards.css';
// import products from './Product';
// import CardCustom from './CardCustom';



// function Menucards() {
//   // State to manage the count for the item
//   const [count1, setCount1] = useState({});
//   const [counts, setCounts] = useState(Array(products.length).fill(0));
//  const [data,setDtaa] =useState([{}])


//   return (
//     <>
//       {/* Cards Section */}
//       <Container className='asd'>
//         <Col>
//           <Card>
//             <Card.Img variant="top" src={BeverageImg} alt="Beverages" />
//             <Card.Body>
//               <Card.Title>Beverages</Card.Title>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col>
//           <Card>
//             <Card.Img variant="top" src={ChineseStarterImg} alt="Chinese starter" />
//             <Card.Body>
//               <Card.Title>Chinese & Starter</Card.Title>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col>
//           <Card>
//             <Card.Img variant="top" src={IndianMainCourseImg} alt="Indian Main Course" />
//             <Card.Body>
//               <Card.Title>Indian Main Course</Card.Title>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col>
//           <Card>
//             <Card.Img variant="top" src={ThaliImg} alt="Thali" />
//             <Card.Body>
//               <Card.Title>Thali</Card.Title>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col>
//           <Card>
//             <Card.Img variant="top" src={DessertsImg} alt="Desserts" />
//             <Card.Body>
//               <Card.Title>Desserts</Card.Title>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Container>
//       <br />

//       {/* Accordion Section with Counter */}
//       <Container>
//         <Accordion>
//           <Accordion.Item eventKey="0">
//             <Accordion.Header>Pizza</Accordion.Header>
//             <Accordion.Body>
//               {
//                 products.map((data)=>{
//                   return <CardCustom datas={data} />
//                 })
//               }

//             </Accordion.Body>
//           </Accordion.Item>
//         </Accordion>
//       </Container>
//     </>
//   );
// }

// export default Menucards;



// ------------------niche wla kaam krra 


import React, { useEffect, useState } from 'react';
import { Container, Col, Card, Accordion } from 'react-bootstrap';
import axios from 'axios';
import CardCustom from './CardCustom';

function Menucards() {
  const [products, setProducts] = useState([]); // State to hold fetched products
  const [categories, setCategories] = useState([]); // State to hold menu categories
  const [selectedCategory, setSelectedCategory] = useState(null); // State to track selected category
  const url = `http://localhost:5000/item/data?id=2`;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(url); // Replace with your API endpoint
        setProducts(response.data); // Assuming response.data contains your products data
        setCategories(Object.keys(response.data.data)); // Assuming response.data.data has categories (like Lunch Specials, Dinner Classics)
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); 

  // Handle card click to select a category
  const handleCardClick = (category) => {
    setSelectedCategory(category); // Update the selected category
  };

  return (
    <>
      {/* Dynamic Menu Cards */}
      {categories.length > 0 && categories.map((category, index) => (
        <Container className='asd' key={index} onClick={() => handleCardClick(category)}>
          <Col>
            <Card>
              <Card.Img variant="top" src={`/path/to/image/for/${category}`} alt={category} />
              <Card.Body>
                <Card.Title>{category}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Container>
      ))}

      <br />

      {/* Single Accordion Section */}
      <Container>
        {selectedCategory && (
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>{selectedCategory}</Accordion.Header>
              <Accordion.Body>
                {products.data[selectedCategory]?.length > 0 ? (
                  products.data[selectedCategory].map((product) => (
                    <CardCustom key={product.dish_name} datas={product} /> // Pass product data to CardCustom
                  ))
                ) : (
                  <p>No products available for {selectedCategory}.</p>
                )}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        )}
      </Container>
    </>
  );
}

export default Menucards;
