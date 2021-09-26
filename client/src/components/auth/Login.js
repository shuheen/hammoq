import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect, useDispatch } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { GET_ERRORS } from "./../../actions/types";
import Button from "../buttons";

const userState = {
  email: "",
  password: "",
};
const Login = ({ loginUser, auth, errors }) => {
  const [userDetails, setUserDetails] = useState(userState);
  const { email, password } = userDetails;
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push({ pathName: "/dashboard" });
    }
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  }, []);

  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push("/dashboard");
    }
  }, [auth.isAuthenticated]);

  const handleOnChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    loginUser(userData);
  };

  return (
    <div
      className="row h-full login-bg"
      style={{
        paddingBottom: 0,
        marginBottom: 0,
      }}
    >
      <div className="col l8 m6"></div>
      <div className="col l4 m6 s12 right-container">
        <div className="login-container">
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <h4>
              <b>Login</b>
            </h4>
          </div>
          <form noValidate onSubmit={handleSubmit}>
            <div className="input-field col s12">
              <input
                onChange={handleOnChange}
                value={email}
                error={errors.email}
                id="email"
                type="email"
                className={classnames("", {
                  invalid: errors.email || errors.emailnotfound,
                })}
              />
              <label htmlFor="email">Email</label>
              <span className="red-text">
                {errors.email}
                {errors.emailnotfound}
              </span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={handleOnChange}
                value={password}
                error={errors.password}
                id="password"
                type="password"
                className={classnames("", {
                  invalid: errors.password || errors.passwordincorrect,
                })}
              />
              <label htmlFor="password">Password</label>
              <span className="red-text">
                {errors.password}
                {errors.passwordincorrect}
              </span>
            </div>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <Button text="Log In" variant="primary" type="submit" />
              <p className="grey-text text-darken-1">
                Don't have an account?{" "}
                <Link className="primary-text" to="/register">
                  <b>Sign up</b>
                </Link>
              </p>
            </div>
          </form>
          <div className="pad-sm social-container">
            <button
              className="btn-floating btn-medium google-bg waves-effect waves-light"
              type="submit"
              name="action"
            >
              <i className="fab fa-google"></i>
            </button>
            <button
              className="btn-floating btn-medium linkedin-bg waves-effect waves-light"
              type="submit"
              name="action"
            >
              <i className="fab fa-linkedin-in"></i>
            </button>

            <button
              className="btn-floating btn-medium facebook-bg waves-effect waves-light"
              type="submit"
              name="action"
            >
              <i className="fab fa-facebook-f"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
