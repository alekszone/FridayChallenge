import React, { Component } from "react";
import { Container, Image, Button, FormControl, Form } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
export default class Login extends Component {
  render() {
    return (
      <>
        <Container fluid className="loginPage">
          <i
            className="fa fa-spotify"
            style={{ fontSize: "35px", color: "white" }}
          >
            Spotify
          </i>
        </Container>
        <Container>
          <div className="loginContent d-flex flex-column">
            <span>To continue, log in to Spotify.</span>
            <Button
              id="facebookBtn"
              onClick={() =>
                alert(
                  "We haven't implemented this feature yet, you can log in with your credentials"
                )
              }
            >
              CONTINUE WITH FACEBOOK
            </Button>
            <Button
              id="appleBtn"
              onClick={() =>
                alert(
                  "We haven't implemented this feature yet, you can log in with your credentials"
                )
              }
            >
              CONTINUE WITH APPLE
            </Button>
            <div className="d-flex justify-content-between">
              <hr />
              <p>OR</p>
              <hr />
            </div>
            {/* onSubmit={handleSubmit} */}
            <Form>
              <Form.Group controlId="formBasicEmail">
                <FormControl
                  type="text"
                  placeholder="Email address"
                  // value={email}
                  // onChange={(e) => setEmail(e.currentTarget.value)}
                  className="mr-sm-2"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <FormControl
                  type="password"
                  placeholder="Password"
                  // value={password}
                  // onChange={(e) => setPassword(e.currentTarget.value)}
                  className="mr-sm-2"
                />
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Remeber me" />
                </Form.Group>
                <Button variant="success" id="loginBtn" type="submit">
                  LOG IN
                </Button>
              </div>
              <div className="d-flex justify-content-center">
                <Link to="">Forgot your password?</Link>
              </div>
              <hr />
              <div className="signupSection  d-flex flex-column">
                <span>Don't have an account?</span>
                <Button
                  id="signupBtn"
                  // onClick={() => props.history.push("/login?signup")}
                >
                  SIGN UP FOR SPOTIFY
                </Button>
                <hr />
                <span className="terms">
                  If you click "Log in with Facebook" and are not a Spotify
                  user, you will be registered and you agree to Spotify's{" "}
                  <span>Terms & Conditions</span> and{" "}
                  <span>Privacy Policy</span>.
                </span>
              </div>
            </Form>
          </div>
        </Container>
      </>
    );
  }
}
