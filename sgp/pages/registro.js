import Head from "next/head";
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Navigation from "../components/navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import apiService from "../lib/services/nextapi";

const ColoredLine = ({ color }) => (
  // Linea de colores (Revisar despues como integrarlo con texto)
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 1,
    }}
  />
);
const action = "patient/createPatient";
const handleSubmit = (event) => {
  // Guarda los datos del form y los envía como JSON via POST
  event.preventDefault();
  const data = new FormData(event.target);
  let formData = {};
  data.forEach((value, key) => (formData[key] = value));
  const registerJson = JSON.stringify(formData);

  apiService.post(action, formData).then((outp) => {
    console.log(outp);
  });
  console.log(registerJson);
};

export default function Registro() {
  return (
    <div>
      <Head>
        <title>Clinica internacional - SGP</title>
      </Head>
      <Navigation>
        <div>
          <Container>
            <Row>
              <Col>
                <h2>Registro de pacientes</h2>
              </Col>
            </Row>
            <Row>
              <ColoredLine color="black" />
            </Row>
            <Row>
              <div>
                <h6> Datos básicos </h6>
              </div>
            </Row>

            <form onSubmit={handleSubmit}>
              {/* Form agregado */}
              <div class="row-inputs3">
                <Col>
                  <label for="text" class="form-label">
                    Nombres
                  </label>
                  <input type="text" class="form-control" name="name"></input>
                </Col>
                <Col>
                  <label for="text" class="form-label">
                    Apellido Paterno
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="surname_pat"
                  ></input>
                </Col>
                <Col>
                  <label for="text" class="form-label">
                    Apellido Materno
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="surname_mat"
                  ></input>
                </Col>
              </div>
              <div class="row-inputs3">
                <Col>
                  <label for="text" class="form-label">
                    Tipo de documento
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="documentType"
                  ></input>
                </Col>
                <Col>
                  <label for="text" class="form-label">
                    Número de documento
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="document"
                  ></input>
                </Col>
              </div>
              <div class="row-inputs3">
                <Col>
                  <label for="text" class="form-label">
                    Fecha de nacimiento
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="birthday"
                  ></input>
                </Col>
                <Col>
                  <label for="text" class="form-label">
                    Sexo
                  </label>
                  <input type="text" class="form-control" name="sex"></input>
                </Col>
              </div>
              <div class="row-inputs3">
                <Col>
                  <label for="text" class="form-label">
                    Teléfono
                  </label>
                  <input type="text" class="form-control" name="phone1"></input>
                </Col>
                <Col>
                  <label for="text" class="form-label">
                    Correo electrónico
                  </label>
                  <input type="text" class="form-control" name="email1"></input>
                </Col>
                <Col>
                  <label for="text" class="form-label">
                    Dirección domiciliaria
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="address"
                  ></input>
                </Col>
              </div>
              <div class="row-inputs3">
                <Col>
                  <label for="text" class="form-label">
                    Actividad/Puesto
                  </label>
                  <input type="text" class="form-control" name="puesto"></input>
                </Col>
                <Col>
                  <label for="text" class="form-label">
                    Institución/Empresa
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="company"
                  ></input>
                </Col>
              </div>
              <div>
                <h6> Datos de consulta </h6>
              </div>
              <div class="row-inputs3">
                <Col>
                  <label for="text" class="form-label">
                    Médico de consulta
                  </label>
                  <input type="text" class="form-control" name="doctor"></input>
                </Col>
              </div>
              <div class="parrafo">
                <label for="text" class="form-label">
                  Observaciones
                </label>
                <input
                  type="text"
                  class="form-control"
                  name="observations"
                ></input>
              </div>
              <div class="siguiente">
                {/* <a name="" id="" class="btn btn-primary" href="#" role="button" onClick={test}>Guardar</a> */}
                <Button
                  className="btn-panel mt-md-5 mt-sm-2"
                  size="sm"
                  type="submit"
                >
                  {" "}
                  Registrar
                </Button>
              </div>
            </form>
          </Container>
        </div>
      </Navigation>
    </div>
  );
}
