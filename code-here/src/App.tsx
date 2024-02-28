import "bootstrap/dist/css/bootstrap-grid.min.css";
import { Container, Accordion, Card, Row, Col, Button } from "react-bootstrap";

function App() {
  return (
    <Container fluid className="gx-5 gy-5 background-image-container">
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6}>
          <Card className="text-center">
            <Card.Body>
              <Row>
                <h3 className="me-auto"> FAQs </h3>
              </Row>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="me-auto">
                    What is Frontend Mentor, and how will it help me?
                    <Button variant="link" className="text-decoration-none">
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
                    </Button>
                  </Accordion.Header>
                  <Accordion.Body>
                    Frontend Mentor offers realistic coding challenges to help
                    developers improve their frontend coding skills with
                    projects in HTML, CSS and JavaScript. It's suitable for all
                    levels and ideal for portfolio building.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    {" "}
                    Is Frontend Mentor free?
                    <Button variant="link" className="text-decoration-none">
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
                    </Button>
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, Frontend Mentor offers both free and premium coding
                    challenges, with the free option providing access to a range
                    of projects suitable for all skill levels.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    {" "}
                    Can I use Frontend Mentor projects in my portfolio?
                    <Button variant="link" className="text-decoration-none">
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
                    </Button>
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes, you can use projects completed on Frontend Mentor in
                    your portfolio. It's an excellent way to showcase your
                    skills to potential employers!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    {" "}
                    How can I get help if I'm stuck on a Frontend Mentor
                    challenge?
                    <Button variant="link" className="text-decoration-none">
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
                    </Button>
                  </Accordion.Header>
                  <Accordion.Body>
                    The best place to get help is inside Frontend Mentor's
                    Discord community. There's a help channel where you can ask
                    questions and seek support from other community members.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
