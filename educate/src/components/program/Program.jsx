import "./Program.css";
import program1 from "../../assets/program-1.jpg";
import program2 from "../../assets/program-2.jpg";
import program3 from "../../assets/program-3.jpg";
import graduation_logo from "../../assets/graduation_logo.png";
import post_graduation from "../../assets/post_graduation.png";
import masters from "../../assets/masters.png";

const Program = () => {
  return (
    <div className="programs">
      <div className="flex-col">
        <p>Our Program</p>
        <h2>What we offer</h2>
      </div>
      <div className="image">
        <div className="program">
          <img src={program1} alt="" />
          <div className="caption">
            <img src={graduation_logo} alt="" />
            <p>Graduation</p>
          </div>
        </div>
        <div className="program">
          <img src={program2} alt="" />
          <div className="caption">
            <img src={post_graduation} alt="" />
            <p>Post Graduation</p>
          </div>
        </div>
        <div className="program">
          <img src={program3} alt="" />
          <div className="caption">
            <img src={masters} alt="" />
            <p>Master's Degree</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Program;
