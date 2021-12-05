import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

// Linea de colores (Revisar despues como integrarlo con texto)

const ColoredLine = ({color}) => (
  <hr
              style={{
                color: color,
                backgroundColor: color,
                height: 1
              }}
            />
);

// Form

const handleSubmit = (event) => {
  event.preventDefault();
  // console.log(loginForm.getRawValue()) // GetRawValue: Toda la data del formulario
  const data = new FormData(event.target)
  // console.log(event.target.elements)
  // data.set('name', data.get('name'))
  // console.log(data.getAll('name'))
  let formData = {}; 
  data.forEach((value, key) => formData[key] = value); 
  const json = JSON.stringify(formData);
  console.log(json) 
}

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
                      <h2>
                        Registro de paciente
                      </h2>
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
                <form onSubmit = {handleSubmit}> 

                {/* Form agregado */}
                    <div class="row-inputs3">
                      <Col>
                        <label for ="text" class='form-label'>Nombres</label>
                        <p>José</p>
                      </Col>
                      <Col>
                        <label for ="text"  class='form-label'>Apellido Paterno</label>
                        <p>Ortiz</p>
                      </Col>
                      <Col>
                        <label for ="text"  class='form-label'>Apellido Materno</label>
                        <p>Mendez</p>
                      </Col>
                    </div>
                    <div class="row-inputs3">
                      <Col>
                        <label for ="text"  class='form-label'>Tipo de documento</label>
                        <p>DNI</p>
                      </Col>
                      <Col>
                        <label for ="text" class='form-label'>Número de documento</label>
                        <p>45478850</p>
                      </Col>
                    </div>
                    <div class="row-inputs3">
                      <Col>
                        <label for ="text"  class='form-label'>Fecha de nacimiento</label>
                        <p>01-11-1988</p>
                      </Col>
                      <Col>
                        <label for ="text" class='form-label'>Sexo</label>
                        <p>Masculino</p>
                      </Col>
                    </div>
                    <div class="row-inputs3">
                      <Col>
                        <label for ="text"  class='form-label'>Teléfono</label>
                        <p>949393681</p>
                      </Col>
                      <Col>
                        <label for ="text"  class='form-label'>Correo electrónico</label>
                        <p>jose@utec.edu.pe</p>
                      </Col>
                      <Col>
                        <label for ="text"  class='form-label'>Dirección domiciliaria</label>
                        <p>Pasaje Alisios 123</p>
                      </Col>
                    </div>
                    <div class="row-inputs3">
                      <Col>
                        <label for ="password" class='form-label'>Actividad/Puesto</label>
                        <p>Arquitecto</p>
                      </Col>
                      <Col>
                        <label for ="password" class='form-label'>Institución/Empresa</label>
                        <p>Estudio Alfa</p>
                      </Col>
                    </div>
                    <div>
                      <h6> Datos de consulta </h6> 
                    </div>
                    <div class="row-inputs3">
                      <Col>
                        <label for ="text" class='form-label'>Médico de consulta</label>
                        <p>Ernesto Vega Alvear</p>
                      </Col>
                    </div>
                    <div class="parrafo">
                      <label for ="text" class='form-label'>Observaciones</label>
                      <p>No se registran observaciones</p>
                    </div>
                       <Button  className="btn-panel mt-md-5 mt-sm-2" size="sm"  type = 'submit' > Regresar
                      </Button>
                    </form>
              </Container>
            </div>
          </Navigation>
      </div>



  )
}