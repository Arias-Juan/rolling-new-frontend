import React from "react";
import { Card, Container, Col, CardColumns } from "react-bootstrap";
import { GiPlainCircle } from "react-icons/gi";

const Nosotros = () => {
    return (
        <div>
            <Container>
                <Card className="my-5">
                    <Card.Header className="bg-login text-right">
                        <img src={`${process.env.PUBLIC_URL}img/Principal/logo-footer.svg`} width="40%" alt="React Bootstrap logo" />
                    </Card.Header>
                    <Card.Body >
                        <article className="row">
                            <Col sm="12" className="text-center">
                                <Card.Title as="h2" >
                                    Sobre nosotros
                            </Card.Title>
                            </Col>
                            <Col sm="12">
                                <Card.Text>
                                    Somos una micro empresa en pleno desarrollo creada el 7 de Septiembre del 2020 para brindar informacion a todos nuestros lectores de todo Latino America.
                                <br />
                                Fue creado por 6 desarrolladores, usuarios de la academia Rolling Code. Entre los participantes se encuentran Luciana Ghidara, Juan D'amichici, Hugo Gimenez, Luciano N. Gramajo, Lucas Martinez y Juan Arias.

                                </Card.Text>
                            </Col>
                        </article>
                        <br /><br />
                        <article>
                            <Col sm="12" className="text-center">
                                <Card.Title as="h2">
                                    Misión y visión
                            </Card.Title>
                            </Col>
                        </article>
                        <br /><br />
                        <article className="row">
                            <Col sm="12" lg="6">
                                <Card.Subtitle as="h4">
                                    <GiPlainCircle className="mr-2"></GiPlainCircle>
                                            Misión
                                        </Card.Subtitle>
                                <hr />
                            </Col>
                            <Col sm="12" lg="6" className="border-left">
                                <Card.Text>
                                    Reflejar a todos nuestros lectores en toda su diversidad, contribuir a fortalecer su identidad, y poder conectarnos en todo momento y lugar.
                                            <br /><br />
                                            Tres ideas principales se desprenden de nuestra declaración de misión y sirven de guía para nuestros actos
                                            <br /><br />
                                            Reflejarnos en toda nuestra diversidad: indica de forma clara e inequívoca que nuestros contenidos, programación y conductas deben estar orientados a representar en forma pluralista las realidades presentes en cada rincón de nuestro mundo.
                                            <br /><br />
                                            Fortalecer la identidad: indica que nuestros actos deben estar impulsados por el deseo y el objetivo de promover el sentido de unidad y pertenencia como ciudadano.
                                            <br /><br />
                                            Conectarnos en todo momento y lugar: enfatiza como uno de nuestros objetivos centrales la necesidad, como empresa, de asegurar que todos nuestros lectores latino americanos a lo largo de nuestro territorio, y también aquellos que viven en el exterior, puedan acceder a nuestros contenidos y programación, de esta manera, estar conectados con entre todos.
                                        </Card.Text>
                            </Col>
                        </article>
                        <br /><br />
                        <article className="row">
                            <Col sm="12" lg="6">
                                <Card.Subtitle as="h4">
                                    <GiPlainCircle className="mr-2"></GiPlainCircle>
                                            Visión
                                            </Card.Subtitle>
                                <hr />
                            </Col>
                            <Col sm="12" lg="6" className="border-left">
                                <Card.Text>
                                    Estar a la vanguardia de la industria de contenidos siendo la empresa más querida y respetada por todos, representando los valores que la inspiran.
                                            <br /><br />
                                            Nuestra declaración de visión es audaz y nos propone un desafío significativo por delante. Como idea central, surge el objetivo de colocar a R.N en una posición de vanguardia en la industria.
                                            <br /><br />
                                            Vanguardia, del francés avant-garde, es un término del léxico militar utilizado para designar a la parte más adelantada del ejército, la "primera línea" de avanzada en exploración y combate. Metafóricamente, en el terreno artístico la vanguardia es la "primera línea" de creación, la renovación en las formas y de los contenidos. En el contexto de nuestra visión entendemos vanguardia como la sumatoria de dos conceptos centrales en nuestra estrategia: liderazgo e innovación.
                                            <br /><br />
                                            Nuestra visión también resalta que RN, debe desarrollar sus acciones de forma tal que le permitan construir una relación emocional con el "pueblo" basada en el cariño y respeto.
                                        </Card.Text>
                            </Col>
                        </article>
                        <CardColumns className="my-4">
                            <Card>
                                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}img/Pruebas/lucianaG.jpg`} />
                                <blockquote className="blockquote mb-0 card-body">
                                    <Card.Title>Luciana Ghidara</Card.Title>
                                    <Card.Text>
                                       <p> Fotografa, amante de la economia, estudiante de programacion en Rolling Code School.</p>
                                    </Card.Text>
                                </blockquote>
                            </Card>
                            <Card className="p-3">
                                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}img/Pruebas/juanA.jpg`} />
                                <blockquote className="blockquote mb-0 card-body">
                                    <Card.Title>Juan Arias</Card.Title>
                                    <Card.Text>
                                       <p> Reportero, apasionado por policiales, estudiante en RC. </p>
                                    </Card.Text>
                                </blockquote>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}img/Pruebas/lucianoG.jpg`} />
                                <blockquote className="blockquote card-body">
                                    <Card.Title>Luciano N. Gramajo</Card.Title>
                                    <Card.Text>
                                      <p>  Orgulloso de ser argentino, soltero y estudio programacion de software en Rolling Code.</p>
                                    </Card.Text>
                                </blockquote>
                            </Card>
                            <Card text="white" className="text-center p-3 pre-footer border-0">
                                <blockquote className="blockquote mb-0 card-body pre-footer">
                                    <Card.Title className="pre-footer">Rolling News</Card.Title>
                                    <Card.Text>
                                       <p> Nuestro objetivo: Poder llegar a todos nuestros lectores y poder informarnos en todo lo posible en este basto mundo.</p>
                                    </Card.Text>
                                </blockquote>
                            </Card>
                            <Card className="text-center">
                            <Card.Img variant="top" src={`${process.env.PUBLIC_URL}img/Pruebas/juanD.jpg`} />
                            <blockquote className="blockquote card-body">
                                    <Card.Title>Juan D'amichici</Card.Title>
                                    <Card.Text>
                                       <p> Amante de los deportes (boca) y de la programacion.{' '}</p>
                                    </Card.Text>

                                </blockquote>
                            </Card>
                            <Card>
                                <Card.Img src={`${process.env.PUBLIC_URL}img/Pruebas/lucasM.jpg`} />
                                <blockquote className="blockquote mb-0 card-body">
                                    <Card.Title>Lucas Martinez</Card.Title>
                                    <Card.Text>
                                   <p> Lucas es estudiante de diseño y aprendio a programar paginas web en Rolling. Le gusta trabajar con musica techno a todo volumen y hacer breaks jugando al Valorant (no es muy bueno pero le pone actitud).</p>
                                    </Card.Text>
                                </blockquote>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src={`${process.env.PUBLIC_URL}img/Pruebas/HugoJ.jpg`} />
                                <blockquote className="blockquote card-body">
                                    <Card.Title>Hugo Gimenez</Card.Title>
                                    <Card.Text>
                                       <p> Escritor de noticias, loco por el espectaculo y estudiante de programacion en Rolling.</p>
                                    </Card.Text>
                                </blockquote>
                            </Card>
                        </CardColumns>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Nosotros;
