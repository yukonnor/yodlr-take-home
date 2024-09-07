import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function UserCard({ user, toggleUserState }) {
    return (
        <Card style={{ width: "24rem" }}>
            <Card.Body>
                <Card.Title>
                    {user.firstName} {user.lastName}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">User ID: {user.id}</Card.Subtitle>
                <Card.Text>
                    <b>State:</b>{" "}
                    {user.state === "pending" ? (
                        <Badge bg="warning">Pending</Badge>
                    ) : (
                        <Badge bg="success">Active</Badge>
                    )}
                </Card.Text>
                <Card.Text>
                    <b>Email:</b> {user.email}
                </Card.Text>
                <Button variant="primary" onClick={() => toggleUserState(user)}>
                    {user.state === "pending" ? "Activate" : "Set Pending"}
                </Button>
            </Card.Body>
        </Card>
    );
}

export default UserCard;
