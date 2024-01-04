import React, { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box";
import axios from "axios";
import CardComponent from "./CardComponent.js";
// import { useSnackbar, SnackbarProvider } from "notistack";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Weather.css";

const Weather = () => {
//   const { enqueueSnackbar } = useSnackbar();
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const handleLocationChange = (event) => {
    const value = event.target.value;
    setLocation(value);
    debounceSearch(value);
    setWeatherData({});
  };

  // const handleSearch = () => {
  //   fetchWeatherData(location);
  // };

  const debounceSearch = (value) => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    const timeout = setTimeout(() => {
      fetchWeatherData(value);
    }, 500);
    setDebounceTimeout(timeout);
  };

  const fetchWeatherData = async (city) => {
    try {
      const url = `https://api.weatherapi.com/v1/forecast.json?key=b7bbe96f10fd49e7bfa101010232912&q=${city}&days=1&aqi=no&alerts=no`;

      const response = await axios.get(url);
      if (response.status === 200) {
        const { current, location } = response.data;
        setWeatherData({ current, location });
        console.log(response.status);
      } else {
        console.log("Error");
      }
    } catch (error) {
      if (error.response) {
        console.log("Error response status:", error.response.status);
        if (error.response.status === 400) {
            console.log(error.response.status);
        //   enqueueSnackbar("No matching location found", { variant: "error" });
          toast.error("No matching location found", {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
        //   enqueueSnackbar("An Error Occurred", { variant: "error" });
          toast.error("An Error Occurred");
        }
      }
    }
  };

  useEffect(() => {
    return () => {
      // Cleanup function to clear the timeout when the component unmounts
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    };
  }, [debounceTimeout]);

  return (
    
    <div>
      <ToastContainer />
      <div>
        <Box id="textfield">
          <TextField
            label="Enter Location"
            variant="outlined"
            size="large"
            value={location}
            onChange={handleLocationChange}
            sx={{
              "& .MuiInputLabel-root": {
                color: "black", // Set label color
                fontWeight: "bold", // Set label font weight
              },
              "& .MuiOutlinedInput-root": {
                backgroundColor: '#ffff8d', // Light yellow background color
                "& fieldset": {
                  borderColor: "black", // Set the border color
                  borderWidth: 8,      // Set the border width
                },
              },
            }}
          />
        </Box>
      </div>
      {/* <div className="button">
        <button id="button" onClick={handleSearch}>
          Search
        </button>
      </div> */}
      <div>
        <CardComponent weatherData={weatherData} />
      </div>
    </div>
    
  );
};
export default Weather;
