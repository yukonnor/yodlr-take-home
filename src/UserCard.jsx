import Card from "react-bootstrap/Card";

function UserCard({ user }) {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Body>
                <Card.Title>
                    {user.firstName} {user.lastName}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">User ID: {user.id}</Card.Subtitle>
                <Card.Text>
                    <b>Email:</b> {user.email}
                </Card.Text>
                <Card.Text>
                    <b>State:</b> {user.state}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default UserCard;
