import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function UserSearch({ handleSearch }) {
    return (
        <div className="UserSearch">
            <Form onSubmit={handleSearch}>
                <Row className="mb-3">
                    <Col>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Control type="text" placeholder="Seach name..." name="name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formStateSelect">
                            <Form.Select aria-label="User state select" name="state">
                                <option value="">Select User State</option>
                                <option value="active">Active</option>
                                <option value="pending">Pending</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">
                            Search
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default UserSearch;
