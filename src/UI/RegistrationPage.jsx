import React, { useState } from "react";
import "../CSS/register.css";
import { validateRegistrationForm } from "../JS/common/validation.js";
//import { RegistrationFormData, ApiResponse } from "../TS/interface.ts";
import { submitRegistrationForm } from "../TS/apiCall.tsx";


// type script method
// const RegistrationPage: React.FC = () => {
//   const [formData, setFormData] = useState<RegistrationFormData>({
//     username: "",
//     email: "",
//     bank: "",
//     branchdetails: "",
//     businessaddress: "",
//     businessname: "",
//     ifsc: "",
//     mobilenumber: 0,
//     vac: 0,
//   });



const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    bank: "",
    branchdetails: "",
    businessaddress: "",
    businessname: "",
    ifsc: "",
    mobilenumber: 0,
    vac: 0,
  });

  //   const [formData, setFormData] = useState({
  //     username: "",
  //     email: "",
  //     bank: "",
  //     branchdetails: "",
  //     businessaddress: "",
  //     businessname: "",
  //     ifsc: "",
  //     mobilenumber: "",
  //     vac: "",
  //   });

  //const [errors, setErrors] = useState<{ [key: string]: string }>({});
  //const [submitError, setSubmitError] = useState<string>("");
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateRegistrationForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const data = await submitRegistrationForm(formData);
       //const data: ApiResponse = await submitRegistrationForm(formData);
        console.log("API Response:", data);

        // Handle success or display message to the user
        if (data.code === 200) {
          alert("Registration successful!");
        } else {
          setSubmitError(data.message || "Registrartion Failed");
          alert("Registration failed. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error.message);
        setSubmitError(
          "An error occurred while registering. Please try again later."
        );
        alert("An error occurred while registering. Please try again later.");
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const validationErrors = validateRegistrationForm(formData);
  //     if (Object.keys(validationErrors).length === 0) {
  //       // Form is valid, proceed with registration
  //       console.log("Form submitted successfully", formData);
  //       // You can add logic here to submit the form data to your backend
  //     } else {
  //       setErrors(validationErrors);
  //     }
  //   };

  return (
    <div className="registration-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        {/* <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div> */}

        {/* <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
        </div> */}

        {/* Additional fields based on your entity */}
        <div className="form-group">
          <label>Bank</label>
          <input
            type="text"
            name="bank"
            value={formData.bank}
            onChange={handleChange}
          />
          {errors.bank && <span className="error">{errors.bank}</span>}
        </div>

        <div className="form-group">
          <label>Branch Details</label>
          <input
            type="text"
            name="branchdetails"
            value={formData.branchdetails}
            onChange={handleChange}
          />
          {errors.branchdetails && (
            <span className="error">{errors.branchdetails}</span>
          )}
        </div>

        <div className="form-group">
          <label>Business Address</label>
          <input
            type="text"
            name="businessaddress"
            value={formData.businessaddress}
            onChange={handleChange}
          />
          {errors.businessaddress && (
            <span className="error">{errors.businessaddress}</span>
          )}
        </div>

        <div className="form-group">
          <label>Business Name</label>
          <input
            type="text"
            name="businessname"
            value={formData.businessname}
            onChange={handleChange}
          />
          {errors.businessname && (
            <span className="error">{errors.businessname}</span>
          )}
        </div>

        <div className="form-group">
          <label>IFSC Code</label>
          <input
            type="text"
            name="ifsc"
            value={formData.ifsc}
            onChange={handleChange}
          />
          {errors.ifsc && <span className="error">{errors.ifsc}</span>}
        </div>

        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="text"
            name="mobilenumber"
            value={formData.mobilenumber}
            onChange={handleChange}
          />
          {errors.mobilenumber && (
            <span className="error">{errors.mobilenumber}</span>
          )}
        </div>

        <div className="form-group">
          <label>VAC</label>
          <input
            type="text"
            name="vac"
            value={formData.vac}
            onChange={handleChange}
          />
          {errors.vac && <span className="error">{errors.vac}</span>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
