import "./About.css";
import about from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="about container">
      <img src={about} alt="" />
      <section className="about-section">
        <section className="title">
          <p>ABOUT UNIVERSITY</p>
          <h3>NURTURING TOMORROW'S LEADERS TODAY</h3>
        </section>
        <br />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
          excepturi maiores. Facilis asperiores dolorem vitae ad nostrum error
          repellat iste magni necessitatibus praesentium maxime.
        </p>
        <br />
        <p>
          Voluptatibus delectus dolor in cum! In natus cum dolorem error
          asperiores commodi atque, accusantium quis est nisi porro obcaecati
          aspernatur animi voluptates, at veritatis, dolore sed voluptas.
        </p>
        <br />
        <p>
          Debitis. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Doloribus dolor qui aliquid unde mollitia optio dignissimos veniam,
          consequatur quis iste nisi hic obcaecati omnis.
        </p>
      </section>
    </div>
  );
};
export default About;
