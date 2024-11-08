import "../style/Hero.css";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-boxes-container">
        {/* Left */}
        <div>
          <Image
            src="/images/portfolio.jpg"
            alt="profile"
            width={200}
            height={200}
            className="hero-image"
          />
        </div>
        {/* Right */}
        <div className="hero-right-div">
          <h1 className="title-hero">
            I'm Arman Zaman, Front-end <br /> Developer
          </h1>
          <p className="hero-desc">
            I specialize in building dynamic and responsive websites using
            <strong> React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>,
            <strong> Tailwind CSS</strong>, and <strong>custom CSS</strong>. I focus on clean,
            maintainable code and creating intuitive user interfaces to bring your ideas to life.
          </p>
          <button className="hero-button">
            HIRE ME
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
