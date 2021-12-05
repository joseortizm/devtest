import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import { LabelHTMLAttributes } from "react";
import "/styles/Home.module.css";
import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";

export default function Index() {
  const [identificacion, setIdentificacion] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("No estas logeado");
  const router = useRouter();

  //const urlPath = "http://localhost:8081/";
  //const action = "user/validateUser";
  const urlPath = "api/";
  const action = "login";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      identificacion,
      password,
    };

    const res = await fetch(urlPath + action, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((t) => t.json());

    const token = res.token;

    if (token) {
      var json = jwt.decode(token);
      localStorage.setItem("userData", JSON.stringify(json));
      router.push("/inicio");
    } else {
      // prompt
      setMessage("algo salio mal");
    }
  };

  return (
    <div>
      <Head>
        <title>Ingresar al sistema</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ backgroundColor: "#329fe7" }}>
        <img
          src="header-logo-blanco.png"
          width="300"
          alt="Clínica Internacional"
        />
      </div>

      <div style={{ backgroundColor: "#329fe7" }} id="sidebar-wrapper">
        <form className="login-form" onSubmit={handleSubmit}>
          <div class="row">
            <div class="column">
              <h2 className="fw-bold text-center py-5 ">
                Bienvenido al Sistema
              </h2>

              <div className="mb-4">
                <h2 class="fw-bold text-center py-5 ">
                  SISTEMA DE GESTIÓN DE PACIENTES
                </h2>
              </div>
              <div className="input-group mb-3 text-center">
                {/* <label for ="email" class='form-label'>Nombre de usuario</label>
                                        <input type = "text" class='form-control' name='IDuser'> */}
                {/* <p>{message}</p> */}
                {/*<label htmlFor="identificacion">ID:</label>*/}
                <input
                  id="email"
                  type="text"
                  class="form-control"
                  placeholder="Ingresar ID"
                  aria-label="Ingresar ID"
                  aria-describedby="basic-addon1"
                  onChange={(e) => setIdentificacion(e.target.value)}
                />
              </div>
              <div className="input-group mb-3 text-center">
                {/* <label for ="password" class='form-label'>Contraseña</label>
                                        <input type="password" class="form-control" name="password"> */}
                {/*<label htmlFor="password">Contraseña:</label>*/}
                <input
                  id="password"
                  type="password"
                  class="form-control"
                  placeholder="Ingresar Contraseña"
                  aria-label="Ingresar Contraseña"
                  aria-describedby="basic-addon1"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div class="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" id="" type="submit">
                  Ingresar
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}