import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Question from "./Question";
import "./App.css";
import { useState, useEffect } from "react";

function getRandomQuote(quotes) {
  return quotes[Math.floor(Math.random() * quotes.length)];
}




function BasicExample() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);

  function getNewQuote() {
    setQuote(getRandomQuote(quotes));
  }
  return (
    <>
    <Navbar expand="lg" className="pb-4 pt-4 mb-3 navbg">
      <Container>
        <Navbar.Brand href="#home" style={{ paddingRight: 40,fontSize: 20, }}>Nature</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " >
          <Nav className="me-auto ">
            <Nav.Link href="#home" className='nalink' style={{ paddingRight: 50,  }} >Home</Nav.Link>
            <Nav.Link href="#link" className='nalink' style={{ paddingRight: 50, }}>Link</Nav.Link>
            <Nav.Link href="#contact" className='nalink' style={{ paddingRight: 50, }}>Contact</Nav.Link>
            <Nav.Link href="#contact" className='nalink' style={{ paddingRight: 50, }}>About</Nav.Link>
            <Nav.Link href="#contact" className='nalink' style={{ paddingRight: 50, }}>Blog</Nav.Link>
        
          </Nav>
          <Nav className="ml-auto ">
            <Nav.Link href="#contact" className='nalink' style={{ paddingRight: 50, }}>LogIn/SignIn</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<Carousel>
<Carousel.Item interval={1000}>
  <img
    className="d-block w-100 higt"
    src="https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    alt="First slide"
    
  />
  <Carousel.Caption>
    <h3>First slide label</h3>
    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item interval={500}>
  <img
    className="d-block w-100 higt"
    src="https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    alt="Second slide"
  />
  <Carousel.Caption>
    <h3>Second slide label</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100 higt"
    src="https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    alt="Third slide"
  />
  <Carousel.Caption>
    <h3>Third slide label</h3>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    </p>
  </Carousel.Caption>
</Carousel.Item>
</Carousel>

<Container className="mt-5">
      
      <Row>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"  className='cardbutton'> Add To Cart </Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"  className='cardbutton'> Add To Cart </Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"  className='cardbutton'> Add To Cart </Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='cardbutton'> Add To Cart </Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
<Container className='mt-5'>
    <Card>
      <Card.Header className='quotebg'>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">

          <p>
          <span>“</span>
          {quote?.text}
          </p>
          <footer className="blockquote-footer">
          <i>- {quote?.author}</i>
          </footer>
          <button onClick={getNewQuote} className='quotebutton'>New Quote</button>
        
        </blockquote>
      </Card.Body>
    </Card>
    </Container>
    <Container className='mt-5'>
      <Row>
        <Col sm={8}>
        <Row>
          <Col>
        <Card className="bg-light text-white">
      <Card.Img className='gridimg' src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="Card image" />
      <Card.ImgOverlay className="overtext" >
        <Card.Title >Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text 
        </Card.Text>
        <Button variant="primary"  className='gridbutton'> Buy Now </Button>
      </Card.ImgOverlay>
    </Card>
    </Col>
      </Row>
      <Row>
        <Col>
      <Card className="bg-light text-white mt-4">
      <Card.Img className='gridimg' src=" https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Card.ImgOverlay className="overtext">
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text 
        </Card.Text>
        <Button variant="primary"  className='gridbutton'> Buy Now </Button>
      </Card.ImgOverlay >
    </Card>
    </Col>
      </Row>
        </Col>
        <Col sm={4}>
        <Row>
          <Col>
        <Card className="bg-light text-white">
      <Card.Img src="https://images.unsplash.com/photo-1592424470741-e4e20f0a783e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYW50JTIwbnVyc2VyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Card image" />
      <Card.ImgOverlay className="overtext">
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text
        </Card.Text>
        <Button variant="primary"  className='gridbutton'> Buy Now </Button>
      </Card.ImgOverlay>
    </Card>
    </Col>
      </Row>

      <Row>
       <Col> 
      <Card className="bg-light text-white mt-3">
      <Card.Img src="https://media.istockphoto.com/id/1413563516/photo/sunflowers.jpg?s=170667a&w=0&k=20&c=9-g1yZ4_0NLjabVMN-G8Qn18mK4FsH6Z1yIaA6QySR4=" alt="Card image" />
      <Card.ImgOverlay className="overtext">
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text 
        </Card.Text>
        <Button variant="primary"  className='gridbutton'> Buy Now </Button>
      </Card.ImgOverlay>
    </Card>
    </Col>
      </Row>
      <Row>
        <Col>
      <Card className="bg-light text-white mt-3">
      <Card.Img src="https://plus.unsplash.com/premium_photo-1663088906334-d926cb2e434d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZsb3dlciUyMG51cnNlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="Card image" />
      <Card.ImgOverlay className="overtext">
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text 
        </Card.Text>
        <Button variant="primary"  className='gridbutton'> Buy Now </Button>
      </Card.ImgOverlay>
    </Card>
    </Col>
      </Row>
        </Col>
      </Row>
    </Container>
    <Container className='mt-5'>
    <h1 >SEE OUR WORK</h1>
    <video controls className='videolength mt-3'>
        <source src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4" type="video/mp4" />
        <source src="https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      </Container>
<Container className='mt-5'>
  <h1>READ THE BLOG</h1>
    <div className="grid-container mt-4">
      <div className="grid-item">
      <Card>
            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2019/05/16/20/15/online-4208112_960_720.jpg" />
            <Card.Body>
              <Card.Title>This is a longer card with supporting text below as a natural</Card.Title>
              <Card.Text className='blogread'>
               <a href="#">Read Now &gt;&gt;</a>
               
              </Card.Text>
            </Card.Body>
          </Card>

      
      </div>
      <div className="grid-item">
        <Card>
            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2017/08/08/00/27/home-2609600__340.jpg" />
            <Card.Body>
              <Card.Title>This is a longer card with supporting text below as a natural</Card.Title>
              <Card.Text className='blogread'>
              <a href="#">Read Now &gt;&gt;</a>
              </Card.Text>
            </Card.Body>
          </Card>
</div>
      <div className="grid-item">
      <Card>
            <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/05/04/18/06/flowerpot-1372452__340.jpg" />
            <Card.Body>
              <Card.Title>This is a longer card with supporting text below as a natural</Card.Title>
              <Card.Text className='blogread'>
              <a href="#">Read Now &gt;&gt; </a>
              </Card.Text>
            </Card.Body>
          </Card>

      </div>
    </div>
    </Container>
    <Container className="mt-5 ">
    <h2 className="mb-3">Why Plants Are Important</h2>
      <ul className='content'>
        <li>Aesthetic appeal: Plants can add beauty and life to any space, whether it's an office, home, or outdoor garden. They come in various shapes, sizes, and colors, making them versatile and appealing.</li>
        <li>Health benefits: Plants can improve air quality by absorbing pollutants and releasing oxygen. They can also reduce stress levels, boost mood, and improve mental health.</li>
        <li>Sustainability: Keeping plants can be an eco-friendly option, as they can help reduce carbon emissions, reduce waste, and support biodiversity.</li>
        <li>Food production: Growing plants like vegetables and fruits can provide a source of fresh, healthy produce that is free from harmful pesticides and chemicals.</li>
        <li>Education: Keeping plants can provide a great opportunity for learning about biology, botany, and the natural world.</li>
      </ul>
    </Container>
    <Container className="faqbox mt-5">
      
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="questions mt-2">
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      </div>
      </Container>
      <Container className="mt-5 ">
      <footer>
      <div className="container quotebg pt-5 ">
        <div className="row">
          <div className="col-md-3">
            <h5>About Us</h5>
            <p>We are a company that specializes in creating amazing React applications.</p>
          </div>
          <div className="col-md-3">
            <h5>Links</h5>
            <ul className="list-unstyled footlit" >
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled footadd">
              <li>123 Main Street</li>
              <li>Suite 100</li>
              <li>New York, NY 10001</li>
              <li>555-123-4567</li>
              <li>info@mycompany.com</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled footadd">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-3 footerbg">
        <p>&copy; 2023 My Company. All rights reserved.</p>
      </div>
    </footer>
    </Container>
</>
  );
}

