import Head from 'next/head'
import Navigation from '../components/navigation'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import fetch from "isomorphic-fetch"
//import Users from "../components/users"
import {useEffect, useState} from "react";

// Linea Horizontal

const urlPath = "http://localhost:8081/";
const action = "patient/getAllPatient";

const ColoredLine = ({color}) => (
  <hr
              style={{
                color: color,
                backgroundColor: color,
                height: 1
              }}
            />
);

function test() {
  console.log(JSON.parse(localStorage.getItem("userData")));
  }

  const Inicio = (props) => {
    //console.log(props)
  
  //
  useEffect(()=>{
  
  const data = JSON.parse(localStorage.getItem('userData'));
  
  if(data){
    //console.log(localStorage.setItem('userData',JSON.stringify(data))); 
    console.log(data);
    console.log(data.id);
    //const name = data.id;
    //setUserName(data.id);
    
  
   }else{
    console.log("no hay info");
   }
  
  },[]);
  
  /*
  useEffect(()=>{
  
    //localStorage.setItem('userData',JSON.stringify(data))
    localStorage.setItem("userData",JSON.stringify(data))
  
  });
  */
  
  //
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
                      Inicio
                    </h2>
                  </Col>
                </Row>
                <Row>
                  <ColoredLine color="black" />
                </Row>
                <Row>
                <Col>
                <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Pacientes a cargo</Card.Title>
                      <Card.Text>
                        20 
                      </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Title>Objetivos pendientes</Card.Title>
                      <Card.Text>
                        10
                      </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                </Row>
                <Row className="mt-3">
                <Col>
                  <h2>
                    Inicio
                  </h2>
                </Col>
                <Row>
                  <ColoredLine color="black" />
                </Row>
                </Row>
                <Row>
                <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Jose Ortiz</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Cod: 00001</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Card.Link href="/verPaciente">Ver</Card.Link>
                    <Card.Link href="/indicadores">Plan</Card.Link>
                  </Card.Body>
                </Card>
                </Col>
{/*
                <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Dan Santivañez</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Cod: 00002</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Card.Link href="/registro">Ver</Card.Link>
                    <Card.Link href="/indicadores">Plan</Card.Link>
                  </Card.Body>
                </Card>                
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Body>
                    <Card.Title>Gabriel Salazar</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Cod: 00003</Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Card.Link href="/registro">Ver</Card.Link>
                    <Card.Link href="/indicadores">Plan</Card.Link>
                  </Card.Body>
                </Card>                
                </Col>
                */
              }
                </Row>
            </Container>
             {/* <p> Probando 1 2 3</p> */}
          </div>
            </Navigation>
  
  
  
  
  
  
     </div>
     );
  };

  Inicio.getInitialProps = async (ctx) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data  = await res.json();
    
    //console.log(data);
     
    return {users:data} 
  
  
  
  }
  
  export default Inicio;
  



 // )
//}