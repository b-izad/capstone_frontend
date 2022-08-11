import React from "react";
import User from "./User";
import PropTypes from "prop-types";

const UserList = ({ userName, password, email, profile }) => {
  <>
    {UserList.map((user) => {
      return (
        <User
          key={user.user_id}
          userId={user.card_id}
          password={user.password}
          email={user.email}
          profile-={user.profile}
        />
      );
    })}
  </>;
};

UserList.propTypes = {
  Users: PropTypes.arrayOf({
    user_id: PropTypes.number.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    profile: PropTypes.object.isRequired,
  }),
};

export default UserList;
