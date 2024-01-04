import React from "react";
import "./Header.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Box id="boxHeader" sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ backgroundColor: 'purple', color:'white' }}>
        <Typography variant="h4" component="div"  sx={{ flexGrow: 1, display:'flex', justifyContent:'center',  fontWeight: 'bold', alignItems: 'center'}}>
        <span>Weather App</span>
        <img src="https://t3.ftcdn.net/jpg/03/50/31/58/360_F_350315847_eo74yoI3NoaV9NFVSHj5DItIxwh6VUG0.jpg" alt="weather_pic" style={{ borderRadius: '10%', width: '100px', height: '70px', marginLeft:'20px'}} />
        </Typography>
      </AppBar>
    </Box>
  );
};
export default Header;
