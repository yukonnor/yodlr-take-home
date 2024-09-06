import { useState, useEffect } from "react";
import UserList from "./UserList";

// react-bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

function Admin() {
    const [activeContent, setActiveContent] = useState("Users");

    /** handleNavClick sets which content to show in main content area based
     * on which nav link is selected */

    const handleNavClick = (content) => {
        setActiveContent(content);
    };

    return (
        <Container fluid>
            <Row>
                <Col xs={12} sm={2} className="bg-light sidebar">
                    <Nav className="flex-column">
                        <Nav.Link
                            onClick={() => handleNavClick("Home")}
                            active={activeContent === "Home"}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => handleNavClick("Users")}
                            active={activeContent === "Users"}
                        >
                            Users
                        </Nav.Link>
                        <Nav.Link
                            onClick={() => handleNavClick("Settings")}
                            active={activeContent === "Settings"}
                        >
                            Settings
                        </Nav.Link>
                    </Nav>
                </Col>
                <Col xs={12} sm={10} className="main-content">
                    <div className="mt-3">
                        {activeContent === "Home" && <div>Placeholder Home Content</div>}
                        {activeContent === "Users" && <UserList />}
                        {activeContent === "Settings" && <div>Placeholder Settings Content</div>}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Admin;
