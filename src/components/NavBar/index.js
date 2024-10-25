import { Button, Input, Space } from "antd";
import logo from "../../assets/images/company_logo.png";

import "./style.css";

const NavBar = () => {
  return (
    <div className="main-navbar-container">
      <img src={logo} alt="Company Logo" className="navbar-logo" />
      <ul className="navbar-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="search_btn">
        <Space.Compact>
          <Input
            type="text"
            size="large"
            className="search_input"
            placeholder="Enter Your Email"
          />
          <Button
            className="get_started"
            color="danger"
            variant="solid"
            shape="default"
            size="large"
          >
            Get Started
          </Button>
        </Space.Compact>
      </div>
    </div>
  );
};

export default NavBar;
