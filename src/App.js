import "./Weather.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Weather from "./Weather.js";
import Introduction from "./Introduction.js";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Weather />
      {/* <CardComponent /> */}
      <Footer />
    </div>
  );
}
