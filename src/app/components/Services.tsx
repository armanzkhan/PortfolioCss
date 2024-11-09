import "../style/Services.css";
import Image from "next/image";

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">My Services</h2>
      <div className="services-boxes-container">
        {/* Service 1 */}
        <div className="service-card">
          <Image
            src="/images/react.jpg"
            alt="React"
            className="service-icon"
          />
          <h3 className="service-title">React Development</h3>
          <p className="service-desc">
            Building dynamic, responsive user interfaces with React for
            seamless user experiences.
          </p>
        </div>
        {/* Service 2 */}
        <div className="service-card">
          <Image
            src="/images/next.png"
            alt="Next.js"
            className="service-icon"
          />
          <h3 className="service-title">Next.js Development</h3>
          <p className="service-desc">
            Server-side rendering, static site generation, and powerful
            features for your web applications.
          </p>
        </div>
        {/* Service 3 */}
        <div className="service-card">
          <Image
            src="/images/ts.jpg"
            alt="TypeScript"
            className="service-icon"
          />
          <h3 className="service-title">TypeScript</h3>
          <p className="service-desc">
            Ensuring type safety and robust applications with TypeScript for
            better development workflows.
          </p>
        </div>
        {/* Service 4 */}
        <div className="service-card">
          <Image
            src="/images/tailwind.jpg"
            alt="Tailwind CSS"
            className="service-icon"
          />
          <h3 className="service-title">Tailwind CSS</h3>
          <p className="service-desc">
            Fast, customizable CSS frameworks for rapid and responsive UI
            development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

