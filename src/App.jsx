import { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import WeatherCard from "./components/Weather";

function App() {
  const [loading, setLoading] = useState(true);
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [data, setData] = useState("");
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weather, setWeather] = useState("");

  const fetchGeo = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  };

  useEffect(() => {
    fetchGeo();
    console.log("GEO:", lat, long);
    if (lat && long) {
      fetch(
        `${
          import.meta.env.VITE_WEATHER_API_URL
        }/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      )
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setLoading(false);
          setData(result);
          setCity(result.name);
          setTemperature(result.main.temp);
          setWeather(result.weather[0].main);
        });
    }
  }, [lat, long]);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Weather!</h1>
        {loading ? (
          <div>
            <Loader />
            <p>Cargando... Por favor espere</p>
          </div>
        ) : (
          <WeatherCard
            city={city}
            temperature={temperature}
            weather={weather}
          />
        )}
      </div>
    </>
  );
}

export default App;
