"use client";

import React, { useState } from "react";
import "./register.scss";

import loginEmail from "../assets/images/login-email.svg";
import loginPass from "../assets/images/login-pass.svg";
import loginUser from "../assets/images/login-user.svg";
import loginEye from "../assets/images/login-eye.svg";
import Image from "next/image";

function Page() {
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passconf, setPassConf] = useState("");

  return (
    <div className="container">
      <div className="login-form">
        <h1>&#206;nregistrare</h1>
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
        <button>&#206;nregistreaz&#259; !</button>
      </div>
    </div>
  );
}

export default Page;
