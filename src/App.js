import React from "react";
import "./App.css";
import Weather from "./components/weather/Weather";
import { Provider } from "react-redux";
import WeatherStore from "./redux/store";
const App = () => {
  return (
    <Provider store={WeatherStore}>
      <div className="App">
        <Weather />
      </div>
    </Provider>
  );
};

export default App;
