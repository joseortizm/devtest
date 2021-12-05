import Head from 'next/head'
//import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Figure from 'react-bootstrap/Figure'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Indicadores() {
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
                        Registro de indicadores técnicos 
                      </h2>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={4}>      
                    <div className="contenedor">
                    <Figure className="pic-diagnostico">
                                          <Figure.Image
                                            width={171}
                                            height={180}
                                            alt="171x180"
                                            src="https://i.stack.imgur.com/l60Hf.png"
                                          />
                                        </Figure> 
                    </div>                                     
                    </Col>
                     <Col sm={12} md={8}>
                     <p>Nombre del paciente: José Ortiz</p>
                     <p>Médico a cargo: Elmer Huerta</p>
                     <p>Pre diagnostico: Presunta diabetes</p>
                     <p>Exámenes clínicos:</p>
                     <ol>
                       <li>Hemograma</li>
                       <li>Examen de orina</li>
                     </ol>
                    </Col>
                </Row>
                <Row>
                  <Col sm={12} md={12}>
                      <h6>
                      Indicadores clínicos
                      </h6>
                  </Col>
                </Row>
                <Form>
                <Row>                
                    <Col sm={12} md={4}>
                     <h6>Examen realizado</h6>
                      <Form.Control type="text" placeholder="Examen aqui"/>
                    </Col>
                     <Col sm={12} md={4}>
                      <h6>
                      Analisis clínico
                      </h6>
                      <Form.Control type="text" placeholder="Analisis aqui"/>
                    </Col>
                    <Col sm={12} md={2}>
                      <h6>
                      Valor 
                      </h6>
                      <Form.Control type="text" placeholder="Valor aqui"/>
                    </Col>
                    <Col sm={12} md={2}>
                      <h6>
                      Umbral 
                      </h6>
                      <Form.Control type="text" placeholder="Examen aqui"/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12}>
                      <h6>
                      Diagnóstico
                      </h6>
                      <Form.Control
                        as="textarea"
                        placeholder="Ingresar diagnostico"
                        style={{ height: '100px' }}
                      />
                    </Col>                     
                </Row>
                <Row>
                    <Col sm={12} md={4}>              
                <Button className="btn-panel mt-md-5 mt-sm-2" size="sm">Ir a lista de pacientes</Button>         
                   </Col>
                    <Col  sm={12} md={4}>
                <Button className="btn-panel mt-md-5 mt-sm-2" size="sm">Guardar</Button>
                    </Col>
                    <Col sm={12} md={4}>
                 <Button  className="btn-panel mt-md-5 mt-sm-2" size="sm">Ir a medicinas y objetivos</Button>
                    </Col>                     
                </Row>
                </Form>  
              </Container>
            </div>
           </Navigation>
       
      </div>



  )
}