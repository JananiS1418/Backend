import React from "react";
import UserForm from "./UserForm";

const UserFormParent = () => {
  const initialUserData = {
    name: "Janu",
    email: "janu@gmail.com"
  };

  const handleSubmit = (data) => {
    console.log("Submitted Data:", data);
  };

  return (
    <div>
      <h2>User Form Parent</h2>
      <UserForm
        initialData={initialUserData}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default UserFormParent;
