import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import { ImFacebook2, ImYoutube } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";

function Footer() {
  return (
    <>
      <div className={style.container}>
        <div className={style.container1}>
          <p>COMPANY</p>
          <ul>
            <Link to="/" className={style.link}>Home</Link>
            <Link to="/about" className={style.link}>AboutUs</Link>
            <Link to="/training" className={style.link}>Traning</Link>
            <a href="#" className={style.link}>Term and conditions</a>
            <a href="#" className={style.link}>continued-operations-accessibility-maintenance</a>
          </ul>
        </div>
        <div className={style.container1}>
          <p>GYMS</p>
          <ul>
            <Link to="/pricing" className={style.link}>Apply Online</Link>
            <Link className={style.link}>Available Positions</Link>
          </ul>
        </div>
        <div className={style.container1}>
          <p>MEMBERS</p>
          <ul>
            <Link to="/trainer" className={style.link}>Meet Our Team</Link>
            <Link className={style.link}>Our Responsibilities</Link>
            <Link className={style.link}>Our Codes</Link>
            <Link className={style.link}>Our Values</Link>
          </ul>
        </div>
        <div className={style.social_icons}>
          <Link className={style.icons} to={"https://www.facebook.com/"}>
            <ImFacebook2 />
          </Link>
          <Link className={style.icons} to={"https://www.linkedin.com/"}>
            <BsLinkedin />
          </Link>
          <Link className={style.icons} to={"https://twitter.com/"}>
            <ImWhatsapp />
          </Link>
          <Link className={style.icons} to={"https://www.youtube.com/"}>
            <ImYoutube />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;