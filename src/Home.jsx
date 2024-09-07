import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

function Home() {
    // State and hooks for toast management
    const [showToast, setShowToast] = useState(false);
    const [toastHeader, setToastHeader] = useState("Information");
    const [toastBody, setToastBody] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.state && location.state.message) {
            setShowToast(true);
            setToastBody(location.state.message);
            if (location.state.toastType === "success") setToastHeader("Success");

            // Replace state in history to avoid showing the toast on refresh
            navigate(".", { replace: true, state: null });
        }
    }, [location.state, navigate]);

    return (
        <div>
            <ToastContainer className="p-3" position="top-end" style={{ zIndex: 1 }}>
                <Toast
                    onClose={() => setShowToast(false)}
                    show={showToast}
                    bg={location.state?.toastType || "info"}
                    delay={3000}
                    autohide
                >
                    <Toast.Header>
                        <strong className="me-auto">{toastHeader}</strong>
                    </Toast.Header>
                    <Toast.Body>{toastBody}</Toast.Body>
                </Toast>
            </ToastContainer>

            <h1>yodlr</h1>
            <p className="lead">At yodlr we yodl.</p>
        </div>
    );
}

export default Home;
