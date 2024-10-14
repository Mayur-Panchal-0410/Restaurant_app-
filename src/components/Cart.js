// import { useState, useEffect } from 'react';
// import { Container, Card, Button, Row, Col } from 'react-bootstrap';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { IconButton, Badge } from '@mui/material'; 
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 

// function Cart() {
//   const [show, setShow] = useState(false);
//   const [items, setItems] = useState([]);
//   const [totalUniqueItems, setTotalUniqueItems] = useState(0); // Track the number of unique items

//   const handleClose = () => setShow(false);

//   const loadCartData = () => {
//     const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
//     setItems(storedItems);
//     setTotalUniqueItems(storedItems.length); // Update the number of unique items (not quantity)
//   };

//   const somefn = () => {
//     setShow(true);
//     loadCartData();
//   };

//   const increment = (item) => {
//     const updatedItems = items.map((i) => {
//       if (i.id === item.id) {
//         i.count += 1;
//         storeProductInLocalStorage(i);
//       }
//       return i;
//     });
//     setItems(updatedItems);
//     dispatchEvent();
//   };

//   const decrement = (item) => {
//     const updatedItems = items
//       .map((i) => {
//         if (i.id === item.id) {
//           i.count -= 1;
//           if (i.count === 0) {
//             removeProductFromLocalStorage(item);
//             return null;
//           } else {
//             storeProductInLocalStorage(i);
//           }
//         }
//         return i;
//       })
//       .filter((i) => i !== null);
    
//     setItems(updatedItems);
//     dispatchEvent();
//   };

//   const storeProductInLocalStorage = (item) => {
//     let storedItems = JSON.parse(localStorage.getItem('cart')) || [];
//     const itemIndex = storedItems.findIndex((storedItem) => storedItem.id === item.id);
//     if (itemIndex !== -1) {
//       storedItems[itemIndex].count = item.count;
//     } else {
//       storedItems.push(item);
//     }
//     localStorage.setItem('cart', JSON.stringify(storedItems));
//     dispatchEvent();
//   };

//   const removeProductFromLocalStorage = (item) => {
//     let storedItems = JSON.parse(localStorage.getItem('cart')) || [];
//     const updatedItems = storedItems.filter((storedItem) => storedItem.id !== item.id);
//     localStorage.setItem('cart', JSON.stringify(updatedItems));
//     dispatchEvent();
//   };

//   const dispatchEvent = () => {
//     const event = new Event('cartUpdated');
//     window.dispatchEvent(event);
//   };

//   useEffect(() => {
//     const handleCartUpdate = () => {
//       loadCartData();
//     };

//     window.addEventListener('cartUpdated', handleCartUpdate);

//     // Load cart data when component mounts
//     loadCartData();

//     return () => {
//       window.removeEventListener('cartUpdated', handleCartUpdate);
//     };
//   }, []);

//   return (
//     <>
//       <IconButton aria-label="cart" onClick={somefn}>
//         <Badge badgeContent={totalUniqueItems} color="primary">
//           <ShoppingCartIcon />
//         </Badge>
//       </IconButton>
//       <Offcanvas show={show} onHide={handleClose} placement="start" style={{ width: '50vw' }}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>CART</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <Container>
//             <Row>
//               {items.length > 0 ? (
//                 items.map((item, index) => (
//                   <Col key={index} md={4} className="mb-4">
//                     <Card>
//                       <Card.Img
//                         variant="top"
//                         src={item.image}
//                         alt={item.name}
//                         style={{ width: '100%', height: '150px', objectFit: 'cover' }}
//                       />
//                       <Card.Body>
//                         <Card.Title>{item.name}</Card.Title>
//                         <Card.Text>
//                           <strong>Price: </strong> ${item.price * item.count}
//                           <br />
//                           <strong>Quantity: </strong> {item.count}
//                         </Card.Text>
//                         <div className="d-flex justify-content-between align-items-center">
//                           <Button variant="danger" onClick={() => decrement(item)}>-</Button>
//                           <span>{item.count}</span>
//                           <Button variant="success" onClick={() => increment(item)}>+</Button>
//                         </div>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 ))
//               ) : (
//                 <p>No items in cart</p>
//               )}
//             </Row>
//             <Row>
//               <Button variant="outline-warning">Place Order</Button>
//             </Row>
//           </Container>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }

// export default Cart;










import { useState, useEffect } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IconButton, Badge } from '@mui/material'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 

function Cart() {
  const [show, setShow] = useState(false);
  const [items, setItems] = useState([]);
  const [totalUniqueItems, setTotalUniqueItems] = useState(0); // Track the number of unique items

  const handleClose = () => setShow(false);

  const loadCartData = () => {
    const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
    setItems(storedItems);
    setTotalUniqueItems(storedItems.length); // Update the number of unique items (not quantity)
  };

  const somefn = () => {
    setShow(true);
    loadCartData();
  };

  const increment = (item) => {
    const updatedItems = items.map((i) => {
      if (i.id === item.id) {
        i.count += 1;
        storeProductInLocalStorage(i);
      }
      return i;
    });
    setItems(updatedItems);
    dispatchEvent();
  };

  const decrement = (item) => {
    const updatedItems = items
      .map((i) => {
        if (i.id === item.id) {
          i.count -= 1;
          if (i.count === 0) {
            removeProductFromLocalStorage(item);
            return null;
          } else {
            storeProductInLocalStorage(i);
          }
        }
        return i;
      })
      .filter((i) => i !== null);
    
    setItems(updatedItems);
    dispatchEvent();
  };

  const storeProductInLocalStorage = (item) => {
    let storedItems = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = storedItems.findIndex((storedItem) => storedItem.id === item.id);
    if (itemIndex !== -1) {
      storedItems[itemIndex].count = item.count;
    } else {
      storedItems.push(item);
    }
    localStorage.setItem('cart', JSON.stringify(storedItems));
    dispatchEvent();
  };

  const removeProductFromLocalStorage = (item) => {
    let storedItems = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedItems = storedItems.filter((storedItem) => storedItem.id !== item.id);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
    dispatchEvent();
  };

  const dispatchEvent = () => {
    const event = new Event('cartUpdated');
    window.dispatchEvent(event);
  };

  useEffect(() => {
    const handleCartUpdate = () => {
      loadCartData();
    };

    window.addEventListener('cartUpdated', handleCartUpdate);

    // Load cart data when component mounts
    loadCartData();

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  return (
    <>
      <IconButton aria-label="cart" onClick={somefn}>
        <Badge badgeContent={totalUniqueItems} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Offcanvas show={show} onHide={handleClose} placement="start" style={{ width: '50vw' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <Row>
              {items.length > 0 ? (
                items.map((item, index) => (
                  <Col key={index} md={4} className="mb-4">
                    <Card>
                      <Card.Img
                        variant="top"
                        src={item.image}
                        alt={item.name}
                        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                      />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                          <strong>Price: </strong> ${item.price * item.count}
                          <br />
                          <strong>Quantity: </strong> {item.count}
                        </Card.Text>
                        <div className="d-flex justify-content-between align-items-center">
                          <Button variant="danger" onClick={() => decrement(item)}>-</Button>
                          <span>{item.count}</span>
                          <Button variant="success" onClick={() => increment(item)}>+</Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <p>No items in cart</p>
              )}
            </Row>
            <Row>
              {items.length > 0 && (
                <Button variant="outline-warning">Place Order</Button>
              )}
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
