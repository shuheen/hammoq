import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { updateUserDetails } from "../../actions/userActions";
import Button from "../buttons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = ({ updateUserDetails, userDetails, isUserUpdated, errors }) => {
  const [updatedUserDetails, setUpdatedUserDetails] = useState({});
  let container;
  useEffect(() => {
    setUpdatedUserDetails(userDetails);
  }, [userDetails]);
  const handleOnChange = (e) => {
    e.target.name === "street" ||
    e.target.name === "city" ||
    e.target.name === "state" ||
    e.target.name === "country"
      ? setUpdatedUserDetails({
          ...updatedUserDetails,
          address: {
            ...updatedUserDetails.address,
            [e.target.name]: e.target.value,
          },
        })
      : setUpdatedUserDetails({
          ...updatedUserDetails,
          [e.target.name]: e.target.value,
        });
  };
  const { name, email, phone, gender, address } = updatedUserDetails;
  // const { street, city, state, country } = updatedUserDetails.address;
  const street = address?.street;
  const city = address?.city;
  const state = address?.state;
  const country = address?.country;
  const handleSubmit = (e) => {
    e.preventDefault();
    const updateUser = {
      name,
      phone,
      email,
      gender,
      address,
    };
    updateUserDetails(updateUser);
  };
  useEffect(() => {
    if (isUserUpdated) {
      toast.success("Successfully Updated!!");
    }
  }, [isUserUpdated]);

  return (
    <div className="row pad-md">
      <div className="col s12">
        <div className="user-image-container">
          <div className="user-image">
            <img
              className="circle"
              alt="image"
              src="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"
            />
            <div className="edit-photo-container">
              <a href="#">Edit Photo</a>
            </div>
          </div>
        </div>
      </div>
      <form noValidate className="pad-md" onSubmit={handleSubmit}>
        <div className="col m6 s12">
          <div className="input-field col s12">
            <span className="label-profile">Name</span>
            <input
              onChange={handleOnChange}
              value={name}
              error={errors.name}
              placeholder="Enter your Name here"
              name="name"
              type="text"
              className={classnames("", {
                invalid: errors.name,
              })}
            />

            <span className="red-text">{errors.name}</span>
          </div>
          <div className="input-field col s12">
            <span className="label-profile">Email</span>
            <input
              onChange={handleOnChange}
              value={email}
              error={errors.email}
              placeholder="Enter your Email here"
              name="email"
              type="email"
              disabled
              className={classnames("", {
                invalid: errors.email,
              })}
            />
            <span className="red-text">{errors.email}</span>
          </div>
          <div className="input-field col s12">
            <span className="label-profile">Phone</span>
            <input
              onChange={handleOnChange}
              value={phone}
              error={errors.phone}
              placeholder="Enter your Phone no. here"
              name="phone"
              autoComplete="off"
              type="text"
              className={classnames("", {
                invalid: errors.phone,
              })}
            />
            <span className="red-text">{errors.phone}</span>
          </div>

          <div className="col s12 pad-sm">
            <label
              htmlFor="gender"
              className="label-profile"
              style={{ display: "inline-block", marginBottom: "15px" }}
            >
              Gender
            </label>
            <br />
            <label className="mar-r-lg">
              <input
                name="gender"
                value="male"
                type="radio"
                onChange={handleOnChange}
                checked={gender === "male"}
              />
              <span>Male</span>
            </label>
            <label>
              <input
                name="gender"
                value="female"
                type="radio"
                onChange={handleOnChange}
                checked={gender === "female"}
              />
              <span>Female</span>
            </label>
            <br />
            <span className="red-text">{errors.gender}</span>
          </div>
        </div>
        <div className="col m6 s12">
          <div className="input-field col s12">
            <span className="label-profile">Street</span>
            <input
              onChange={handleOnChange}
              value={street}
              error={errors.street}
              placeholder="Enter your Street here"
              name="street"
              type="text"
              className={classnames("", {
                invalid: errors.street,
              })}
            />
            <span className="red-text">{errors.street}</span>
          </div>
          <div className="input-field col s12">
            <span className="label-profile">City</span>
            <input
              onChange={handleOnChange}
              value={city}
              error={errors.city}
              placeholder="Enter your City here"
              name="city"
              type="text"
              className={classnames("", {
                invalid: errors.city,
              })}
            />
            <span className="red-text">{errors.city}</span>
          </div>
          <div className="input-field col s12">
            <span className="label-profile">State</span>
            <input
              onChange={handleOnChange}
              value={state}
              error={errors.state}
              placeholder="Enter your State/Province here"
              name="state"
              type="text"
              className={classnames("", {
                invalid: errors.state,
              })}
            />
            <span className="red-text">{errors.state}</span>
          </div>
          <div className="input-field col s12">
            <span className="label-profile">Country</span>
            <input
              onChange={handleOnChange}
              value={country}
              error={errors.country}
              placeholder="Enter your Country here"
              name="country"
              type="text"
              className={classnames("", {
                invalid: errors.country,
              })}
              data-group="address"
            />
            <span className="red-text">{errors.country}</span>
          </div>
        </div>
        <div className="col s12 center-align">
          <div className="pad-lg">
            <Button text="Update" variant="primary" type="submit" />
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

Profile.propTypes = {
  updateUserDetails: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { updateUserDetails })(
  withRouter(Profile)
);
