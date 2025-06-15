import "./style.css";
import Button from "../Button";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="wel-content">
        <h1>Discover your next adventure</h1>
        <p>
          Choose from our curated experiences,customized for every kind of users
        </p>
        <Button child={"Book Now"}></Button>
        <span>
          <h4>Easy Booking </h4>|<h4>Curated Destination</h4>|
          <h4>Trusted support</h4>|
        </span>
      </div>
      <div className="wel-img">
        <img src="/public/haa.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Welcome;
