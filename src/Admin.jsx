import { useState, useEffect } from "react";
import Users from "./Users";

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
                    <Nav variant="underline" className="flex-column">
                        <Nav.Item>
                            <Nav.Link
                                onClick={() => handleNavClick("Home")}
                                active={activeContent === "Home"}
                                class="fw-bold"
                            >
                                Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                onClick={() => handleNavClick("Users")}
                                active={activeContent === "Users"}
                            >
                                Users
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                onClick={() => handleNavClick("Settings")}
                                active={activeContent === "Settings"}
                            >
                                Settings
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col xs={12} sm={10} className="main-content">
                    <div className="mt-3">
                        {activeContent === "Home" && <div>Placeholder Home Content</div>}
                        {activeContent === "Users" && <Users />}
                        {activeContent === "Settings" && <div>Placeholder Settings Content</div>}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Admin;
