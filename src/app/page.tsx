"use client";

import "./globals.scss";
import Image from "next/image";

import user_img from "./assets/images/user.png";
import cube from "./assets/images/cube.png";
import arrow from "./assets/images/down-arrow.svg";
import test from "./assets/images/file.jpg";
import cart from "./assets/images/shop.svg";
import { useState } from "react";

export default function Home() {
  const [click, setClick] = useState(false);

  function asd() {
    return (
      <div className="user-panel">
        <a href="/login">Autentificare</a>
        <a href="/register">&#206;nregistrare</a>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="navbar">
          <ul className="dots">
            <li className="dot1"></li>
            <li className="dot2"></li>
            <li className="dot3"></li>
          </ul>
          <Image
            className="user"
            src={user_img}
            width={45}
            height={45}
            alt="user_icon"
            onClick={() => {
              if (click == false) setClick(true);
              else setClick(false);
            }}
          />
          {click ? asd() : ""}
        </div>
        <div className="heading">
          <div className="text">
            <h1>Nargetic 3D</h1>
            <h2>Cu noi construiesti viitorul ! </h2>
          </div>
          <Image
            className="img"
            src={cube}
            width={256}
            height={256}
            alt="cube"
          />
        </div>
      </div>
      <div className="spacing">
        <Image src={arrow} width={64} height={64} alt="arrow" />
      </div>
      <h1 className="pr-head">Produsele noastre</h1>
      <div className="product-list">
        <div className="product">
          <Image src={test} width={100} height={100} alt="lol" />
          <div className="details">
            <span className="title">Test image title for test</span>
            <span className="price">18.00&euro;</span>
          </div>
        </div>
        <div className="product">
          <Image src={test} width={100} height={100} alt="lol" />
          <div className="details">
            <span className="title">Test image title for test</span>
            <span className="price">18.00&euro;</span>
          </div>
        </div>
        <div className="product">
          <Image src={test} width={100} height={100} alt="lol" />
          <div className="details">
            <span className="title">Test image title for test</span>
            <span className="price">18.00&euro;</span>
          </div>
        </div>
        <div className="product">
          <Image src={test} width={100} height={100} alt="lol" />
          <div className="details">
            <span className="title">Test image title for test</span>
            <span className="price">18.00&euro;</span>
            <Image
              src={cart}
              width={32}
              height={32}
              alt="lol"
              className="hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
}
