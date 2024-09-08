import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function UserSearch({ setUsers, getUsers }) {
    // Todo: Make a controlled form for more 'control' (e.g. clear filter functionality);

    /* handleSearch to filter user results on the client side (no API endpoint available) */

    async function handleSearch(event) {
        event.preventDefault();
        const form = event.currentTarget;

        // Get form data
        const formData = new FormData(form);
        const searchValues = {
            name: formData.get("name"),
            state: formData.get("state"),
        };

        console.log(searchValues);

        // Get a fresh set of users from the API to clear out any previos filters
        await getUsers();

        setUsers((prevUsers) => {
            // Filter users
            return prevUsers.filter((user) => {
                // If both name and state are provided, filter by both
                if (searchValues.name && searchValues.state) {
                    return (
                        (user.firstName.toLowerCase().includes(searchValues.name.toLowerCase()) ||
                            user.lastName
                                .toLowerCase()
                                .includes(searchValues.name.toLowerCase())) &&
                        user.state === searchValues.state
                    );
                }

                // Filter by name only
                if (searchValues.name) {
                    return (
                        user.firstName.toLowerCase().includes(searchValues.name.toLowerCase()) ||
                        user.lastName.toLowerCase().includes(searchValues.name.toLowerCase())
                    );
                }

                // Filter by state only
                if (searchValues.state) {
                    return user.state === searchValues.state;
                }

                // If no filters, return all
                return true;
            });
        });
    }

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
