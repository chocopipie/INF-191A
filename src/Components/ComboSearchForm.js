import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

const ComboSearchForm = () => {
    return (
    <Container style={{ maxWidth: '400px' }}>
        <div className="formTitle">Event Combo Search</div>
        <Form className="searchForm">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Data Account ID</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Season</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Combo Code</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Event Code</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Button className="mt-3" variant="primary" type="submit">
                SEARCH
            </Button>
        </Form>
    </Container>
    );
}
 
export default ComboSearchForm;