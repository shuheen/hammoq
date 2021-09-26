import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getUserDetails } from "../../actions/userActions";
import Navbar from "../layout/Navbar";
import Topbar from "../layout/Topbar";
import Profile from "../profile";

const Dashboard = ({ getUserDetails, user, auth, errors }) => {
  const { userData, userUpdated } = user;
  useEffect(() => {
    getUserDetails(auth.user.email);
  }, [auth]);

  return (
    <div className="row h-full" style={{ marginBottom: 0 }} id="dashboard">
      <Topbar />
      <div className="content">
        <Navbar />

        <div className="dashboard-content">
          <Profile
            userDetails={userData}
            isUserUpdated={userUpdated.status}
            errors={errors}
          />
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  getUserDetails: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { getUserDetails })(Dashboard);
