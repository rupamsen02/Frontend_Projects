import "./Home.css";
import rightArrow from "../../assets/right-arrow.png"

const Home = () => {
  return (
    <div className="home">
      {/* <img src={university} alt="" /> */}
      <div className="content">
        <h3>We ensure better Education for a better world</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          non odit sed provident assumenda iusto accusamus ea est molestias
        </p>
      <button>Explore Now <img src={rightArrow} alt="" /></button>
      </div>
    </div>
  );
};
export default Home;
