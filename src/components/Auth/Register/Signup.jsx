import React, { useState } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css";
import { registerAdd } from "../../../core/Apis/auth/registerApis";

const Signup = () => {
  const [register, setRegister] = useState({});
  const navigate = useNavigate();
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setRegister((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // registrtation
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("api hit ");
    registerAdd(register)
      .then((data) => {
        console.log(data);
        
        toast.success("Registered Successfully", {
          onClose: () => {
            navigate("/login")
          },
        });
      })
      .catch((e) => {
        console.log(e.response.data.error);
        toast.error(e.response.data.error);
      });
  };
  return (
    <div className="container">
      <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      <section className="section1 register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <Container>
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex justify-content-center py-4">
                <Link
                  to="/"
                  className="logo-login d-flex align-items-center w-auto"
                >
                  <img
                    src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/logo.png"
                    alt=""
                  />
                  <span className="d-none d-lg-block">ProductAI</span>
                </Link>
              </div>

              <div className="card-login mb-3">
                <div className="card-body-login">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title-login text-center pb-0 fs-4">
                      Create an Account
                    </h5>
                  </div>
                  <Form className="row g-3 needs-validation" noValidate>
                    <Form.Group className="col-12" controlId="yourName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="username"
                        onChange={onChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your name!
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="col-12" controlId="yourEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        onChange={onChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter a valid email address!
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="col-12" controlId="yourPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        onChange={onChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your password!
                      </Form.Control.Feedback>
                    </Form.Group>
                    {/* 
                    <Col md={12}>
                      <Form.Check>
                        <Form.Check.Input
                          type="checkbox"
                          name="remember"
                          value="true"
                          id="rememberMe"
                        />
                        <Form.Check.Label htmlFor="rememberMe">
                          <span>
                            I agree and accept the{" "}
                            <Link to="#">terms and conditions</Link>
                          </span>{" "}
                        </Form.Check.Label>
                      </Form.Check>
                    </Col> */}
                    <div className="col-12">
                      <Button
                        variant="primary"
                        className="w-100"
                        type="submit"
                        onClick={handlesubmit}
                      >
                        Create Account
                      </Button>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">
                        Already have an account? <Link to="/login">Log in</Link>
                      </p>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Signup;
