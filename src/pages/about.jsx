import about from "../assets/vanWallpaperAbout.jpg";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <section
        className="sectionAbout"
        style={{
          backgroundImage: `url(${about})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100vw",
          height: "400px",
          backgroundAttachment: "cover",
          backgroundPosition: "center 50%",
        }}
      ></section>
      <section>
        <h2 className="aboutDesc">
          Don’t squeeze in a sedan when you could relax in a van.
        </h2>
        <div className="sectionDiv">
          <p className="aboutParagraph">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉) Our
            team is full of vanlife enthusiasts who know firsthand the magic of
            touring the world on 4 wheels.
          </p>
        </div>
      </section>
      <div className="section3">
        <div>
          <h3>
            Your destination is waiting.<br></br>Your van is ready
          </h3>
          <Link to="/vans" className="link-button">
            Explore our vans
          </Link>
        </div>
      </div>
    </>
  );
}
