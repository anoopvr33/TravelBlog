import "./style.css";
import DestContent from "../../components/DestContent";
import PackContent from "../../components/PackContent";
import Welcome from "../../components/WelcomPoster";
import Advantage from "../../components/AdvantageBlog";
import Testimonial from "../../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Welcome></Welcome>
      <DestContent></DestContent>
      <Advantage></Advantage>
      <PackContent></PackContent>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
