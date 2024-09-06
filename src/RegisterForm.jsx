import { useState } from "react";
import { useNavigate } from "react-router-dom";
import YodlrApi from "./services/yodlrApi";

// react-boostrap components
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";

function RegisterForm() {
    const [validated, setValidated] = useState(false);
    const [error, setError] = useState();
    const navigate = useNavigate();

    /* registerUser to create a user from Signup form
    /  userData is: { firstName, lastName, email } */

    async function registerUser(userData) {
        try {
            let response = await YodlrApi.register(userData);
            console.log("User registered successfully:", response);
            return response;
        } catch (error) {
            console.error("Error registering user:", error);
            // would throw error here that could be displayed to the user
            throw error;
        }
    }

    /** Upon form submission, validate inputs and send input data to API. */

    const handleSubmit = async (event) => {
        console.log("Form submitted...");
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        // event.preventDefault();
        setValidated(true);

        // Get form data
        const formData = new FormData(form);
        const userData = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
        };

        console.log("Form submitted:", userData);

        try {
            const response = await registerUser(userData);

            // Based on response, navigate home or show error
            if (response && response.id) {
                navigate("/");
            } else {
                setError(response.message || "An unknown error occurred.");
            }
        } catch (error) {
            setError("An error occurred during registration.");
        }
    };

    return (
        <Card>
            <Card.Body>
                <h3>Sign Up</h3>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    {error ? (
                        <Alert variant="danger">
                            {Array.isArray(error) ? (
                                error.map((e) => <p key={e}>{e}</p>)
                            ) : (
                                <p>{error}</p>
                            )}
                        </Alert>
                    ) : null}
                    <Form.Group as={Col} md="6" controlId="formFirstName" className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            name="firstName"
                        />

                        <Form.Control.Feedback type="invalid">
                            Please provide your first name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="formLastName" className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                            name="lastName"
                        />

                        <Form.Control.Feedback type="invalid">
                            Please provide your last name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="formEmail" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                required
                                type="email"
                                placeholder="yodlr@example.com"
                                name="email"
                            />
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
                    <Col md="6">
                        <Button type="submit">Sign Up</Button>
                    </Col>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default RegisterForm;
