import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <footer>
      <p id="pFooter">Website designed by   
        <a href="https://github.com/shivam-mishra999?tab=repositories"  target="_blank" style={{ color: 'yellow' }}>  @Shivam Mishra</a></p>
      <a href="https://github.com/shivam-mishra999?tab=repositories" target="_blank"><img src="./shivam1.jpg" alt="Circular Image" style={{ borderRadius: '40%', width: '60px', height: '70px'}}  /></a>
    </footer>
  );
};
export default Footer;
