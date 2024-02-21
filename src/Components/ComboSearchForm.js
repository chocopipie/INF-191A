import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const ComboSearchForm = () => {
    const [dataAcountID, setDataAccountID] = useState('');
    const [season, setSeason] = useState('');
    const [comboCode, setComboCode] = useState('');
    const [eventCode, setEventCode] = useState('');
    const [formData, setFormData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        // Logic to display the form inputs
        const formData = {
            dataAcountID,
            season,
            comboCode,
            eventCode
        };

        // will be replaced with method to query data
        setFormData(formData);
    };

    return (
    <Container style={{ maxWidth: '400px' }}>
        <div className="formTitle">Event Combo Search</div>
        <Form className="searchForm" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="dataAccountID">
                <Form.Label>Data Account ID</Form.Label>
                <Form.Control type="text" value={dataAcountID} onChange={(e) => setDataAccountID(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="season">
                <Form.Label>Season</Form.Label>
                <Form.Control type="text" value={season} onChange={(e) => setSeason(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="comboCode">
                <Form.Label>Combo Code</Form.Label>
                <Form.Control type="text" value={comboCode} onChange={(e) => setComboCode(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="eventCode">
                <Form.Label>Event Code</Form.Label>
                <Form.Control type="text" value={eventCode} onChange={(e) => setEventCode(e.target.value)}/>
            </Form.Group>
            <Button className="mt-3" variant="primary" type="submit">
                SEARCH
            </Button>
        </Form>

        {/*The below code is only for testing if input data is correct. Those data will be used as query later*/}
        {formData && (
                <div className="mt-3">
                    <h4>Form Inputs:</h4>
                    <p>Data Account ID: {formData.dataAcountID}</p>
                    <p>Season: {formData.season}</p>
                    <p>Combo Code: {formData.comboCode}</p>
                    <p>Event Code: {formData.eventCode}</p>
                </div>
            )}
    </Container>
    );
}
 
export default ComboSearchForm;