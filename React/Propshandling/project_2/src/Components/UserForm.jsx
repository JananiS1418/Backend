import React, { useState } from "react";
import PropTypes from "prop-types";

const UserForm = ({ initialData, onSubmit, submitLabel }) => {
  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError("Name is required");
      return;
    }

    setError("");
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
      </div>

      <div>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">{submitLabel}</button>
    </form>
  );
};

UserForm.propTypes = {
  initialData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitLabel: PropTypes.string
};

UserForm.defaultProps = {
  submitLabel: "Save"
};

export default UserForm;
