import { useState } from "react";

// react-boostrap components
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function RegisterForm() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Card>
            <Card.Body>
                <h3>Sign Up</h3>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group as={Col} md="6" controlId="validationCustom01" className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control required type="text" placeholder="First name" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide your first name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02" className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control required type="text" placeholder="Last name" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Please provide your last name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustomEmail" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control type="email" placeholder="yodlr@example.com" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email address.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button type="submit">Sign Up</Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default RegisterForm;
