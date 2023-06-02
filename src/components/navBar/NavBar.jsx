import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Button from "../button/Button";

function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className={style.container}>
      <div className={style.container1}>
        <div className={style.icon}>
        <Link to={"/"}><img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOaED3-rJgpu5AjeppalRNp9K3o9tGfWSPJw&usqp=CAU"
          alt=""
          style={{
            borderRadius: "50%",
            marginTop: "3px",
            height: "3rem",
            filter: "negative",
            marginLeft: "30px",
          }}
        /></Link>
          
        </div>
        <div className={style.btn}>
          {isVisible ? (
            <GiHamburgerMenu onClick={() => setIsVisible(false)} />
          ) : (
            <ImCross onClick={() => setIsVisible(true)} />
          )}
        </div>
        <div
          className={isVisible ? style.Links : style.mobileLinks}
          onClick={() => setIsVisible(false)}
        >
          
          <Link to={"/about"} style={{textDecoration:'none', color:'white'}}>About Us</Link>
          <Link to={"/program"} style={{textDecoration:'none', color:'white'}}>Program</Link>
          <Link to={"/trainer"} style={{textDecoration:'none', color:'white'}}>Trainer</Link>
          <Link to={"/pricing"} style={{textDecoration:'none', color:'white'}}>Pricing</Link>
          <Link to={'/joining'}><Button name= 'Join Us'/></Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;