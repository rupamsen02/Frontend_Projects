import "./Gallery.css";
import gallery1 from "../../assets/gallery1.jpg";
import gallery2 from "../../assets/gallery2.jpg";
import gallery3 from "../../assets/gallery3.jpg";
import gallery4 from "../../assets/gallery4.jpg";
import rightArrow from "../../assets/right-arrow.png"

const Gallery = () => {
  return (
    <div className="campus">
      <section className="heading">
        <p>Gallery</p>
        <h2>Campus Photos</h2>
      </section>
      <section className="gallery">
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
        <img src={gallery4} alt="" />
      </section>
        <button>See more here <img src={rightArrow} alt="" /></button>
    </div>
  );
};
export default Gallery;
