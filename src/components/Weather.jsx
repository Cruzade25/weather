import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt, //Thunderstorm
  faCloudRain, // Drizzle //Rain
  faSmog, // Haze Mist
  faSnowman, //Snow
  faSun, //Clear
  faCloud, //Clouds
} from "@fortawesome/free-solid-svg-icons";

const WeatherCard = ({ city, temperature, weather }) => {
  let weatherIcon = null;

  switch (weather) {
    case "Rain":
      weatherIcon = (
        <FontAwesomeIcon icon={faCloudRain} size="lg" color="#fff" />
      );
      break;
    case "Clouds":
      weatherIcon = <FontAwesomeIcon icon={faCloud} size="lg" color="#fff" />;
      break;
    case "Thunderstorm":
      weatherIcon = <FontAwesomeIcon icon={faBolt} size="lg" color="#fff" />;
      break;
    case "Drizzle":
      weatherIcon = (
        <FontAwesomeIcon icon={faCloudRain} size="lg" color="#fff" />
      );
      break;
    case "Haze":
      weatherIcon = <FontAwesomeIcon icon={faSmog} size="lg" color="#fff" />;
      break;
    case "Mist":
      weatherIcon = <FontAwesomeIcon icon={faSmog} size="lg" color="#fff" />;
      break;
    case "Snow":
      weatherIcon = <FontAwesomeIcon icon={faSnowman} size="lg" color="#fff" />;
      break;
    case "Clear":
      weatherIcon = <FontAwesomeIcon icon={faSun} size="lg" color="#fff" />;
      break;
    default:
      weatherIcon = "no pasa na";
  }

  return (
    <div
      className="h-screen bg-slate-700 flex flex-col justify-center items-center text-6xl
    text-white"
    >
      <div>{city}</div>
      <div>{Math.floor(temperature)}°C</div>
      <div>{weatherIcon}</div>
    </div>
  );
};

export default WeatherCard;
