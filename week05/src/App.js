import { useState } from "react";
import "./App.css"; // Import the CSS file
import WeatherApp from "./WeatherApp"; // Import WeatherApp Component

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "divine" && password === "1234abc") { // Dummy credentials
            setIsLoggedIn(true);
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div className="app-container">
            {!isLoggedIn ? (
                <div className="login-box">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button type="submit">Login</button>
                    </form>
                </div>
            ) : (
                <WeatherApp />
            )}
        </div>
    );
}

export default App;
