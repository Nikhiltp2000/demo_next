export const validateRegistrationForm = (formData) => {
    let errors = {};
    // Validate userName
    if (!formData.username) {
      errors.username = 'Username is required';
    }
    // Validate email
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    //Validate password
    // if (!formData.password) {
    //   errors.password = 'Password is required';
    // } else if (formData.password.length < 6) {
    //   errors.password = 'Password must be at least 6 characters';
    // }
    //Validate confirm password
    // if (!formData.confirmPassword) {
    //   errors.confirmPassword = 'Confirm Password is required';
    // } else if (formData.confirmPassword !== formData.password) {
    //   errors.confirmPassword = 'Passwords do not match';
    // }

    // Validate Bank 
    if (!formData.bank) {
      errors.bank = 'Bank Name is required';
    }
    // Validate Branch Details
    if (!formData.branchdetails) {
      errors.branchdetails = 'Branch Details is required';
    }
    // Validate Business Address
    if (!formData.businessaddress) {
      errors.businessaddress = 'Business Address is required';
    }
    // Validate Business Name
    if (!formData.businessname) {
      errors.businessname = 'Business Name is required';
    }
    // Validate IFSC
    if (!formData.ifsc) {
      errors.ifsc = 'IFSC is required';
    }
    // Validate Mobile Number
    if (!formData.mobilenumber) {
      errors.mobilenumber = 'Mobile Number is required';
    }
    // Validate Vac
    if (!formData.vac) {
      errors.vac = 'Vac is required';
    }
  
    return errors;
  };
  