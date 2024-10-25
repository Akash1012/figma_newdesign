import { Button } from "antd";
import hero_image from "../../assets/images/hero_image.png";
import "./style.css";

const HeroSection = () => {
  return (
    <div className="main-section">
      <p className="ready-to-use-text">ready to use app?</p>
      <p className="download-app-text">Download App</p>
      <p className="accept-text">
        By downloading App, you accept{" "}
        <span className="term-of-use-text">Terms Of Use</span>
      </p>
      <p className="accept-text">
        and <span className="term-of-use-text">Privacy & Cookies.</span>
      </p>
      <Button className="get-solo">Get Solo</Button>
      <div>
        <img src={hero_image} alt="Heor Image" />
      </div>
    </div>
  );
};

export default HeroSection;
