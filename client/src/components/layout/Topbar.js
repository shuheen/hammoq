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
      <i
        class="material-icons white-text"
        onClick={onLogoutClick}
        style={{ cursor: "pointer" }}
        title="Log out"
      >
        power_settings_new
      </i>
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
