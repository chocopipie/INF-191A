import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Axios from 'axios'

const ComboSearchForm = () => {
    const [dataAccountID, setDataAccountID] = useState('');
    const [season, setSeason] = useState('');
    const [comboCode, setComboCode] = useState('');
    const [eventCode, setEventCode] = useState('');
    const [formData, setFormData] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [fetchingData, setFetchingData] = useState(false); // New state to track data fetching

    useEffect(() => {
        const fetchData = async () => {
            try {
                let endpoint = "";
                let params = {};

                setFetchingData(true); // Set fetchingData to true when fetching starts

                setFormData([]);

                // replace with correct url after creating REST endpoints on backend code
                if (dataAccountID && season && comboCode && eventCode) {
                    endpoint = "https://65def0bcff5e305f32a0eb34.mockapi.io/searchAll";
                    params = { dataAccountID, season, comboCode, eventCode };
                } else if (dataAccountID && season && comboCode) {
                    endpoint = "url/searchByDataAccountSeasonCombo";
                    params = { dataAccountID, season, comboCode };
                } else if (dataAccountID && season && eventCode) {
                    endpoint = "url/searchByDataAccountSeasonEvent";
                    params = { dataAccountID, season, eventCode };
                } else if (dataAccountID && season) {
                    endpoint = "url/searchByDataAccountSeason";
                    params = { dataAccountID, season };
                } else {
                    // handle invalid input
                    return;
                }

                const response = await Axios.get(endpoint, { params });
                if (response.status === 404) {
                    setFormData([]);
                } else {
                    setFormData(response.data);
                }

            } catch (error) {
                console.error(error);
            } finally {
                // Simulate a delay of 1 second before setting fetchingData to false
                setTimeout(() => {
                    setFetchingData(false); // Set fetchingData to false when fetching ends
                }, 200);
            }
        };

        if (formSubmitted) {
            // Call the fetchData function only when formSubmitted is true
            fetchData();
            // Reset formSubmitted to false after fetching data
            setFormSubmitted(false);
        }
    }, [formSubmitted]);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        setFormSubmitted(true);
    };

    return (
    <Container style={{ maxWidth: '400px' }}>
        <div className="formTitle">Event Combo Search</div>
        <Form className="searchForm" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="dataAccountID">
                <Form.Label>Data Account ID</Form.Label>
                <Form.Control type="text" value={dataAccountID} onChange={(e) => setDataAccountID(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="season">
                <Form.Label>Season</Form.Label>
                <Form.Control type="text" value={season} onChange={(e) => setSeason(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="comboCode">
                <Form.Label>Combo Code</Form.Label>
                <Form.Control type="text" value={comboCode} onChange={(e) => setComboCode(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="eventCode">
                <Form.Label>Event Code</Form.Label>
                <Form.Control type="text" value={eventCode} onChange={(e) => setEventCode(e.target.value)}/>
            </Form.Group>
            <Button className="mt-3" variant="primary" type="submit">
                SEARCH
            </Button>
        </Form>

            {/* Show loading message only when data is being fetched */}
            {fetchingData && <p>Loading...</p>}

            {/*The below code is only for testing if input data is correct. Those data will be used as query later*/}
            {formData && !fetchingData && (
                <div className="mt-3">
                    <h4>Form Inputs: {formData.length}</h4>
                    {formData.length > 0 ? (
                        formData.map((data, index) => (
                            <div key={index}>
                                <p>Data Account ID: {data.dataAccountID}</p>
                                <p>Season: {data.season}</p>
                                <p>Combo Code: {data.comboCode}</p>
                                <p>Event Code: {data.eventCode}</p>
                            </div>
                        ))
                    ) : (
                        <p>No result found</p>
                    )}
                </div>
            )}
        

    </Container>
    );
}
 
export default ComboSearchForm;
