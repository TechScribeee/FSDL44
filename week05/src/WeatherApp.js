import { useState } from "react";
import "./App.css"; // Import CSS for styling

function WeatherApp() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        if (!city.trim()) {
            setError("Please enter a city name");
            return;
        }

        setLoading(true);
        setError(null);

        const apiKey = "19eab679e710af690daf3a5c00d2da47"; // Replace with your API key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.cod === 200) {
                setWeather(data);
            } else {
                setError("City not found. Please try again.");
                setWeather(null);
            }
        } catch (error) {
            setError("Error fetching weather data. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="weather-box">
            <h2>Weather App</h2>
            <div className="input-container">
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Enter city name"
                />
                <button onClick={fetchWeather} disabled={loading}>
                    {loading ? "Loading..." : "Get Weather"}
                </button>
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {weather && (
                <div>
                    <h3>
                        {weather.name}, {weather.sys.country}
                    </h3>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Weather: {weather.weather[0].description}</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                        alt="Weather icon"
                    />
                </div>
            )}
        </div>
    );
}

export default WeatherApp;
