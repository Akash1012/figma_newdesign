import { Button } from "antd";
import step1 from "../../assets/images/step1.png";
import step2 from "../../assets/images/step2.png";
import step3 from "../../assets/images/step3.png";
import step4 from "../../assets/images/step4.png";

import "./style.css";

const HowItWork = () => {
  return (
    <div className="how-it-work">
      <div className="why-app">
        <p className="why">why app?</p>
        <p className="tag_line">Fast, simple & effortless.</p>
      </div>
      <div className="work-steps">
        <div className="steps">
          <img src={step1} alt="step1" />
          <br />
          <Button>Step 1</Button>
          <p>Download the app</p>
        </div>
        <div className="border-right"></div>
        <div className="steps">
          <img src={step2} alt="step2" />
          <br />
          <Button>Step 2</Button>
          <p>Invite teammates</p>
        </div>
        <div className="border-right"></div>
        <div className="steps">
          <img src={step3} alt="step3" />
          <br />
          <Button>Step 3</Button>

          <p>Create workspace</p>
        </div>
        <div className="border-right"></div>
        <div className="steps">
          <img src={step4} alt="step4" />
          <br />
          <Button>Step 4</Button>

          <p>Track performance</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
