import React from "react";
import style from "./Pricing.module.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";


function Pricing() {
  return (
    <>
      <div>
      </div>
      <div className={style.Main_Container}>
        <Comonent1 />
        <Component2 />
        <Component3 />
      </div>
    </>
  );
}
const Comonent1 = () => {
  return (
    <div className={style.Wrapper}>
      <div className={style.box}>
        <h3>Day Pass</h3>
        <p className={style.dollar}>
          $<span>20</span>
        </p>
      </div>
      <p className={style.text}>/pass</p>
      <div className={style.content}>
        <p>
          <span>
            <BsCheckCircle />
          </span>
          1 Day Pass
        </p>
        <p>
          <span>
            <BsCheckCircle />
          </span>
          Free Gym Access
        </p>
        <p>
          <span>
            <BsCheckCircle />
          </span>
          24 hour Access
        </p>
      </div>
      <button className={style.Wrapper_button}>GET STARTED</button>
    </div>
  );
};

function Component2() {
  return (
    <div className={style.Wrapper2}>
      <div className={style.box}>
        <h3>Month to Month</h3>
        <p className={style.dollar}>
          $<span>90</span>
        </p>
      </div>
      <p className={style.text}>/month</p>
      <div className={style.content}>
        <p>
          <span>
            <BsCheckCircle />
          </span>
          $99 Joining Fee
        </p>
        <p>
          <span>
            <BsCheckCircle />
          </span>
          No Contract
        </p>
        <p>
          <span>
            <BsCheckCircle />
          </span>
          Free Gym Access
        </p>
        <p>
          <span>
            <BsCheckCircle />
          </span>
          1 Group Class Included
        </p>
        <p>
          <span>
            <BsCheckCircle />
          </span>
          24 Hours Access
        </p>
      </div>
      <button className={style.Wrapper2_button}>GET STARTED</button>
    </div>
  );
}

function Component3() {
  return (
    <>
      <div>
        <div className={style.Wrapper3}>
          <h2>Membership</h2>
          <h1>From Punch Pass to Monthly or Annual</h1>
          <p style={{ width: "350px", fontSize: "20px" }}>
            At Gym Base.We offer a wide range of membership with options to suit
            every budge.Everything from One Day Pass,Punch Pass to monthly or
            annual prepaid memberships. What's more.we don't tie you in to a
            long term contact,giving you greater flexibility
          </p>

          <h2>Each plan included</h2>
          <p>
            <span>
              <AiOutlineArrowRight />
            </span>
            The best equipment global brands{" "}
          </p>
          <p>
            <span>
              <AiOutlineArrowRight />
            </span>
            The gym is open 24 hours a day,7 days a week{" "}
          </p>
          <p>
            <span>
              <AiOutlineArrowRight />
            </span>
            Two safe paymnt methods
          </p>
          <p>
            <span>
              <AiOutlineArrowRight />
            </span>
            Group fitness classes in the price of the subscription
          </p>
          <p>
            <span>
              <AiOutlineArrowRight />
            </span>
            No long-term contract,period
          </p>
        </div>
      </div>
    </>
  );
}

export default Pricing;