export default BasicExample;
const questions = [
  {
    id: 1,
    title: "Is this a good product?",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  },
  {
    id: 2,
    title: "How much does it cost?",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  },
  {
    id: 3,
    title: "When can I get it?",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  }
];

// import Question from "./Question";
// import "./App.css";
// import { useState, useEffect } from "react";
// import Menu from "./Menu";
// import Video from "./Video";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import 'bootstrap/dist/css/bootstrap.min.css';

   

// const API_URL = "https://api.github.com";




// const videos = {
//   deer:
//     "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
//   snail:
//     "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
//   cat:
//     "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
//   spider:
//     "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4"
// };

// const videoNames = Object.keys(videos);

// async function fetchResults(query) {
//   try {
//     const response = await fetch(`${API_URL}/search/users?q=${query}`);
//     const json = await response.json();
//     return json.items || [];
//   } catch (e) {
//     throw new Error(e);
//   }
// }

// function getRandomQuote(quotes) {
//   return quotes[Math.floor(Math.random() * quotes.length)];
// }

// const images = [
//   "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
// ];

// export default function App() {
//   const [current, setCurrent] = useState(0);
//   const [quotes, setQuotes] = useState([]);
//   const [quote, setQuote] = useState(null);
//   const [items, setItems] = useState([]);
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
//   const [videoSrc, setVideoSrc] = useState(videos.spider);

