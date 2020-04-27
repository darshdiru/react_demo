import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../../redux/user/UserAction";

function UserContainer({ userData, userfetch }) {
  useEffect(() => {
    userfetch();
  }, []);

  return userData.loading ? (
    <h2> loading </h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h2>users list</h2>
      <div>
        {userData.users.map((u) => (
          <p>{u.name}</p>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userfetch: () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
