// interface for Register
export interface RegistrationFormData {
    username: string;
    email: string;
    //password: string;
    //confirmPassword: string;
    bank: string;
    branchdetails: string;
    businessaddress: string;
    businessname: string;
    ifsc: string;
    mobilenumber: number;
    vac: number;
  }
  // Response interface
 // Response interface

 
export interface ApiResponse {
  code: number;
  message?: string;
  description?: string;
}



  