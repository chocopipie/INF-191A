import ComboSearchForm from './Components/ComboSearchForm';
import Navbar from './Layouts/PageNavbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
      <Row className="mt-5">
          <h1>Event Rotation Viewer</h1>
        </Row>
        <Row className="mt-5">
          <Col className="mx-5"><ComboSearchForm /></Col>
          <Col><h1>detail page here</h1></Col>
        </Row>
        <Row className="mt-5">
          <h1>Result table here</h1>
        </Row>
      </Container>
    </div>
  );
}

export default App;
