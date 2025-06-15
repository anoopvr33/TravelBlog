import "./style.css";
import { DestinationData } from "../MockData";
import ContentCard from "../ContentCard";
// import Suggest from "../SlideButton";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
// import { table } from "node:console";

const DestContent = () => {
  const Slide = () => {
    const productContainers = [...document.querySelectorAll(".dest")];
    const nxtBtn = [...document.querySelectorAll(".nxt-b")];
    const preBtn = [...document.querySelectorAll(".pre-b")];

    productContainers.forEach((item, i) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width;

      nxtBtn[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth;
      });

      preBtn[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth;
      });
    });
  };
  useEffect(() => {
    Slide();
  }, []);

  return (
    <div className="dest-main">
      <h1>Explore Most Popular Destinations</h1>
      <div className="dest">
        <div className="row-1">
          {DestinationData.slice(0, Math.ceil(DestinationData.length / 2)).map(
            (i, index) => (
              <div className="row-card" key={index}>
                <ContentCard
                  index={index}
                  image={i.image}
                  name={i.place}
                  price={`starting from $${i.price}`}
                ></ContentCard>
              </div>
            )
          )}
        </div>

        <div className="row-2">
          {DestinationData.slice(Math.ceil(DestinationData.length / 2)).map(
            (i, index) => (
              <div className="row-card" key={index}>
                <ContentCard
                  index={index}
                  image={i.image}
                  name={i.place}
                  price={`starting from $${i.price}`}
                ></ContentCard>
              </div>
            )
          )}
        </div>
      </div>
      <div className="suggest">
        <button className="pre-b">
          <FaArrowLeft />
        </button>

        <button className="nxt-b">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default DestContent;
