import "./Contact.css";
import mail from "../../assets/mail.png";
import location from "../../assets/location.png";
import telephone from "../../assets/telephone.png";
import email from "../../assets/email.png";
import right_arrow from "../../assets/right-arrow.png"

const Contact = () => {
  return (
    <div className="contact">
      <section className="heading">
        <p>Contact us </p>
        <h2>Get in touch</h2>
      </section>
      <section className="contact-flex">
        <section className="message">
          <label>
            Send us a Message <img src={mail} alt="" />{" "}
          </label>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            labore voluptatum odit asperiores quisquam qui ipsam debitis, nobis
            pariatur tempore dolore alias odio incidunt expedita, laboriosam
            nemo ipsum sint totam.
          </p>
          <section className="contactdetails">
            <img src={location} alt="" />
            <p>ContactRupamSen@gmail.com</p>
          </section>
          <section className="contactdetails">
            <img src={telephone} alt="" />
            <p>+111-3405-23</p>
          </section>
          <section className="contactdetails">
            <img src={email} alt="" />
            <p>67/23, M.G. Road, Kolkata - 700 041</p>
          </section>
        </section>
        <section className="form">
          Name
          <input type="text" />
          Phone Number
          <input type="text" />
          Write your message here
          <textarea name="text" id=""></textarea>
          <div>Send Now <img src={right_arrow} alt="" /></div>
        </section>
      </section>
    </div>
  );
};
export default Contact;
