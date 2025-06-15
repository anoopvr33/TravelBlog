import "./style.css";
import { PackageData } from "../MockData";
import ContentCard from "../ContentCard";
// import Suggest from "../SlideButton";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
// import { table } from "node:console";

const PackContent = () => {
  const Slide = () => {
    const productContainers = [...document.querySelectorAll(".pack")];
    const nxtBtn = [...document.querySelectorAll(".nxt-a")];
    const preBtn = [...document.querySelectorAll(".pre-a")];

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
    <div className="pack-main">
      <h1>Top Selling Tour Packages of India</h1>
      <div className="pack">
        <div className="row-1">
          {PackageData.slice(0, Math.ceil(PackageData.length / 2)).map(
            (i, index) => (
              <div className="row-card" key={index}>
                <ContentCard
                  index={index}
                  image={i.image}
                  name={i.place}
                  child={"view More"}
                  // price={i.price}
                ></ContentCard>
              </div>
            )
          )}
        </div>

        <div className="row-2">
          {PackageData.slice(Math.ceil(PackageData.length / 2)).map(
            (i, index) => (
              <div className="row-card" key={index}>
                <ContentCard
                  index={index}
                  image={i.image}
                  name={i.place}
                  child={"view more"}
                  // price={i.price}
                ></ContentCard>
              </div>
            )
          )}
        </div>
      </div>
      <div className="suggest">
        <button className="pre-a">
          <FaArrowLeft />
        </button>

        <button className="nxt-a">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PackContent;
