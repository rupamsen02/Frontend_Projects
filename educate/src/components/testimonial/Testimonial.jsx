import "./Testimonial.css";
import next_btn from "../../assets/next-btn.png";
import prev_btn from "../../assets/prev-btn.png";
import user_1 from "../../assets/user_1.jpg";
import user_2 from "../../assets/user_2.jpg";
import user_3 from "../../assets/user_3.jpg";
import user_4 from "../../assets/user_4.jpg";
import { useRef } from "react";

const Testimonial = () => {
  const slider = useRef();
  let tx = 0;
  const slideBackward = () => {
    if(tx > -50) {
      tx -=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  const slideForward = () => {
    if(tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  return (
    <div className="testimonial">
      <section className="heading">
        <p>Testimonial</p>
        <h2>What student says</h2>
      </section>
      <section>
        <img src={prev_btn} alt="" className="prev-btn" onClick={slideForward} />
        <img src={next_btn} alt="" className="next-btn" onClick={slideBackward} />
      </section>
      <section className="slider">
        <ul ref={slider}>
          <li>
            <section className="slide">
              <section className="flex">
                <img src={user_1} alt="" />
                <section className="details">
                  <h3>Josh Carter</h3>
                  <p>Educate, India</p>
                </section>
              </section>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit ea culpa, nobis commodi atque quae eius nostrum libero
                fugiat possimus dicta tempore rerum, doloribus nesciunt.
                Deleniti quia accusamus harum consectetur! Doloribus dolorem sit
                eos expedita consectetur quam assumenda fugiat esse a saepe
                neque dolorum sed, architecto ullam ipsam vel vitae dolor id,
                quos cum? Fuga suscipit officiis impedit neque blanditiis?
              </p>
            </section>
          </li>
          <li>
            <section className="slide">
              <section className="flex">
                <img src={user_2} alt="" />
                <section className="details">
                  <h3>Rupam Sen</h3>
                  <p>Educate, India</p>
                </section>
              </section>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit ea culpa, nobis commodi atque quae eius nostrum libero
                fugiat possimus dicta tempore rerum, doloribus nesciunt.
                Deleniti quia accusamus harum consectetur! Doloribus dolorem sit
                eos expedita consectetur quam assumenda fugiat esse a saepe
                neque dolorum sed, architecto ullam ipsam vel vitae dolor id,
                quos cum? Fuga suscipit officiis impedit neque blanditiis?
              </p>
            </section>
          </li>
          <li>
            <section className="slide">
              <section className="flex">
                <img src={user_3} alt="" />
                <section className="details">
                  <h3>Antonio Martinez</h3>
                  <p>Educate, India</p>
                </section>
              </section>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit ea culpa, nobis commodi atque quae eius nostrum libero
                fugiat possimus dicta tempore rerum, doloribus nesciunt.
                Deleniti quia accusamus harum consectetur! Doloribus dolorem sit
                eos expedita consectetur quam assumenda fugiat esse a saepe
                neque dolorum sed, architecto ullam ipsam vel vitae dolor id,
                quos cum? Fuga suscipit officiis impedit neque blanditiis?
              </p>
            </section>
          </li>
          <li>
            <section className="slide">
              <section className="flex">
                <img src={user_4} alt="" />
                <section className="details">
                  <h3>David Williamson</h3>
                  <p>Educate, India</p>
                </section>
              </section>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit ea culpa, nobis commodi atque quae eius nostrum libero
                fugiat possimus dicta tempore rerum, doloribus nesciunt.
                Deleniti quia accusamus harum consectetur! Doloribus dolorem sit
                eos expedita consectetur quam assumenda fugiat esse a saepe
                neque dolorum sed, architecto ullam ipsam vel vitae dolor id,
                quos cum? Fuga suscipit officiis impedit neque blanditiis?
              </p>
            </section>
          </li>
        </ul>
      </section>
    </div>
  );
};
export default Testimonial;
