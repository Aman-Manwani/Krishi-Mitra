import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h1 className="registration_head">Registration Form</h1>
      <form>
        <label for="first_name">First Name:</label>
        <input type="text" id="first_name" name="first_name" required />

        <label for="last_name">Last Name:</label>
        <input type="text" id="last_name" name="last_name" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="email">Profile Picture :</label>
        <input type="file" id="file" name="file" />

        <label for="contact_number">Contact Number:</label>
        <input type="tel" id="contact_number" name="contact_number" required />

        <label for="current_city">Current City:</label>
        <input type="text" id="current_city" name="current_city" required />

        <label for="gender">Gender:</label>
        <select id="gender" name="gender" required>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label for="languages_known">Languages Known:</label>
        <input
          type="text"
          id="languages_known"
          name="languages_known"
          required
        />

        <Link to="/register/education">
          <input type="submit" value="Next" />
        </Link>
      </form>
    </div>
  );
};

export default Register;
