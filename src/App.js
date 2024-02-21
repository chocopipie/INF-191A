import { useState } from 'react';
import ComboSearchForm from './Components/ComboSearchForm';
import Navbar from './Layouts/PageNavbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EventDetailsPopup from './Components/EventDetailsPopup';

function App() {
  const [modalShow, setModalShow] = useState(false);

  // mock data - for testing event details popup only
  // will be moved to Result detail page after it has been implemented
  const [dataAccountID, setDataAccountID] = useState('386');
  const [season, setSeason] = useState('FALL24');
  const [combo, setCombo] = useState('VB24');
  const [eventStartDate, setEventStartDate] = useState('2024-01-27T20:00:00-08:00');
  const [eventEndDate, setEventEndDate] = useState('2024-01-28T16:00:00Z');
  const [status, setStatus] =useState('IN_PROGRESS');

  return (
    <div className="App">
      <Navbar />
      <Container>
      <Row className="mt-5">
          <h1>Event Rotation Viewer</h1>
      </Row>
      <Row className="mt-5">
        <Col className="me-5" xs={6} md={4}><ComboSearchForm /></Col>
        <Col><h1>Result table here</h1></Col>
      </Row>
      <Row className="mt-5" variant="primary" onClick={() => setModalShow(true)}>
        <Col><button>Test Detail Popup</button></Col>
      </Row>
      <EventDetailsPopup 
        show={modalShow} 
        onHide={() => setModalShow(false)}
        dataAccountID={dataAccountID}
        season={season}
        combo={combo}
        eventStartDate={eventStartDate}
        eventEndDate={eventEndDate}
        status={status}
        />
      </Container>
    </div>
  );
}

export default App;
