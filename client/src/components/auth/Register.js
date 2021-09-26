import React, { useState, useEffect } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect, useDispatch } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import { GET_ERRORS } from "./../../actions/types";
import Button from "../buttons";

const userState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  gender: "",
};
const Register = ({ registerUser, auth, errors }) => {
  const [userDetails, setUserDetails] = useState(userState);
  const { name, email, password, confirmPassword, gender } = userDetails;
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push({ pathName: "/dashboard" });
    }
    dispatch({
      type: GET_ERRORS,
      payload: {},
    });
  }, []);

  const handleOnChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
      confirmPassword,
      gender,
    };
    registerUser(newUser, history);
  };

  return (
    <div
      className="row h-full register-bg"
      style={{
        paddingBottom: 0,
        marginBottom: 0,
      }}
    >
      <div className="col l4 m6 s12 right-container">
        <div className="login-container">
          <div className="col s12" style={{ paddingLeft: "11.250px" }}>
            <h4>
              <b>Register</b>
            </h4>
          </div>
          <form noValidate onSubmit={handleSubmit} id="register-form">
            <div className="input-field col s12">
              <input
                onChange={handleOnChange}
                value={name}
                error={errors.name}
                name="name"
                placeholder="Name"
                type="text"
                className={classnames("input-style", {
                  invalid: errors.name,
                })}
              />
              <span className="red-text">{errors.name}</span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={handleOnChange}
                value={email}
                error={errors.email}
                placeholder="Email"
                name="email"
                type="email"
                className={classnames("input-style", {
                  invalid: errors.email,
                })}
              />
              <span className="red-text">{errors.email}</span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={handleOnChange}
                value={password}
                error={errors.password}
                name="password"
                placeholder="Password"
                type="password"
                className={classnames("input-style", {
                  invalid: errors.password,
                })}
              />
              <span className="red-text">{errors.password}</span>
            </div>
            <div className="input-field col s12">
              <input
                onChange={handleOnChange}
                value={confirmPassword}
                error={errors.confirmPassword}
                name="confirmPassword"
                placeholder="Confirm Password"
                type="password"
                className={classnames("input-style", {
                  invalid: errors.confirmPassword,
                })}
              />
              <span className="red-text">{errors.confirmPassword}</span>
            </div>
            <div className="col s12" style={{ marginTop: "10px" }}>
              <label className="mar-r-lg">
                <input
                  name="gender"
                  value="male"
                  type="radio"
                  onChange={handleOnChange}
                />
                <span>Male</span>
              </label>
              <label>
                <input
                  name="gender"
                  value="female"
                  type="radio"
                  onChange={handleOnChange}
                />
                <span>Female</span>
              </label>
              <br />
              <span className="red-text">{errors.gender}</span>
            </div>

            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <Button text="Sign up" variant="primary" type="submit" />
              <p className="grey-text text-darken-1">
                Already have an account?{" "}
                <Link className="primary-text" to="/login">
                  <b>Log in</b>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="col l8 m6"></div>
    </div>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
