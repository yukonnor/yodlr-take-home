import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

// Route Components
import NavBar from "./NavBar";
import Home from "./Home";
import Register from "./Register";
import Admin from "./Admin";

function App() {
    const [user, setUser] = useLocalStorage("user", {});

    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar user={user} setUser={setUser} />
                <main>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/register" element={<Register />} />
                        <Route exact path="/admin" element={<Admin />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