//   function onSelectVideo(video) {
//     const videoSrc = videos[video];
//     setVideoSrc(videoSrc);
//   }

//   function onSearchChange(event) {
//     setQuery(event.target.value);
//   }

//   async function onSearchSubmit(event) {
//     event.preventDefault();
//     const results = await fetchResults(query);
//     setResults(results);
//   }

//   function onRemoveItem(itemToRemove) {
//     const newItems = items.filter((item) => {
//       return item !== itemToRemove;
//     });
//     setItems(newItems);
//   }

//   function onSubmit(event) {
//     event.preventDefault();
//     const form = event.target;
//     const input = form.item;
//     const newItems = [...items, input.value];
//     setItems(newItems);
//     form.reset();
//   }

//   useEffect(() => {
//     fetch("https://type.fit/api/quotes")
//       .then((res) => res.json())
//       .then((json) => {
//         setQuotes(json);
//         setQuote(json[0]);
//       });
//   }, []);

//   function getNewQuote() {
//     setQuote(getRandomQuote(quotes));
//   }

//   function nextSlide() {
//     setCurrent(current === images.length - 1 ? 0 : current + 1);
//   }

//   function prevSlide() {
//     setCurrent(current === 0 ? images.length - 1 : current - 1);
//   }

//   return (

   
    
//     <div>
//        <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
      
//        <div className="app">
//       <main className="main">
//         <h2>Project 5: GitHub User Search</h2>
//         <Form
//           onChange={onSearchChange}
//           onSubmit={onSearchSubmit}
//           value={query}
//         />
//         <h3>Results</h3>
//         <div id="results">
//           <div>
//             {results.map((user) => (
//               <User
//                 key={user.login}
//                 avatar={user.avatar_url}
//                 url={user.html_url}
//                 username={user.login}
//               />
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//       <h2>Project 1: Carousel</h2>
//       <div className="slider">
//         <div className="left-arrow" onClick={prevSlide}>
//           ⬅
//         </div>
//         <div className="right-arrow" onClick={nextSlide}>
//           ⮕
//         </div>
//         {images.map(
//           (image, index) =>
//             current === index && (
//               <div key={image} className="slide">
//                 <img src={image} alt="images" />
//               </div>
//             )
//         )}
//       </div>

//       <main className="mainquote">
//       <h1>Project 3: Quote Generator</h1>
//       <section className="quote">
//         <button onClick={getNewQuote}>New Quote</button>
//         <h3>
//           <span>“</span>
//           {quote?.text}
//         </h3>
//         <i>- {quote?.author}</i>
//       </section>
//     </main>

//     <h1>Project 6: Video Player</h1>
//       <Menu onSelectVideo={onSelectVideo} videoValues={videoNames} />
//       <Video videoSrc={videoSrc} />

//     <h1 className="shophead">Project 4: Shopping List</h1>
//       <div className="shopping-list">
//         <h3>Items To Buy</h3>
//         <form onSubmit={onSubmit}>
//           <input
//             type="text"
//             name="item"
//             placeholder="Add a new item"
//             required
//           />
//           <button>Add</button>
//         </form>
//         <ul>
//           {items.map((item, index) => (
//             <Item onRemoveItem={onRemoveItem} key={item + index} item={item} />
//           ))}
//         </ul>
//       </div>

//       <h1>Project 2: FAQ/Accordion</h1>
//       <div className="container1">
//         <h2>Frequently Asked Questions</h2>
//         <div className="questions">
//           {questions.map((question) => (
//             <Question key={question.id} question={question} />
//           ))}
//         </div>
//       </div>
//     </div>

    
//   );
// }
// const questions = [
//   {
//     id: 1,
//     title: "Is this a good product?",
//     info:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
//   },
//   {
//     id: 2,
//     title: "How much does it cost?",
//     info:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
//   },
//   {
//     id: 3,
//     title: "When can I get it?",
//     info:
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
//   }
// ];

// function Item({ item, onRemoveItem }) {
//   return (
//     <li>
//       {item}
//       <button className="delete" onClick={() => onRemoveItem(item)}>
//         x
//       </button>
//     </li>
//   );
// }


// function User({ avatar, url, username }) {
//   return (
//     <div className="user">
//       <img src={avatar} alt="Profile" width="50" height="50" />
//       <a href={url} target="_blank" rel="noopener noreferrer">
//         {username}
//       </a>
//     </div>
//   );
// }

// function Form({ onSubmit, onChange, value }) {
//   return (
//     <form className="search-form" onSubmit={onSubmit}>
//       <input
//         id="search"
//         type="text"
//         placeholder="Enter username or email"
//         onChange={onChange}
//         value={value}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// }

