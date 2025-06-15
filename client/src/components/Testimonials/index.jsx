import "./style.css";
import { Review } from "../MockData";
import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Testimonial = () => {
  const Slide = () => {
    const productContainers = [
      ...document.querySelectorAll(".review-container"),
    ];
    const nxtBtn = [...document.querySelectorAll(".nxt-c")];
    const preBtn = [...document.querySelectorAll(".pre-c")];

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
    <div className="review">
      <h2>Testimonials</h2>
      <div className="review-container">
        {Review.map((i, index) => {
          return (
            <div key={index} className="review-card">
              <img src={i.image} alt="" />
              <p>{i.review}</p>
              <span>
                <h4>{i.name}</h4>
                Company/{i.desig}
              </span>
            </div>
          );
        })}
      </div>
      <div className="suggest">
        <button className="pre-c">
          <FaArrowLeft />
        </button>

        <button className="nxt-c">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
