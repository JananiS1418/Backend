import React from "react";
import PropTypes from "prop-types";

const UserChild = ({ user, onUserSelect }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>City:</b> {user.city}</p>

      <button onClick={() => onUserSelect(user)}>
        Select User
      </button>
    </div>
  );
};

UserChild.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
  }).isRequired,
  onUserSelect: PropTypes.func.isRequired
};

export default UserChild;
