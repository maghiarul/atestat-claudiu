"use client";

import React, { useState } from "react";
import "./register.scss";

import loginEmail from "../assets/images/login-email.svg";
import loginPass from "../assets/images/login-pass.svg";
import loginUser from "../assets/images/login-user.svg";
import loginEye from "../assets/images/login-eye.svg";
import successNotify from "../assets/images/success-notify.svg";
import failedNotify from "../assets/images/failed-notify.svg";

import Image from "next/image";
import axios from "axios";

function Page() {
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passconf, setPassConf] = useState("");

  const [valid, setValid] = useState(0);
  const [errMsg, setErrMsg] = useState("");

  async function tryRegister() {
    if (user !== "" && email !== "" && pass !== "" && passconf !== "") {
      const data = JSON.stringify({
        username: user,
        email: email,
        password: pass,
      });
      const res = await axios
        .post("http://localhost:4000/register", data, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          console.log(res.data);
          console.log(valid);
          if (res.data.success === true) {
            setValid(1);
            setErrMsg(res.data.message);
          }
          if (res.data.success === false) {
            setValid(2);
            setErrMsg(res.data.message);
          }
        });
    }
  }

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
        <button
          onClick={() => {
            tryRegister().then(() => {
              window.setTimeout(function () {
                window.location.href = "http://localhost:3000/";
              }, 1000);
            });
          }}
        >
          &#206;nregistreaz&#259; !
        </button>
      </div>
      {(() => {
        if (valid === 1)
          return (
            <div className="notify success">
              <Image src={successNotify} width={32} height={32} alt="success" />
              <h2>{errMsg}</h2>
            </div>
          );
        else if (valid === 2)
          return (
            <div className="notify failed">
              <Image src={failedNotify} width={32} height={32} alt="success" />
              <h2>{errMsg}</h2>
            </div>
          );
      })()}
    </div>
  );
}

export default Page;
