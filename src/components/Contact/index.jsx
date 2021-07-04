import "./style.css";

const About = () => {
  return (
    <div className="contact">
      <h1>Contact me!</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481.8379422678875!2d106.06640368475028!3d-6.04199354298297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418c2980f1d6b7%3A0x99cfd4074d3f0681!2zNsKwMDInMzAuNyJTIDEwNsKwMDQnMDAuMiJF!5e0!3m2!1sid!2sid!4v1625381726864!5m2!1sid!2sid"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>

      <h4>Phone</h4>
      <p>0813-8427-XXX</p>

      <h4>Email</h4>
      <p>3332190068@untirta.ac.id</p>

      <h4>Address</h4>
      <p>PCI BLOK D 113 No 07</p>
    </div>
  );
};

export default About;
