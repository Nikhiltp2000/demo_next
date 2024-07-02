import { RegistrationFormData, ApiResponse } from "./interface";

const API_BASE_URL = 'http://172.16.4.64:8080';

export const submitRegistrationForm = async (
    formData: RegistrationFormData
  ): Promise<ApiResponse> => {
    try {
        const response = await fetch(`${API_BASE_URL}/saveAccountInfo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data: ApiResponse = await response.json();
      console.log('Api response check !!!', data);
      return data;
    } catch (error) {
      console.error('Error submitting form:', error);
      throw new Error('An error occurred while registering. Please try again later.');
    }
  };


// Fetching all users
export const fetchAllUsers = async (): Promise<RegistrationFormData[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/getAccountInfo`,{
      method: 'GET',
      headers:{
        'content-Type': 'application/json',
      },
    });
    if(!response.ok){
      throw new Error('Network response was not ok');
    }
    const data: RegistrationFormData[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('An error occurred while fetching users. Please try again later.');
  }
  };

  



 // export default submitRegistrationForm;