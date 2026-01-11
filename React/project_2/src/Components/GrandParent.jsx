import React from "react";
import UserParent from "./UserParent";

const GrandParent = () => {
  const users = [
    { id: 1, name: "Janu", email: "janu@gmail.com", city: "Chennai" },
    { id: 2, name: "John", email: "john@gmail.com", city: "Bangalore" }
  ];

  const onUserSelect = (user) => {
    console.log("Selected User:", user);
  };

  return (
    <div>
      <h2>GrandParent</h2>
      <UserParent users={users} onUserSelect={onUserSelect} />
    </div>
  );
};

export default GrandParent;
