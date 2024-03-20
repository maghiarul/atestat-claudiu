"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

import "./index.scss";
import road from "../../assets/images/road.svg";
import Image from "next/image";

interface PageProps {
  params: {
    checkoutId: number;
  };
}

function Page({ params }: PageProps) {
  const [price, setPrice] = useState(Number);
  const [name, setName] = useState();

  const data = JSON.stringify({
    id: params.checkoutId,
  });

  useEffect(() => {
    axios
      .post("http://localhost:4000/checkPrice", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setPrice(res.data.price);
        setName(res.data.name);
      });
  });

  const [quantity, setQuantity] = useState("1");
  const [address, setAddress] = useState("");

  return (
    // <h1>
    //   this is {params.checkoutId} and price {price}
    // </h1>
    <div className="container">
      <div className="wrapper-order">
        <h1>Detalii comanda</h1>
        <div className="order">
          <div className="can">
            <label>Cantitate*</label>
            <input
              required
              placeholder="1"
              type="number"
              min={1}
              onChange={(e) => setQuantity(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="billing">
          <div className="name">
            <div className="can">
              <label>Nume*</label>
              <input required placeholder="Ben" type="text"></input>
            </div>
            <div className="can">
              <label>Prenume*</label>
              <input required placeholder="Dover"></input>
            </div>
          </div>
          <div className="can">
            <label>Adresa*</label>
            <input
              required
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Str Unirii, Nr 90, Sat ..., Comuna ..."
            ></input>
          </div>
          <div className="city">
            <div className="can">
              <label>Oras*</label>
              <input required placeholder="Galati" type="text"></input>
            </div>
            <div className="can">
              <label>Cod postal*</label>
              <input required placeholder="807171"></input>
            </div>
          </div>
          <div className="can">
            <label>Email*</label>
            <input
              required
              placeholder="bendover91@gmail.com"
              type="email"
            ></input>
          </div>
          <div className="can">
            <label>Numar de telefon*</label>
            <input required placeholder="0745631433"></input>
          </div>
        </div>
      </div>
      <div className="payment">
        <h1>Comanda ta</h1>
        <div className="q">
          <span>Nume obiect : {name}</span>
          <hr></hr>
          <span>Cantitate x {quantity}</span>
        </div>
        <hr className="middl"></hr>
        <span>Adresa : {address}</span>
        <hr className="middl"></hr>
        <div className="cc">
          <div className="card can">
            <label>Card number*</label>
            <input type="text" required placeholder="4444 **** **** ****" />
          </div>
          <div className="exp_mon">
            <div className="can">
              <label htmlFor="">Data expirarii*</label>
              <input type="text" placeholder="MM/YY" required />
            </div>
            <div className="can">
              <label htmlFor="">Cod de securitate*</label>
              <input type="text" placeholder="CVV" required />
            </div>
          </div>
        </div>
        <div>
          <div className="can">
            <label htmlFor="">Observatii client</label>
            <textarea placeholder="As dori ca pachetul..." />
          </div>
          <div className="ramburs">
            <input type="checkbox"></input>
            <span>Plata la ramburs ?</span>
          </div>
          <span>Total: </span>
          <br />
          <span className="bigger">{price * parseInt(quantity)}.00 &euro;</span>
        </div>
        <button>Place order</button>
      </div>
      <Image id="road" src={road} width={1000} height={1000} alt="road" />
    </div>
  );
}

export default Page;
