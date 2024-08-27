import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="top-section">
        <div>
          <h2>arn
            <span>
              <i className="fa-solid fa-gear"></i>
            </span>ld auto
            <span>
              <i className="fa-solid fa-gear"></i>
            </span> Corp.
          </h2>
          <p>Choose your preferred car disign + part</p>
        </div>
        <div className="sicial-media">
          <h3>follow Us</h3>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/"><i className="fa-brands fa-square-x-twitter"></i></a>
        </div>
      </div>
      <div className="bottom-section">
        <div>
          <h4>Community</h4>
          <a href="/">Eastland Carwash</a>
          <a href="/">Github</a>
        </div>
        <div>
          <h4>Reach Us</h4>
          <a href="/">Contact Us</a>
          <a href="/">Suport</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
        </div>
      </div>
      <p className="copyright">
        <i className="fa-solid fa-copyright"></i>
        2024 powered by ArnoldKiritu | All rightsss reserved
      </p>
    </div>
  );
}
 
export default Footer;