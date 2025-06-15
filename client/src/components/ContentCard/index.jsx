import "./style.css";
import Button from "../Button";

const ContentCard = ({ index, image, name, child, price }) => {
  return (
    <div className="card-main" key={index}>
      <img src={image} alt="" />
      <div>
        <h3>{name}</h3>
        <p>
          <span>{price}</span>
        </p>
      </div>

      {child && <Button child={child}></Button>}
    </div>
  );
};

export default ContentCard;
