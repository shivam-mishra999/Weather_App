import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const CardComponent = ({ weatherData }) => {
  if (!weatherData || Object.keys(weatherData).length === 0) {
    return;
  }
  const {
    location: { name, country },
    current: {
      temp_c,
      temp_f,
      condition: { text: weatherCondition, icon },
      humidity,
      wind_kph,
      cloud,
      last_updated,
    },
  } = weatherData;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "50vh",
      }}
    >
      <Card variant="outlined" sx={{ maxWidth: 600, backgroundColor:'#ffff8d', marginBottom:'20px', borderWidth:'4px', borderColor:'purple' }}>
        <CardContent>
          <h2>
            {name}, {country}
          </h2>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <img src={icon} alt="weather condition" />
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
              <Typography sx={{ mb: 2 }} color="text.primary">
                <strong>Temperature:</strong>
              </Typography>
              <Typography sx={{ mb: 2 }} color="text.primary">
                <strong>Condition:</strong>
              </Typography>
              <Typography sx={{ mb: 2 }} color="text.primary">
                <strong>Wind Speed:</strong>
              </Typography>
              <Typography sx={{ mb: 2 }} color="text.primary">
                <strong> Humidity:</strong>
              </Typography>
              <Typography sx={{ mb: 2 }} color="text.primary">
                <strong>Cloud Coverage:</strong>
              </Typography>

              <Typography sx={{ mb: 2 }} color="text.primary">
                <strong>Last Updated:</strong>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ mb: 2 }} color="text.primary">
                {temp_c}°C / {temp_f}°F
              </Typography>
              <Typography sx={{ mb: 2 }} color="text.primary">
                {weatherCondition}
              </Typography>
              <Typography sx={{ mb: 2 }} color="text.primary">
                {wind_kph} kph
              </Typography>
              <Typography sx={{ mb: 2 }} color="text.primary">
                {humidity}%
              </Typography>
              <Typography sx={{ mb: 2 }} color="text.primary">
                {cloud}%
              </Typography>

              <Typography sx={{ mb: 2 }} color="text.primary">
                {last_updated}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};
export default CardComponent;
