import React, { useEffect, useState } from "react";
import logo from "../../Assets/spotify.png";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

const Form = () => {
  const benefits = [
    "Shuffle play",
    "Add free",
    "Unlimited Skip",
    "Listen offline",
    "Play any track",
    "Hight quality audio",
  ];

  return (
    <div className="form__container">
      <div className="left">
        <h2>Music for Everyone.</h2>
        <p className="premium">Premium Subscription</p>
        <h2 className="price">
          $9.99 <span>/ month</span>
        </h2>
        <ul>
          {benefits.map((benefit, index) => {
            return <li key={index}>{benefit}</li>;
          })}
        </ul>
        <div className="bottom">
          <p>start your 30 days free trial</p>
          <p>
            <strong>Family</strong> and <strong>student</strong> offer available
          </p>
        </div>
        <p className="access__rights">
          An access right is the right to perform a particular operation on the
          object. For example
        </p>
      </div>
      <div className="right">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="auth__container">
          <div className="links">
          <NavLink to="login">
            <p>Login</p>
          </NavLink>
          <NavLink to="sign">
            <p>Sign Up</p>
          </NavLink>
          </div>
         
          <div className="form">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
