import React, { useState, useEffect } from "react";
//import { RegistrationFormData } from "../TS/interface.ts";
import { fetchAllUsers } from "../TS/apiCall.tsx";

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllUsers();
        setUsers(data.message);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Bank: {user.bank}</p>
            <p>Branch Details: {user.branchdetails}</p>
            <p>Business Address: {user.businessaddress}</p>
            <p>Business Name: {user.businessname}</p>
            <p>IFSC Code: {user.ifsc}</p>
            <p>Mobile Number: {user.mobilenumber}</p>
            <p>VAC: {user.vac}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListPage;
