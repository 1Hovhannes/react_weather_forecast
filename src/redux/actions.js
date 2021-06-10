import { GET_WEATHER } from "./constants";
import axios from "axios";
import { BASE_URL } from "../helpers/ApiConstants";
import { toast } from "react-toastify";
export const GetWeatherDetails =
  (location = "Odesa", setError) =>
  async (dispatch) => {
    dispatch({ type: GET_WEATHER.PENDING });
    axios
      .get(BASE_URL, {
        params: {
          q: location,
          units: "Metric",
          lang: "en",
        },
      })
      .then((response) => dispatch({ type: GET_WEATHER.SUCCESS, payload: response.data }))
      .catch((err) => {
        setError("Enter the name of the city");
        dispatch({ type: GET_WEATHER.REJECTED, payload: err.response });
      });
  };
