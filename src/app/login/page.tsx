"use client";

import React, { useState } from "react";
import "./login.scss";

import loginEmail from "../assets/images/login-email.svg";
import loginPass from "../assets/images/login-pass.svg";
import loginUser from "../assets/images/login-user.svg";
import loginEye from "../assets/images/login-eye.svg";
import successNotify from "../assets/images/success-notify.svg";

import Image from "next/image";

function Page() {
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passconf, setPassConf] = useState("");

  const [valid, setValid] = useState(false);

  function Notification() {
    //daca s-a logat cu succes
    return (
      <div className="notify success">
        <Image src={successNotify} width={32} height={32} alt="success" />
        <h2>Autentificat cu succes !</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="login-form">
        <h1>Autentificare</h1>
        <div className="username can">
          <label>Nume de utilizator</label>
          <Image
            src={loginUser}
            width={24}
            height={24}
            alt="e"
            className="icon"
          />
          <input
            required
            maxLength={20}
            onChange={(e) => setUser(e.target.value)}
          ></input>
        </div>
        <div className="email can">
          <label>E-mail</label>
          <Image
            src={loginEmail}
            width={24}
            height={24}
            alt="e"
            className="icon"
          />
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div className="pass can">
          <label>Parol&#259;</label>

          <Image
            src={loginPass}
            width={24}
            height={24}
            alt="e"
            className="icon"
          />

          <input
            type={visible ? "text" : "password"}
            required
            maxLength={16}
            id="pass"
            onChange={(e) => setPass(e.target.value)}
          ></input>

          <Image
            src={loginEye}
            width={24}
            height={24}
            alt="e"
            className="icon showpass"
            onClick={() => setVisible(!visible)}
          />
        </div>
        <div className="pass can">
          <label>Confirm&#259; parol&#259;</label>

          <Image
            src={loginPass}
            width={24}
            height={24}
            alt="e"
            className="icon"
          />

          <input
            type={visible ? "text" : "password"}
            required
            maxLength={16}
            id="confpass"
            onChange={(e) => setPassConf(e.target.value)}
          ></input>

          <Image
            src={loginEye}
            width={24}
            height={24}
            alt="e"
            className="icon showpass"
            onClick={() => setVisible(!visible)}
          />
        </div>
        <button
          onClick={() => {
            setValid(true);
          }}
        >
          Autentific&#259; !
        </button>
      </div>
      {valid ? Notification() : ""}
    </div>
  );
}

export default Page;
