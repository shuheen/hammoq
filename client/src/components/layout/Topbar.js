import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

const Topbar = ({ logoutUser }) => {
  const onLogoutClick = (e) => {
    e.preventDefault();
    logoutUser();
  };
  return (
    <div className="topbar right-align">
      <button
        style={{
          width: "150px",
          borderRadius: "3px",
          letterSpacing: "1.5px",
        }}
        onClick={onLogoutClick}
        className="btn btn-small waves-effect waves-light hoverable white black-text accent-3"
      >
        Logout
      </button>
    </div>
  );
};

Topbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Topbar);
