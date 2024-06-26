import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../Scss/Users.scss';
import { getAllUsers } from '../../Services/Users';
import Swal from 'sweetalert2';

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedUsers = await getAllUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        setError(error);
        console.error('Error fetching users:', error);
      }
    };
    fetchData();
  }, []);

  // Handle errors and display users if fetched successfully
  if (error) {
    Swal.fire('Error!', error.message, 'error');
    return <div>Failed to load users!</div>;
  }

  if (!users.length) {
    return <div>Loading users...</div>;
  }

  return (
    <div>
      <table className="table table-responsive table-striped table-hover ">
        <thead>
          <tr>
            <th>نام</th>
            <th>نام خانوادگی</th>
            <th>ایمیل</th>
            <th>محل کار</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.workplace}</td>
            </tr>
          ))}
        </tbody>
      </table>
   
    </div>
  );
};

export default GetUsers;
