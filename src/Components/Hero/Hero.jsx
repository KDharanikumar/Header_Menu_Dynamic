import BannerVideo from "../../Videos/Banner_Video.mp4";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="d-flex items-center justify-center">
      <video className='videoTag' autoPlay loop muted playsInline>
        <source src={BannerVideo} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className="container-fluid">
        <div className="container" data-aos="fade-up">
          <div className="row m-0 justify-content-center text-center mt-3" data-aos="fade-up" data-aos-delay="150">
            <div className="col-lg-6">
              <h1>
                Grow your business with <span>Starflit</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
