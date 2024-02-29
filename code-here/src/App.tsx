import "bootstrap/dist/css/bootstrap-grid.min.css";
import { useState } from "react";
import { Container, Accordion, Card, Row, Col, Button } from "react-bootstrap";

function App() {
  const [openAccordion, setOpenAccordion] = useState<string | null>("0");

  const handleAccordionToggle = (eventKey: string) => {
    setOpenAccordion(openAccordion === eventKey ? null : eventKey);
  };
  const isAccordionOpen = (eventKey: string) => {
    return openAccordion === eventKey;
  };

  return (
    <div>
      <div className="background-container"></div>
      <div className="background-image-container">
        <Container fluid className="gx-5 gy-5">
          <Row className="justify-content-center align-items-center vh-100">
            <Col md={6}>
              <Card className="p-2">
                <Card.Body>
                  <Row>
                    <Col className="d-flex align-items-center justify-content-center gx-2">
                      <span className="star-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="41"
                          fill="none"
                          viewBox="0 0 40 41"
                        >
                          <path
                            fill="#AD28EB"
                            d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"
                          />
                        </svg>
                      </span>
                      <h1 className="me-auto heading"> FAQs </h1>
                    </Col>
                  </Row>
                  <Accordion defaultActiveKey="0" className="border border-0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header
                        onClick={() => handleAccordionToggle("0")}
                      >
                        <Col className="d-flex justify-content-between align-items-center">
                          <span className="fw-bold">
                            What is Frontend Mentor, and how will it help me?
                          </span>
                          <Button
                            variant="link"
                            className="text-decoration-none accordion-but"
                          >
                            {!isAccordionOpen("0") ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="31"
                                fill="none"
                                viewBox="0 0 30 31"
                              >
                                <path
                                  fill="#AD28EB"
                                  d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="31"
                                fill="none"
                                viewBox="0 0 30 31"
                              >
                                <path
                                  fill="#301534"
                                  d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
                                />
                              </svg>
                            )}
                          </Button>
                        </Col>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="fw-lighter fs-6 description">
                          Frontend Mentor offers realistic coding challenges to
                          help developers improve their frontend coding skills
                          with projects in HTML, CSS and JavaScript. It's
                          suitable for all levels and ideal for portfolio
                          building.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <hr />
                    <Accordion.Item eventKey="1">
                      <Accordion.Header
                        onClick={() => handleAccordionToggle("a")}
                      >
                        <Col className="d-flex justify-content-between align-items-center">
                          <span className="fw-bold">
                            Is Frontend Mentor free?
                          </span>
                          <Button
                            variant="link"
                            className="text-decoration-none accordion-but"
                          >
                            {!isAccordionOpen("a") ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="31"
                                fill="none"
                                viewBox="0 0 30 31"
                              >
                                <path
                                  fill="#AD28EB"
                                  d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="31"
                                fill="none"
                                viewBox="0 0 30 31"
                              >
                                <path
                                  fill="#301534"
                                  d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
                                />
                              </svg>
                            )}
                          </Button>
                        </Col>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="fw-lighter fs-6 description">
                          Yes, Frontend Mentor offers both free and premium
                          coding challenges, with the free option providing
                          access to a range of projects suitable for all skill
                          levels.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <hr />
                    <Accordion.Item eventKey="2">
                      <Accordion.Header
                        onClick={() => handleAccordionToggle("b")}
                      >
                        <Col className="d-flex justify-content-between align-items-center">
                          <span className="fw-bold">
                            Can I use Frontend Mentor projects in my portfolio?
                          </span>
                          <Button
                            variant="link"
                            className="text-decoration-none accordion-but"
                          >
                            {!isAccordionOpen("b") ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="31"
                                fill="none"
                                viewBox="0 0 30 31"
                              >
                                <path
                                  fill="#AD28EB"
                                  d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="31"
                                fill="none"
                                viewBox="0 0 30 31"
                              >
                                <path
                                  fill="#301534"
                                  d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
                                />
                              </svg>
                            )}
                          </Button>
                        </Col>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="fw-lighter fs-6 description">
                          Yes, you can use projects completed on Frontend Mentor
                          in your portfolio. It's an excellent way to showcase
                          your skills to potential employers!
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <hr />
                    <Accordion.Item eventKey="3">
                      <Accordion.Header
                        onClick={() => handleAccordionToggle("c")}
                      >
                        <Col className="d-flex justify-content-between align-items-center">
                          <span className="fw-bold">
                            How can I get help if I'm stuck on a Frontend Mentor
                            challenge?
                          </span>
                          <Button
                            variant="link"
                            className="text-decoration-none accordion-but"
                          >
                            {!isAccordionOpen("c") ? (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="31"
                                fill="none"
                                viewBox="0 0 30 31"
                              >
                                <path
                                  fill="#AD28EB"
                                  d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
                                />
                              </svg>
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="31"
                                fill="none"
                                viewBox="0 0 30 31"
                              >
                                <path
                                  fill="#301534"
                                  d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
                                />
                              </svg>
                            )}
                          </Button>
                        </Col>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p className="fw-lighter fs-6 description">
                          The best place to get help is inside Frontend Mentor's
                          Discord community. There's a help channel where you
                          can ask questions and seek support from other
                          community members.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
