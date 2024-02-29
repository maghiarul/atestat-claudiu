"use client";

import "./globals.scss";
import Image from "next/image";

import user_img from "./assets/images/user.png";
import cube from "./assets/images/cube.png";
import arrow from "./assets/images/down-arrow.svg";
import test from "./assets/images/file.jpg";
import omlolo from "./assets/images/cart.svg";
import cart from "./assets/images/serrao.svg";

import { useState } from "react";
import { useCookies } from "next-client-cookies";

import a from "./assets/images/produse/a.jpg";
import b from "./assets/images/produse/asd.jpg";
import c from "./assets/images/produse/c.jpg";
import d from "./assets/images/produse/e.jpg";
import e from "./assets/images/produse/f.jpg";
import f from "./assets/images/produse/g.jpg";
import j from "./assets/images/produse/k.jpg";
import k from "./assets/images/produse/l.jpg";
import fil_negru from "./assets/images/produse/fil_negru.jpg";
import fil_negru_doi from "./assets/images/produse/fil_negru_doi.jpg";
import fil_galben from "./assets/images/produse/fil_galben.jpg";
import fil_rosu from "./assets/images/produse/fil_rosu.jpg";

export default function Home() {
  const [click, setClick] = useState(false);
  const cookies = useCookies();

  function isLoggedIn() {
    if (cookies.get("auth") === "true") return true;
    else return false;
  }

  function LogOut() {
    if (cookies.get("auth") === "true") {
      location.reload();
      cookies.remove("auth");
    }
  }

  function asd() {
    if (isLoggedIn()) {
      return (
        <div className="user-panel">
          <Image
            width={24}
            height={24}
            alt="Shopping cart"
            src={omlolo}
            id="nush"
          />
          <a onClick={LogOut}>Deconectare</a>
        </div>
      );
    } else {
      return (
        <div className="user-panel">
          <a href="/login">Autentificare</a>
          <a href="/register">&#206;nregistrare</a>
        </div>
      );
    }
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
      <h2>Figurine</h2>
      <div className="product-list">
        <div className="product">
          <Image src={a} width={400} height={400} alt="lol" />
          <div className="details">
            <span className="title">Little Paris</span>
            <span className="description">short desc for these.</span>
            <span className="price">15.00&euro;</span>
            <button
              onClick={() => {
                window.location.href = "checkout/1";
              }}
            >
              <Image src={cart} width={32} height={32} alt="cart" />
            </button>
          </div>
        </div>

        <div className="product">
          <Image src={b} width={400} height={400} alt="lol" />
          <div className="details">
            <span className="title">Baby Yoda</span>
            <span className="description">short desc for these.</span>
            <span className="price">15.00&euro;</span>
            <button
              onClick={() => {
                window.location.href = "checkout/2";
              }}
            >
              <Image src={cart} width={32} height={32} alt="cart" />
            </button>
          </div>
        </div>

        <div className="product">
          <Image src={c} width={400} height={400} alt="lol" />
          <div className="details">
            <span className="title">Iepuras</span>
            <span className="description">short desc for these.</span>
            <span className="price">10.00&euro;</span>
            <button
              onClick={() => {
                window.location.href = "checkout/3";
              }}
            >
              <Image src={cart} width={32} height={32} alt="cart" />
            </button>
          </div>
        </div>

        <div className="product">
          <Image src={d} width={400} height={400} alt="lol" />
          <div className="details">
            <span className="title">Pisic</span>
            <span className="description">short desc for these.</span>
            <span className="price">10.00&euro;</span>
            <button
              onClick={() => {
                window.location.href = "checkout/4";
              }}
            >
              <Image src={cart} width={32} height={32} alt="cart" />
            </button>
          </div>
        </div>
        <div className="product">
          <Image src={e} width={400} height={400} alt="lol" />
          <div className="details">
            <span className="title">Rachetuta</span>
            <span className="description">short desc for these.</span>
            <span className="price">5.00&euro;</span>
            <button
              onClick={() => {
                window.location.href = "checkout/5";
              }}
            >
              <Image src={cart} width={32} height={32} alt="cart" />
            </button>
          </div>
        </div>

        <div className="product">
          <Image src={k} width={400} height={400} alt="lol" />
          <div className="details">
            <span className="title">Dodge Challanger</span>
            <span className="description">short desc for these.</span>
            <span className="price">5.00&euro;</span>
            <button
              onClick={() => {
                window.location.href = "checkout/7";
              }}
            >
              <Image src={cart} width={32} height={32} alt="cart" />
            </button>
          </div>
        </div>
      </div>
      <h2>Brelocuri</h2>
      <div className="product-list">
        <div className="product">
          <Image src={fil_galben} width={400} height={400} alt="lol" />
          <div className="details">
            <span className="title">Breloc Galben</span>
            <span className="description">short desc for these.</span>
            <span className="price">2.00&euro;</span>
            <button
              onClick={() => {
                window.location.href = "checkout/12";
              }}
            >
              <Image src={cart} width={32} height={32} alt="cart" />
            </button>
          </div>
        </div>
        <div className="product">
          <Image src={fil_rosu} width={400} height={400} alt="lol" />
          <div className="details">
            <span className="title">Breloc Rosu</span>
            <span className="description">short desc for these.</span>
            <span className="price">2.00&euro;</span>
            <button
              onClick={() => {
                window.location.href = "checkout/11";
              }}
            >
              <Image src={cart} width={32} height={32} alt="cart" />
            </button>
          </div>
        </div>
        <div className="product">
          <Image src={fil_negru_doi} width={400} height={400} alt="lol" />
          <div className="details">
            <span className="title">Breloc Negru</span>
            <span className="description">short desc for these.</span>
            <span className="price">2.00&euro;</span>
            <button
              onClick={() => {
                window.location.href = "checkout/10";
              }}
            >
              <Image src={cart} width={32} height={32} alt="cart" />
            </button>
          </div>
        </div>
        <div className="product">
          <Image src={fil_negru} width={400} height={400} alt="lol" />
          <div className="details">
            <span className="title">Breloc Gri</span>
            <span className="description">short desc for these.</span>
            <span className="price">2.00&euro;</span>
            <button
              onClick={() => {
                window.location.href = "checkout/9";
              }}
            >
              <Image src={cart} width={32} height={32} alt="cart" />
            </button>
          </div>
        </div>
        <div className="product">
          <Image src={f} width={400} height={400} alt="lol" />
          <div className="details">
            <span className="title">Breloc Albastru</span>
            <span className="description">short desc for these.</span>
            <span className="price">2.00&euro;</span>
            <button
              onClick={() => {
                window.location.href = "checkout/6";
              }}
            >
              <Image src={cart} width={32} height={32} alt="cart" />
            </button>
          </div>
        </div>
        <div className="product">
          <Image src={j} width={400} height={400} alt="lol" />
          <div className="details">
            <span className="title">Breloc Alb</span>
            <span className="description">short desc for these.</span>
            <span className="price">2.00&euro;</span>
            <button
              onClick={() => {
                window.location.href = "checkout/8";
              }}
            >
              <Image src={cart} width={32} height={32} alt="cart" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
