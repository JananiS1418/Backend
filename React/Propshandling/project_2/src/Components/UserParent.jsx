import React from "react";
import PropTypes from "prop-types";
import UserChild from "./UserChild";

const UserParent = ({ users, onUserSelect }) => {
  const filteredUsers = users.filter(user => user.city === "Chennai");

  return (
    <div>
      <h3>UserParent</h3>

      {filteredUsers.map(user => (
        <UserChild
          key={user.id}
          user={user}
          onUserSelect={onUserSelect}
        />
      ))}
    </div>
  );
};

UserParent.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  onUserSelect: PropTypes.func.isRequired
};

export default UserParent;
